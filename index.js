let LinkedList = require("./linked_list");

let mylist = new LinkedList();

mylist.addLast("art");
mylist.addLast("dog");
mylist.addLast("cat");

mylist.show();

console.log("===========Revert============")

mylist.revertList();
mylist.show();

let str = '123dog456dog789';
let str2 = str.split('dog');
console.log(str2);
