// Store the locations in a array. Make sure the array is not in alphabetical order.
var placesToVisit = ["Dubai", "Paris", "Turkey", "Istanbul", "New York"];
//  Print your array in its original order.
console.log("Original order", placesToVisit);
// Print the array in alphabetical order without modifying the actual list
var alphabeticalOrder = placesToVisit.sort();
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
var reverseAlphabeticalOrder = placesToVisit.sort().reverse();
console.log("Reverse Alphabetical Order:", reverseAlphabeticalOrder);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("Reversed Order:", placesToVisit);
// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Back to Original Order:", placesToVisit);
// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in Alphabetical Order:", placesToVisit);
// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
