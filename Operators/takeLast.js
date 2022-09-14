/**
 * Waits for the source to complete, then emits the last N values from the source
 */

const { from, take, takeLast, interval } = rxjs;



// from([1, 2, 3, 4]).pipe(takeLast(2)).subscribe(console.log);

interval(100)
  .pipe(
    take(20),
    takeLast(10)
  ).subscribe(console.log); 
