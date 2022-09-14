const {take, interval, from} = rxjs;

const intervalCount = interval(500);
const takeFive = intervalCount.pipe(take(10));


// const observable = from([1,2,3,4]);
// const takeFive = observable.pipe(take(10));

takeFive.subscribe(x => console.log(x));

