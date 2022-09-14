/**
 * Emits only the first count values emitted by the source Observable.
 */

const {take, of} = rxjs;

// of(1,2,3)
//   .pipe(take(2))
//   .subscribe(console.log);


const x = of(1,2,3)
  .pipe(take(2));

console.log(x);
x.subscribe(console.log);