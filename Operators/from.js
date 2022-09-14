//Converting array to an observable

const { from } = rxjs;

const ary = [10, 20, 30, 40];
const ary1 = [
	{
		name: "vivek",
		id: 1,
	},
  {
		name: "ankush",
		id: 2,
	},
  {
		name: "nikhil",
		id: 3,
	},
];

from(ary1).subscribe(console.log);


