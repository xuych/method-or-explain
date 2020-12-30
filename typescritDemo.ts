{
  type lady = { age: number; name: string }
  interface typeF1 {
    o: number
    b: number
  }
  const f1 = ({ o, b }: typeF1) => {
    return o + b
  }
  const arr: (string | number)[] = ['1', 1]
  const kk: lady[] = [{ name: '1', age: 2 }]
  const a: number = f1({ o: 1, b: 2 })
  const jj: [string, number] = ['1', 1]
  class test implements typeF1 {
    o: number
    b: number
  }
  interface test2 extends lady {
    k: number
    h: number
  }
  const reg = /\d/
  const str = 'str'
  const hello: test = { o: 1, b: 1 }
  const test2: test2 = { age: 1, name: '1', k: 1, h: 1 }
  console.log(a, hello, test2)
  const reduceArr = [1, 2, 4, 5, 6, 7]
  const sumReduceArr = reduceArr.reduce((pre: number, cur: number) => pre + cur)
  console.log(sumReduceArr)
}
