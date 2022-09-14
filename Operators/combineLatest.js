/**
 * Combines multiple Observables to create an Observable whose values are calculated from the latest values of each of its input Observables.
 * It will wait for all input Observables to emit at least once, before it starts emitting results

 */

const { timer, combineLatest } = rxjs;

const firstTimer = timer(0, 500); // emit 0, 1, 2... after every second, starting from now

const secondTimer = timer(1000, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now

combineLatest([firstTimer, secondTimer])
  .subscribe(value => console.log(value));