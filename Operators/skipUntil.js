
/**
 * Returns an Observable that skips items emitted by the source Observable until a notifier Observable emits an item.
*/

const { interval, fromEvent, skipUntil } = rxjs;

const clicks = fromEvent(document, 'click');

interval(100)
  .pipe(skipUntil(clicks))
  .subscribe(x => console.log(x));