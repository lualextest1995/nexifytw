<template>
  <table class="base_table">
    <thead>
      <tr>
        <th v-for="column in props.tableColumns" :key="column.id">{{ column.text }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in props.tableRows" :key="row.id">
        <td v-for="column in props.tableColumns" :key="column.id">
          <component :is="props.components[column.type]" v-model="row[column.value]" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  tableColumns: {
    type: Array,
    required: true,
  },
  tableRows: {
    type: Array,
    default: () => [],
  },
  components: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.base_table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 5px 0;
    th,
    td {
      width: 100%;
      text-align: left;
      &:first-child {
        padding-left: 10px;
      }
    }
  }
}
</style>
