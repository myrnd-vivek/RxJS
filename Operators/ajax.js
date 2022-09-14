//It creates an observable for an Ajax request with either a request object with url, headers, etc or a string for a URL.

const { ajax } = rxjs.ajax;

const url = "https://60067de93698a80017de17db.mockapi.io/user";

// ajax(url)
//   .subscribe(console.log);

ajax.getJSON(url).subscribe(console.log);


// ajax({
//   url: 'https://express-task-api.herokuapp.com/api/v1/tasks',
//   method: 'POST',
//   body: {
//     name: 'Do Coding'
//   }
// }).subscribe(console.log);