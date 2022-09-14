/**
 * Emits only the first value (or the first value that meets some condition) emitted by the source Observable
 */

const {first, of } = rxjs;

//Example I

of(1,2,3,4,5)
  .pipe(first())
  .subscribe(console.log,console.error,() => console.log('completed'));

//Example II

// of(1,2,3,4,5)
//   .pipe(first((val) => val > 2))
//   .subscribe(console.log,console.error,() => console.log('completed'));

//Example III

// of(1,2,3,4,5)
//   .pipe(first((val) => val > 10))
//   .subscribe(console.log,console.error,() => console.log('completed'));

//Example IV

// const source$ = of(1,2,3);

// of(1,2,3,4,5)
// .pipe(first((val) => val > 10, 15))
// .subscribe(console.log,console.error,() => console.log('completed'));