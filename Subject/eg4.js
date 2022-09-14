const { Subject, from, Observable } = rxjs;

const subject = new Subject();

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerC: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`observerD: ${v}`),
});

// const observable = from([1, 2, 3]);

const observable = new Observable((context) => {
  context.next(Math.floor(Math.random() * 99) + 1);
})

observable.subscribe(subject); // You can subscribe providing a Subject
observable.subscribe(subject); // You can subscribe providing a Subject


// observable.subscribe((x) => console.log(x));
// observable.subscribe((x) => console.log(x));
// observable.subscribe((x) => console.log(x));

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3