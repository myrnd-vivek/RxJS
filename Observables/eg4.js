// console.log('before');

// async function foo() {
//   console.log('hello');
//   setTimeout(() => {'hello world'},1000);
// }

// const x = await foo;
// console.log(x);
// console.log('after');

const { Observable } = rxjs;

const foo = new Observable((subscriber) => {
  console.log('Hello');
  subscriber.next(42);
  subscriber.next(100);
  subscriber.next(200);
  setTimeout(() => {
    subscriber.next(300); // happens asynchronously
  }, 1000);
});

console.log('before');
foo.subscribe((x) => {
  console.log(x);
});
console.log('after');