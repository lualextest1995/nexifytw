import AxiosBuilder from './base/axiosBuilder'
import AxiosDirector from './base/axiosDirector'

const ORIGIN_URL = 'http://nexifytw.mynetgear.com:45000/api/Record/'
const CLOUDEFLARE_WORKER_URL = 'https://lively-river-3c62.z0809777.workers.dev/api/Record/'
const currentUrl = import.meta.env.MODE === 'production' ? CLOUDEFLARE_WORKER_URL : ORIGIN_URL

class NexifytwApiBuilder extends AxiosBuilder {
  constructor() {
    super()
    this.setProperty('baseURL', currentUrl)
  }
}

const nexifytwApiBuilder = new NexifytwApiBuilder()
const nexifytwApiDirector = new AxiosDirector(nexifytwApiBuilder)
const nexifytwAxiosInstance = nexifytwApiDirector.build()

export default nexifytwAxiosInstance
