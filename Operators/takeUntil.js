/**
 * Emits the values emitted by the source Observable until a notifier Observable emits a value
 */

const {takeUntil, from, Observable} = rxjs;
console.log('takeUntil');

const observable = new Observable((subscriber) => {
  setInterval(() => subscriber.next(21), 1001);
});

observable.subscribe(console.log);

const num = () => {
  const ary = []
  for(var i = 0; i <= 1000; i++) {
    ary.push(i);
  }
  return ary;
}

// setTimeout(() => {
//   from()
//   .pipe(takeUntil(observable))
//   .subscribe(console.log);
// },1000);


// const x = of(1,2,3)
//   .pipe(take(2));
// console.log(x);
// x.subscribe(console.log);