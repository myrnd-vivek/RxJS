const { Subject, Observable, from } = rxjs;

const subject = new Subject();


const observable = from([Math.floor(Math.random() * 99) + 1]);

observable.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
observable.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});

// subject.subscribe({
//   next: (v) => console.log(`observerA: ${v}`),
// });
// subject.subscribe({
//   next: (v) => console.log(`observerB: ${v}`),
// });

// observable.subscribe(subject); 
