import AxiosBuilder from './base/axiosBuilder'
import AxiosDirector from './base/axiosDirector'

class NexifytwApiBuilder extends AxiosBuilder {
  constructor() {
    super()
    this.setProperty('baseURL', 'http://nexifytw.mynetgear.com:45000/api/Record/')
  }
}

const nexifytwApiBuilder = new NexifytwApiBuilder()
const nexifytwApiDirector = new AxiosDirector(nexifytwApiBuilder)
const nexifytwAxiosInstance = nexifytwApiDirector.build()

export default nexifytwAxiosInstance
