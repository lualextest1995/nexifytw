<template>
  <div class="container">
    <div class="buttons">
      <BaseButton v-for="button in buttons" :key="button.id" v-bind="button" />
    </div>
    <BaseTable :tableColumns="tableColumns" :tableRows="tableRows" :components="components" />
  </div>
</template>

<script setup>
import BaseButton from './components/global/BaseButton.vue'
import BaseInput from './components/global/BaseInput.vue'
import BaseDate from './components/global/BaseDate.vue'
import BaseRange from './components/global/BaseRange.vue'
import BaseTable from './components/BaseTable.vue'
import dateFormatterHelper from './utils/dateFormatterHelper'
import nexifytwAxiosInstance from './apis/nexifytwApiBuilder'
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'
const components = {
  input: BaseInput,
  date: BaseDate,
  range: BaseRange,
}
const originButtons = [
  {
    text: 'Add',
    textColor: 'white',
    buttonColor: '#0080FF',
    onClick: addRow,
  },
  {
    text: 'Save',
    textColor: 'white',
    buttonColor: 'green',
    onClick: saveData,
  },
  {
    text: 'Update',
    textColor: 'white',
    buttonColor: '#EA0000',
    onClick: updateData,
  },
]
const buttons = computed(() => {
  return originButtons.map((button) => {
    return {
      ...button,
      id: nanoid(),
    }
  })
})
const originTableColumns = [
  {
    text: 'Name',
    value: 'Name',
    type: 'input',
  },
  {
    text: 'Birthday',
    value: 'DateOfBirth',
    type: 'date',
  },
  {
    text: 'Salary',
    value: 'Salary',
    type: 'range',
  },
  {
    text: 'Address',
    value: 'Address',
    type: 'input',
  },
]
const tableColumns = computed(() => {
  return originTableColumns.map((column) => {
    return {
      ...column,
      id: nanoid(),
    }
  })
})
const tableRows = ref([])

function addRow() {
  tableRows.value.unshift({
    Name: '',
    DateOfBirth: dateFormatterHelper(new Date()),
    Salary: 50000,
    Address: '',
    id: nanoid(),
  })
}
async function saveData() {
  if (tableRows.value.length === 0) {
    return
  }
  const data = tableRows.value.map(({ id, ...other }) => other)
  try {
    const response = await nexifytwAxiosInstance.post('/SaveRecords', data)
    if (response.status !== 200) {
      throw new Error('Failed to save data')
    }
    await updateData()
  } catch (e) {
    console.error(e)
  }
}
async function updateData() {
  try {
    const response = await nexifytwAxiosInstance.get('/GetRecords')
    if (response.status !== 200) {
      throw new Error('Failed to fetch data')
    }
    const data = response.data.Data
    tableRows.value = data.map((row) => {
      return {
        ...row,
        id: nanoid(),
        DateOfBirth: dateFormatterHelper(new Date(row.DateOfBirth)),
      }
    })
  } catch (e) {
    console.error(e)
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 30px 50px;
  width: 100vw;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
