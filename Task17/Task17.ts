console.log("Sorry guests because I will be able to invite just two peoples because the new bigger table can not arrive at the time when the dinner is!")

// last list in which I have to cut of and update Task from task17
//this is latest list
let GuestList_repeat5 = ["Hashmi","Saad","Uzair", "Asad", "Meeran"];

//  Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

console.log("Sorrry for not inviting you because of lack of space !"+GuestList_repeat5[4])
GuestList_repeat5.pop()
console.log("Sorrry for not inviting you because of lack of space !"+GuestList_repeat5[3])
GuestList_repeat5.pop()
console.log("Sorrry for not inviting you because of lack of space !"+GuestList_repeat5[2])
GuestList_repeat5.pop()

console.log(GuestList_repeat5);

// Print a message to each of the two people still on your list, letting them know they’re still invited.

console.log("And Rest of you two are still invited\n"+GuestList_repeat5[0])
console.log(GuestList_repeat5[1]);

// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
GuestList_repeat5.pop()
GuestList_repeat5.pop()

console.log(GuestList_repeat5);

