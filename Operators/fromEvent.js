// Converting dom event to an observable
// Creates an Observable that emits events of a specific type coming from the given event target.

const {fromEvent} = rxjs;

const btn = document.getElementById("btn");


// fromEvent(btn, 'click').subscribe(console.log);

const clickHandler = (x) => console.log(x);
fromEvent(btn, 'click', clickHandler).subscribe();
