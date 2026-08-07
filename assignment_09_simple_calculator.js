// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');

// This array will store all student objects
let students = [];

// ======================================================
// Helper: Calculate average of an array of scores
// ======================================================
function calculateAverage(scores) {
  if (scores.length === 0) return 0;

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
  }
  return sum / scores.length;
}

// ======================================================
// 1. ADD A STUDENT
// ======================================================
function addStudent() {
  let name = readlineSync.question('Student name: ');
  let id = readlineSync.questionInt('Student ID: ');

  // Check if this ID already exists
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      console.log('Error: A student with this ID already exists.');
      return;
    }
  }

  let numScores = readlineSync.questionInt('How many scores? ');

  if (numScores <= 0) {
    console.log('Error: Number of scores must be positive.');
    return;
  }

  let scores = [];
  for (let i = 0; i < numScores; i++) {
    let score = readlineSync.questionFloat(`Enter score ${i + 1}: `);
    scores.push(score);
  }

  // Create the student object
  let student = {
    name: name,
    id: id,
    scores: scores
  };

  students.push(student);
  console.log(`Student "${name}" added successfully.`);
}

// ======================================================
// 2. DISPLAY ALL STUDENTS
// ======================================================
function displayAllStudents() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  console.log('\n===== ALL STUDENTS =====');
  for (let i = 0; i < students.length; i++) {
    let s = students[i];
    let avg = calculateAverage(s.scores).toFixed(2);

    console.log(`\nName   : ${s.name}`);
    console.log(`ID     : ${s.id}`);
    console.log(`Scores : ${s.scores.join(', ')}`);
    console.log(`Average: ${avg}`);
  }
  console.log('========================');
}

// ======================================================
// 3. CALCULATE AVERAGE FOR A SPECIFIC STUDENT
// ======================================================
function calculateStudentAverage() {
  if (students.length === 0) {
    console.log('No students have been added yet.');
    return;
  }

  let id = readlineSync.questionInt('Enter student ID: ');

  // Search for the student
  let found = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      found = students[i];
      break;
    }
  }

  if (found === null) {
    console.log('Error: Student ID not found.');
  } else {
    let avg = calculateAverage(found.scores).toFixed(2);
    console.log(`${found.name}'s average score: ${avg}`);
  }
}

// ======================================================
// SHOW THE MENU
// ======================================================
function showMenu() {
  console.log('\n============================');
  console.log('  STUDENT RECORD SYSTEM MENU');
  console.log('============================');
  console.log('1. Add student');
  console.log('2. Display all students');
  console.log('3. Calculate average score');
  console.log('4. Quit');
}

// ======================================================
// MAIN PROGRAM
// ======================================================

console.log('Welcome to the Student Record System!');

let running = true;

while (running) {
  showMenu();
  let choice = readlineSync.questionInt('Enter your choice (1-4): ');

  if (choice === 1) {
    addStudent();
  } else if (choice === 2) {
    displayAllStudents();
  } else if (choice === 3) {
    calculateStudentAverage();
  } else if (choice === 4) {
    console.log('Goodbye!');
    running = false;
  } else {
    console.log('Invalid choice. Please enter a number between 1 and 4.');
  }
}


