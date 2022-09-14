const { of, map,observeOn, subscribeOn, asyncScheduler, queueScheduler } = rxjs;

console.log("script start");

const source$ = of(1, 2, 3, 4);

// source$
// 	.pipe(
//     subscribeOn(asyncScheduler),
// 		map((val) => {
//       console.log('map '+val);
//       return val;
//     }),
// 	)
// 	.subscribe(console.log);

if(10  )

source$
	.pipe(
    map((val) => {
      console.log('map '+val);
      return val;
    }),
    observeOn(asyncScheduler),
	)
	.subscribe(console.log);

console.log("script end");
