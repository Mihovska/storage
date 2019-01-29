const storage = require('./storage');


storage.put('first', 'FirstValue');
storage.put('second', 'SecondValue');
console.log(storage.get('first'));
// console.log(storage.getAll());
storage.update('first', 'updatedFirst');
console.log(storage.get('first'));
// console.log(storage.deleteKey('first'));
// console.log(storage.get('first'));
console.log(storage.get('second'));
console.log(storage.getAll());
// console.log(storage.clear());
// console.log(storage.getAll());
storage.save();
console.log(storage.load());