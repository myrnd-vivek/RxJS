/**
 * Returns an Observable that emits only the last item emitted by the source Observable. It optionally takes a predicate function as a parameter, in which case, rather than emitting the last item from the source Observable, the resulting Observable will emit the last item from the source Observable that satisfies the predicate.
 */

 const { from, last } = rxjs;

// from(['Apple', 'Mango', 'Bannana'])
//  .pipe(last())
//  .subscribe(value => console.log(`Last Item: ${ value }`));
 
//  from(['Apple', 'Mango', 'Bannana'])
//  .pipe(last((val) => val==='Mango'))
//  .subscribe(value => console.log(`Last Item: ${ value }`));
 
//  from(['Apple', 'Mango', 'Bannana'])
//  .pipe(last((val) => val==='Pineapple'))
//  .subscribe(value => console.log(`Last Item: ${ value }`));

 from(['Apple', 'Mango', 'Bannana'])
 .pipe(last((val) => val==='Pineapple', 'Default Fruit'))
 .subscribe(value => console.log(`Last Item: ${ value }`));
 
