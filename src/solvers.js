/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n, startingIndex = 0) {
  var solution = new Board({'n': n}); //fixme
  let board = solution.rows();

  for (var row = 0; row < board.length; row++) {
    for (var col = startingIndex; col < board.length; col++) {
      solution.togglePiece(row, col);
      if (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(row, col);
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  let board = new Board({'n': n});
  let startingColIndex = 0;

  let countSolution = function(startingIndex) {
    //if starting index = n
    if (startingIndex === n) {
      //return solutioncount
      return solutionCount;
    }
    //make new board
    let tempBoard = new Board({'n': n});
    //call fin nrookc solution& stating
    if (this.findNRooksSolution(n, startingIndex)) {
      solutionCount++;
      startingColIndex++;
    }
    //solotion++
    countSolution(startingColIndex);
  };
  countSolution(startingColIndex);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = new Board({'n': n}); //fixme
  let board = solution.rows();

  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board.length; col++) {
      solution.togglePiece(row, col);
      if (solution.hasAnyQueensConflicts()) {
        solution.togglePiece(row, col);
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
