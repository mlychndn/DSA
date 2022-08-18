import { LinkeList } from "./linkedList.js";
/* 
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.s
 Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Input: l1 = [0], l2 = [0]
Output: [0]

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
*/
//console.log("Malay");

const list1 = new LinkeList();
const list2 = new LinkeList();
list1.push(2);
list1.push(4);
list1.push(3);

list2.push(5);
list2.push(6);
list2.push(4);

console.log(list1);

console.log("list2", list2);

console.log(list1.traverseFormNumber());
console.log(list2.traverseFormNumber());

const list3 = new LinkeList();
const newList = list3.createNewList(
  list1.traverseFormNumber(),
  list2.traverseFormNumber()
);

console.log("new", newList);

const l1 = new LinkeList();
const l2 = new LinkeList();
l1.push(9);
l1.push(9);
l1.push(9);
l1.push(9);
l1.push(9);
l1.push(9);

l2.push(9);
l2.push(9);
l2.push(9);
l2.push(9);

console.log(l1.traverseFormNumber());
console.log(l2.traverseFormNumber());

const l3 = new LinkeList().createNewList(
  l1.traverseFormNumber(),
  l2.traverseFormNumber()
);

console.log("l3", l3);

const nl1 = new LinkeList();
const nl2 = new LinkeList();

nl1.push(0);
nl2.push(0);

console.log(nl1.traverseFormNumber(), nl2.traverseFormNumber());

const nl3 = new LinkeList().createNewList(
  nl1.traverseFormNumber(),
  nl2.traverseFormNumber()
);

console.log(nl3);
