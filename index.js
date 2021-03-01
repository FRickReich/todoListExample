const Todo = require("./todo");

todoList = new Todo();

console.log("\n" + "=".repeat(25) + " Add Entries " + "=".repeat(25));

console.log(todoList.addEntry(0, "Dies ist ein todo"));
console.log(todoList.addEntry(1, "Dies ist noch ein todo"));
console.log(todoList.addEntry(2, "Dies ist die 3. todo"));
console.log(todoList.addEntry(3, "Kaufe Käsekuchen"));

console.log("\n" + "=".repeat(25) + " Delete Entry " + "=".repeat(25));
console.log(todoList.deleteEntry(2));


console.log("\n" + "=".repeat(25) + " Change State " + "=".repeat(25));
console.log(todoList.setEntryState(1, true));

console.log("\n" + "=".repeat(25) + " Change Description " + "=".repeat(25));
console.log(todoList.setEntryDescription(0, "Esse Gummibärchen"));

console.log("\n" + "=".repeat(25) + " Get all Entries " + "=".repeat(25));
console.log(todoList.getAllEntries());

console.log("\n" + "=".repeat(25) + " Get finished Entries " + "=".repeat(25));
console.log(todoList.getFinishedEntries());

console.log("\n" + "=".repeat(25) + " Get unfinished Entries " + "=".repeat(25));
console.log(todoList.getUnfinishedEntries());