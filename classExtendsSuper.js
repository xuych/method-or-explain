class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.he = 'test'
  }
  sayName() {
    console.log(`age is ${this.age}, name is ${this.name}`)
  } //会被覆盖重写
  log() {
    console.log(`I am ${this.name},age is ${this.age},he is ${this.he}`)
  }
}
class Man extends Person {
  constructor(name, age) {
    super(name, age)
    this.gender = 'man'
  }
  sayName() {
    console.log(`I am a ${this.gender},age is ${this.age}, name is ${this.name}`)
  }
}
let bob = new Man('Bob', 2)
bob.sayName()
bob.log()

class httpRequest {
  constructor(url, loader = true) {
    this.loader = loader
    this.url = 'https://api.it120.cc/' + url
    this.ll = 'll'
    this.defConfig = {
      url: this.url,
      data: {},
      timeout: '',
      dataType: 'json', // 返回的数据格式:json || text
      enableCache: false, // 开启 cache
      enableHttp2: false, // 开启 http2
      enableQuic: false, // 开启 quic
      header: {
        'content-type': 'application/json', // 默认值
      }, // 请求的头文件，一般有两种 1、'content-type':'application/json'会对数据进行JSON序列化 2、'content-type':'x-www-form-urlencoded'会将数据转换成 query string
      method: 'POST', //HTTP 请求方法,有8种,OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE
      responseType: 'text', // 响应的数据类型: arraybuffer || text
      timeout: 0,
    }
  }
  request(options) {
    console.log(this.ll)
    // let opts = {
    //   ...this.defConfig,
    //   ...options,
    // }
    // console.log(opts)
    // if (this.loader) {
    //   wx.showLoading({
    //     title: '加载中...',
    //     mask: true,
    //   })
    // }
  }
}
let instance = new httpRequest()
instance.request()
