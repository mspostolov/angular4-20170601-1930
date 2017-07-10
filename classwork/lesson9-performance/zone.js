//setTimeout

const oldTimeout = global.setTimeout;
global.setTimeout = function(callback, timer) {
  console.log('START ASYNC!');
  oldTimeout(() => {
	  callback();
	  console.log('END ASYNC!');
  }, timer);
}

setTimeout(() => {
	console.log('CALLBACK RUN!');
}, 2000);


let user1 = { name : 'Bob'};
user2 = (user1.name = 'John');

//READONLY
//immutable.js