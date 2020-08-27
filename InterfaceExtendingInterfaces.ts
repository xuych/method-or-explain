interface Component {
  w: number
  h: number
  enableEvents(enable: boolean): void
}

interface Button extends Component {
  label: string
}

//implementing extended interface
class RadioButton implements Button {
  h: number
  label: string
  w: number
  private enable: boolean

  constructor(h: number, w: number, label: string) {
    this.h = h
    this.w = w
    this.label = label
  }

  enableEvents(enable: boolean): void {
    this.enable = enable
  }
}

let radioButton: Button = new RadioButton(100, 20, 'test')
radioButton.enableEvents(true)
console.log(radioButton)

class Person {
  name: string //需要指明属性类型
  age: number
  constructor(name: string, age: number) {
    //需要指明参数类型
    this.name = name
    this.age = age
  }
  sayName() {
    console.log(`I am ${this.name}, age of ${this.age}`)
  }
}
class Man extends Person {
  gender: string //需要提前声明gender属性的类型
  constructor(name: string, age: number) {
    //传入的参数需要指明类型
    super(name, age)
    this.gender = 'man'
  }
  sayName() {
    console.log(`I am a ${this.gender} , name is ${this.name},age of ${this.age}`) //可以使用ES6模板语法
  }
}
let bob = new Man('Bob', 2)
bob.sayName() //I am a man, name is Bob, age of 2
