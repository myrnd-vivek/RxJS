/**
 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds true, but emits all further source items as soon as the condition becomes false.
 */


 const { interval, skipWhile,take } = rxjs;

 interval(100)
  .pipe(
    skipWhile((val, index) => val < 10),
    take(10)
  )
  .subscribe(console.log,console.error,() => console.log('completed'));
