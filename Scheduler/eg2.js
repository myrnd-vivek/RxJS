const {of, subscribeOn, asyncScheduler,queueScheduler} = rxjs;

console.log('script start');

const source$ = of(1,2,3,4);

source$
  .subscribe(console.log);

source$
  .pipe(subscribeOn(asyncScheduler))
  .subscribe(console.log);

console.log('script end');