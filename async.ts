// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
type nextType = { value: Promise<number>; done: boolean }

// promise 函数
function fn(num: number): Promise<number> {
  return new Promise((res) => {
    setTimeout(() => {
      res(num * 2)
    }, 1000)
  })
}

// async 函数
async function asyncFn1() {
  const num1 = await fn(1)
  const num2 = await fn(num1)
  const num3 = await fn(num2)
  return num3 // 返回的是一个 promise
}

// generator
function* gen(): Generator<Promise<number>, number, any> {
  const num1 = yield fn(1)
  const num2 = yield fn(num1)
  const num3 = yield fn(num2)
  return num3
}

// const g = gen()
// console.log(g.next())
// console.log(g.next())
// console.log(g.next())
/**
 * { value: Promise { <pending> }, done: false }
 * { value: Promise { <pending> }, done: false }
 * { value: 3, done: true }
 */
// const next1 = g.next() as nextType
// next1.value.then((res) => {
//   console.log(next1)
//   console.log(res) // 1s 后输出2
//   const next2 = g.next(res) as nextType
//   next2.value.then((res) => {
//     console.log(next2)
//     console.log(res) // 2s 后输出4
//     const next3 = g.next(res) as nextType
//     next3.value.then((res) => {
//       console.log(next3)
//       console.log(res) // 3s 后输出8
//       const next4 = g.next(res)
//       console.log(next4)
//     })
//   })
// })

function generatorToAsync(generatorFn: (arg?: any) => Generator<Promise<number>, number, number>) {
  return function () {
    const gen = generatorFn.apply(this, arguments) as Generator<Promise<number>, number, number>

    return new Promise((resolve, rej) => {
      go('next') // 第一次执行

      function go(key: 'next' | 'throw', arg?: any): Promise<any> | void {
        let res
        try {
          res = gen[key](arg)
        } catch (error) {
          return rej(error)
        }

        // 解构获得value和done
        const { value, done } = res
        if (done) {
          return resolve(value)
        }
        // value 有可能是一个常量，所以要用 Promise.resolve
        return Promise.resolve(value).then(
          (res) => go('next', res),
          (err) => {
            go('throw', err)
          }
        )
      }
    })
  }
}

const asyncFn2 = generatorToAsync(gen)

asyncFn2().then((res) => {
  console.log(res)
})
