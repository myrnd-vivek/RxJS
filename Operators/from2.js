//Converting promise to an observable

const { from } = rxjs;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve the promise, sending data...')
  },3000)
})

from(promise).subscribe(console.log);