import axios from 'axios'

class AxiosBuilder {
  constructor() {
    this.instance = axios.create()
  }

  setProperty(key, value) {
    this.instance.defaults[key] = value
    return this
  }

  setProperties(properties) {
    Object.keys(properties).forEach((key) => {
      this.instance.defaults[key] = properties[key]
    })
    return this
  }

  addRequestInterceptor(onFulfilled, onRejected) {
    this.instance.interceptors.request.use(onFulfilled, onRejected)
    return this
  }

  addResponseInterceptor(onFulfilled, onRejected) {
    this.instance.interceptors.response.use(onFulfilled, onRejected)
    return this
  }

  build() {
    return this.instance
  }
}

export default AxiosBuilder
