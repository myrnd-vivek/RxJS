console.log('Scheduler');


const {of, from, asyncScheduler, queueScheduler, asapScheduler} = rxjs;

console.log("before subscribe")

of(1,2,3,4,(queueScheduler))
  .subscribe(console.log);

from([5,6,7,8], asapScheduler)
  .subscribe(console.log);

 console.log("after subscribe")
