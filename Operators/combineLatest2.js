const { of, combineLatest, delay } = rxjs;

const source1$ = of(1,2,3)
const source2$ = of(1,2,3)


combineLatest([source1$, source2$]).subscribe(console.log);
