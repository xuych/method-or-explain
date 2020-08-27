class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayName() {
    console.log(`age is ${this.age}, name is ${this.name}`)
  } //会被覆盖重写
  log() {
    console.log(`I am ${this.name},age is ${this.age}`)
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
