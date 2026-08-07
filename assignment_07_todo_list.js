// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// Build a simple to-do list program that runs entirely in the console and
// allows the user to manage their tasks interactively using a menu.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_07_todo_list.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Task
//      - Prompt the user to type a task description.
//      - Add it to the array and confirm it was added.
//
//   2. View All Tasks
//      - Display all tasks currently in the array, numbered from 1.
//      - If the array is empty, print a friendly message saying so.
//
//   3. Delete a Task
//      - Show the list of tasks with their numbers.
//      - Ask the user which task number they want to remove.
//      - Remove the task and confirm the deletion.
//      - If the task number is invalid, print an error message.
//
//   4. Quit
//      - End the program with a farewell message.
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        TO-DO LIST MENU
//   ============================
//   1. Add task
//   2. View tasks
//   3. Delete task
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Enter task: Buy groceries
//   Task added: "Buy groceries"
//
//   Enter your choice (1-4): 2
//   Your Tasks:
//   1. Buy groceries
//   2. Study for exams
//
//   Enter your choice (1-4): 3
//   Enter task number to delete: 1
//   Task "Buy groceries" has been removed.
//
//   Enter your choice (1-4): 4
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store tasks in a JavaScript array (e.g. let tasks = []).
// - Use a loop to keep the menu running until the user chooses to quit.
// - Each feature MUST be implemented in its own function (see scaffold below).
// - Handle invalid menu choices gracefully (print an error, do not crash).
// - To remove an item from an array by index, use: tasks.splice(index, 1)
//
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// ======================================================
// PART A – Single Multiplication Table
// ======================================================
function printSingleTable(number) {
  // Check if the number is valid
  if (number <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  console.log(`\nMultiplication Table for ${number}:`);

  // Loop from 1 to 12
  for (let i = 1; i <= 12; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}

// ======================================================
// PART B – Tables from 1 to N
// ======================================================
function printTablesUpTo(n) {
  // Check if N is valid
  if (n <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  // Outer loop: for every number from 1 to N
  for (let num = 1; num <= n; num++) {
    console.log(`\nMultiplication Table for ${num}:`);

    // Inner loop: multiply by 1 to 12
    for (let i = 1; i <= 12; i++) {
      let result = num * i;
      console.log(`${num} x ${i} = ${result}`);
    }

    // Separator line between tables
    console.log('-------------------');
  }
}

// ======================================================
// MAIN PROGRAM
// ======================================================

console.log('===== MULTIPLICATION TABLE GENERATOR =====\n');

// ---------- PART A ----------
console.log('----- PART A: Single Table -----');
let number = readlineSync.questionInt('Enter a number: ');
printSingleTable(number);

// ---------- PART B ----------
console.log('\n----- PART B: Tables from 1 to N -----');
let n = readlineSync.questionInt('Enter a number N: ');
printTablesUpTo(n);

console.log('\n===== Program finished =====');


