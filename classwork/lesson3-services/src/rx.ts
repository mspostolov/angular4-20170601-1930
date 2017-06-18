import { Observable } from 'rxjs/Observable';
const myInput = document.getElementById('myInput');

// function createEventPromise() {
// 	let listener: (event: KeyboardEvent) => void;
// 	let p = new Promise(resolve => {
// 		listener = (event) => resolve(event);
// 		myInput.addEventListener('input', listener)
// 	});

// 	return p.then((event: KeyboardEvent) => {
// 		fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`).then(r => r.json()).then(repos => {
//            console.log(repos.total_count);
// 		})
// 		myInput.removeEventListener('input', listener)
// 		createEventPromise();
// 	})
// }

// createEventPromise();

let o = Rx.Observable.fromEvent(myInput, 'input');
o
.debounceTime(500)
.switchMap( (event: KeyboardEvent) => Rx.Observable.fromPromise(fetch(`https://api.github.com/search/repositories?q=${(event.target as HTMLInputElement).value}`)))
.switchMap(r => Rx.Observable.fromPromise(r.json()))
.catch(error => {})
.do((item) => {
	debugger
})
.subscribe(repos => console.log(repos.total_count));

Rx.Observable.create( (observer) => {
  observer.onNext(1);
  observer.onNext(2);
  observer.onNext(3);
  //observer.onCompleted();
});

/**
 Observable method:
- creation (fromEvent, fromPromise, of, from)
- transform (map, switchMap)
- filter (filter, find, every...)
- combine (combineLatest, mergeAll, zip)
- error handling (catch)
- utils (do, delay, toArray)


- Observable
- observer
- Subject (Observable + observer)


sss.onNext(1,2,3)

sss.subscribe(=>)

this.missionAnnouncedSource.asObservable();
 */

let s = new Rx.Subject<string>();
s.onNext(1);
s.onNext(2);
s.onNext(3);

s.subscribe(item => console.log(item));



class UserService{

   private _s$$ = new Rx.Subject<string>();
   private _s$:Observable;

   constructor() {
	   this._s$ = Rx.Observable.create(observer => {

	   })
   }

   getUserList(users) {
      return this._s$$
   }

   setUserList(users){
      this._s$$.onNext(users);
   }
}

class UserComponent {
    constructor(private _userSErvice:UserService) {

	}

	onInit() {
        this._userSErvice.getUserList().subscribe((users) => {
			this.users = users;
		})
	}
}