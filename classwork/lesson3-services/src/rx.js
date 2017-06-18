"use strict";
var myInput = document.getElementById('myInput');
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
var o = Rx.Observable.fromEvent(myInput, 'input');
o
    .debounceTime(500)
    .switchMap(function (event) { return Rx.Observable.fromPromise(fetch("https://api.github.com/search/repositories?q=" + event.target.value)); })
    .switchMap(function (r) { return Rx.Observable.fromPromise(r.json()); })
    .catch(function (error) { })
    .do(function (item) {
    debugger;
})
    .subscribe(function (repos) { return console.log(repos.total_count); });
Rx.Observable.create(function (observer) {
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
var s = new Rx.Subject();
s.onNext(1);
s.onNext(2);
s.onNext(3);
s.subscribe(function (item) { return console.log(item); });
var UserService = (function () {
    function UserService() {
        this._s$$ = new Rx.Subject();
        this._s$ = Rx.Observable.create(function (observer) {
        });
    }
    UserService.prototype.getUserList = function (users) {
        return this._s$$;
    };
    UserService.prototype.setUserList = function (users) {
        this._s$$.onNext(users);
    };
    return UserService;
}());
var UserComponent = (function () {
    function UserComponent(_userSErvice) {
        this._userSErvice = _userSErvice;
    }
    UserComponent.prototype.onInit = function () {
        var _this = this;
        this._userSErvice.getUserList().subscribe(function (users) {
            _this.users = users;
        });
    };
    return UserComponent;
}());
