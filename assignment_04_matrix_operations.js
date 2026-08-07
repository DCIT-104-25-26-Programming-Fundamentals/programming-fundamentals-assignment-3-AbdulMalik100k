// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readlineSync = require('readline-sync');


function displayMatrix(matrix, title) {
  console.log('\n' + title);
  for (let i = 0; i < matrix.length; i++) {
    let row = '';
    for (let j = 0; j < matrix[i].length; j++) {
      // pad numbers so columns line up nicely
      row += String(matrix[i][j]).padStart(4, ' ');
    }
    console.log(row);
  }
}


function readMatrix(rows, cols, name) {
  console.log(`\nEnter ${name} (${rows} x ${cols}):`);
  let matrix = [];

  for (let i = 0; i < rows; i++) {
    let line = readlineSync.question(`Enter row ${i + 1}: `);
    // Convert "1 2 3" → [1, 2, 3]
    let row = line.trim().split(/\s+/).map(Number);

    // Basic check that the user entered the correct number of values
    if (row.length !== cols) {
      console.log(`Error: You must enter exactly ${cols} numbers.`);
      i--; // ask this row again
      continue;
    }
    matrix.push(row);
  }
  return matrix;
}


function transpose(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];

  // Create the transposed matrix (cols become rows)
  for (let j = 0; j < cols; j++) {
    result[j] = [];
    for (let i = 0; i < rows; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}


function addMatrices(A, B) {
  let rows = A.length;
  let cols = A[0].length;
  let result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = A[i][j] + B[i][j];
    }
  }
  return result;
}


function multiplyMatrices(A, B) {
  let rowsA = A.length;
  let colsA = A[0].length;   // must equal rowsB
  let colsB = B[0].length;
  let result = [];

  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += A[i][k] * B[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}



console.log('===== MATRIX OPERATIONS =====\n');

// ---------- PART A ----------
console.log('----- PART A: Transpose -----');
let rowsA = readlineSync.questionInt('Enter number of rows: ');
let colsA = readlineSync.questionInt('Enter number of columns: ');

let matrixA = readMatrix(rowsA, colsA, 'Matrix A');
displayMatrix(matrixA, 'Original Matrix:');

let transposed = transpose(matrixA);
displayMatrix(transposed, 'Transposed Matrix:');

// ---------- PART B ----------
console.log('\n----- PART B: Add Two Matrices -----');
let rowsB = readlineSync.questionInt('Enter number of rows: ');
let colsB = readlineSync.questionInt('Enter number of columns: ');

let matrixB1 = readMatrix(rowsB, colsB, 'First Matrix');
let matrixB2 = readMatrix(rowsB, colsB, 'Second Matrix');

displayMatrix(matrixB1, 'First Matrix:');
displayMatrix(matrixB2, 'Second Matrix:');

let sum = addMatrices(matrixB1, matrixB2);
displayMatrix(sum, 'Sum of Matrices:');

// ---------- PART C ----------
console.log('\n----- PART C: Multiply Two Matrices -----');
let rowsC1 = readlineSync.questionInt('Enter rows of Matrix A: ');
let colsC1 = readlineSync.questionInt('Enter columns of Matrix A: ');

let rowsC2 = readlineSync.questionInt('Enter rows of Matrix B: ');
let colsC2 = readlineSync.questionInt('Enter columns of Matrix B: ');

// Check if multiplication is possible
if (colsC1 !== rowsC2) {
  console.log('\nError: Cannot multiply. Columns of A must equal rows of B.');
} else {
  let matrixC1 = readMatrix(rowsC1, colsC1, 'Matrix A');
  let matrixC2 = readMatrix(rowsC2, colsC2, 'Matrix B');

  displayMatrix(matrixC1, 'Matrix A:');
  displayMatrix(matrixC2, 'Matrix B:');

  let product = multiplyMatrices(matrixC1, matrixC2);
  displayMatrix(product, 'Product (A × B):');
}

console.log('\n===== Program finished =====');

const readlineSync = require('readline-sync');

