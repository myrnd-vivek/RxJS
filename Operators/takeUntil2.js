
/**
 * Emits the values emitted by the source Observable until a notifier Observable emits a value
 */

const { interval, fromEvent, takeUntil } = rxjs;

const source = interval(1000);
const clicks = fromEvent(document, 'click');
const result = source.pipe(takeUntil(clicks));
result.subscribe(x => console.log(x));