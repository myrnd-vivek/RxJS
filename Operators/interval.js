
/**
 * Creates an Observable that emits sequential numbers every specified interval of time
 */

const {take, interval} = rxjs;

const numbers = interval(1000);

const takeFourNumbers = numbers.pipe(take(4));

takeFourNumbers.subscribe(x => console.log('Next: ', x));
