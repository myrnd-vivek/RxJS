const { Observable } = rxjs;

const observable = new Observable(
  (context) => {
    context.error(1);
  } 
);

// observable.next(1);
// observable.next(true);
// observable.next('hello');
// observable.next([1,2,3]);


// setTimeout(() => {
//   observable.error('error')
//   observable.complete()
// },1000);
const err = (err) => console.log('error occured' + err);

const success = (sus) => console.log("success ", + sus);

observable.subscribe(err, success);



console.log('hii');
