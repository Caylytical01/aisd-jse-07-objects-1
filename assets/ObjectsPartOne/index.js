// Step 1: Creating a person object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    location: "New York",
    occupation: "Software Developer",
    employed: true,
    friends: ["Alice", "Bob", "Charlie"]
};
console.log(person); // Expected output: person object with properties
// Step 2: Accessing object values
console.log("First Name:", person.firstName); // Expected output: "First Name: John"
console.log("Occupation:", person.occupation); // Expected output: "Occupation: Software Developer"
// Step 3: Looping through the friends array
console.log("Friends:");
person.friends.forEach((friend) => {
    console.log(friend); // Expected output: each friend's name
});