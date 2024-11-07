class AxiosDirector {
  constructor(builder) {
    this.builder = builder
  }

  build() {
    return this.builder.build()
  }
}

export default AxiosDirector
