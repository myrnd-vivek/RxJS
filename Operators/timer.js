/**
 * Creates an observable that will wait for a specified time period, or exact date, before emitting the number 0.
 * Creates an observable that starts an interval after a specified delay, emitting incrementing numbers -- starting at 0 -- on each interval after words.
 * Parameters : startDue, intervalDuration, scheduler
 */

const { interval, takeUntil, timer, of, concatMap } = rxjs;

/*
 Example I
 // Build a Date object that marks the
 // next minute.
 const currentDate = new Date();
 const startOfNextMinute = new Date(
   currentDate.getFullYear(),
   currentDate.getMonth(),
   currentDate.getDate(),
   currentDate.getHours(),
   currentDate.getMinutes() + 1
 );
 
 // // This could be any observable stream
 const source = interval(1000);
 const result = source.pipe(
   takeUntil(timer(startOfNextMinute))
 );
 result.subscribe(console.log);

 */

//Example II

// const source = timer(1000, 500);  //Starts Time, Interval
// source.subscribe(console.log);

//Example III
console.log('hi');

const source$ = of(1,2,3);

timer(3000).pipe(concatMap(() => source$)).subscribe(console.log);



