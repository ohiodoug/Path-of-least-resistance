function solve(matrix) {
	var numRows = matrix.length;
	var numCols = matrix[0].length;
	var results = [];
	var lowestRowNum = 0;

	for (var r = 0; r < numRows; r++) {
		var value = 0;
		var path = [];
		results[r] = recursiveCalculate(matrix, r, 0, value, path);
		if (results[r].value < results[lowestRowNum].value) {
			lowestRowNum = r;
		}
	}

	if (results[lowestRowNum].value >= 50) {
		console.log('No path less than 50');
		console.log('-1');
	} else {
		console.log('lowest path value: ' + results[lowestRowNum].value);
		console.log(results[lowestRowNum].path.join());		
	}	
}

function recursiveCalculate(matrix, row, column, value, path) {
	var numRows = matrix.length;
	var numCols = matrix[0].length;

	if (column < numCols) {
		var result1 = recursiveCalculate(matrix, row == 0 ? numRows - 1 : row - 1, column + 1, value, path);
		var result2 = recursiveCalculate(matrix, row, column + 1, value, path);
		var result3 = recursiveCalculate(matrix, (row + 1) % numRows, column + 1, value, path);

		if (result1.value <= result2.value && result1.value <= result3.value)
			return { value: (result1.value + matrix[row][column]), path: [row + 1].concat(result1.path)};
		else if (result2.value <= result3.value) {
			return { value: (result2.value + matrix[row][column]), path: [row + 1].concat(result2.path)};
		} else {
			return { value: (result3.value + matrix[row][column]), path: [row + 1].concat(result3.path)};
		}
	}
	return { value: value, path: path };
}

var matrix = [[6, 9, 1, 8, 9, 2, 4, 6, 8, 0, 2, 7, 5, 7, 2, 8, 6, 5, 8, 7],
			   [4, 9, 2, 0, 1, 6, 9, 3, 7, 4, 3, 2, 2, 9, 0, 4, 2, 1, 8, 2],
			   [9, 7, 3, 8, 9, 6, 2, 1, 9, 6, 2, 1, 7, 9, 8, 9, 8, 3, 6, 0],
			   [6, 8, 4, 6, 2, 9, 2, 9, 0, 0, 3, 1, 6, 9, 8, 9, 4, 2, 5, 2],
			   [8, 9, 9, 4, 2, 1, 7, 9, 4, 6, 8, 3, 2, 7, 9, 7, 0, 4, 2, 1],
			   [5, 8, 6, 3, 5, 4, 2, 7, 9, 9, 5, 7, 6, 4, 3, 6, 7, 6, 5, 8],
			   [6, 8, 7, 8, 9, 4, 3, 7, 9, 7, 9, 0, 5, 3, 2, 7, 8, 4, 3, 1],
			   [2, 1, 7, 5, 7, 4, 9, 3, 2, 6, 7, 4, 3, 9, 6, 8, 3, 5, 0, 4],
			   [7, 5, 9, 6, 8, 3, 6, 4, 5, 8, 6, 7, 4, 1, 5, 4, 3, 7, 8, 6],
			   [5, 8, 7, 6, 9, 8, 8, 9, 8, 6, 4, 6, 5, 7, 8, 9, 7, 0, 2, 1],
			   [5, 6, 7, 8, 4, 3, 7, 5, 8, 9, 3, 1, 6, 4, 7, 8, 5, 7, 4, 3],
			   [6, 9, 8, 4, 7, 6, 9, 0, 2, 5, 1, 9, 0, 3, 0, 1, 4, 6, 8, 3],
			   [7, 9, 5, 3, 7, 9, 5, 3, 2, 7, 9, 7, 8, 7, 5, 9, 0, 3, 5, 2],
			   [2, 9, 5, 3, 7, 5, 1, 7, 9, 4, 7, 6, 9, 8, 3, 6, 5, 4, 8, 3],
			   [7, 8, 7, 9, 9, 5, 3, 2, 6, 8, 6, 9, 8, 4, 6, 5, 7, 4, 3, 2],
			   [0, 5, 7, 9, 5, 3, 9, 7, 9, 6, 3, 4, 3, 2, 1, 0, 6, 9, 8, 4],
			   [4, 7, 5, 3, 2, 8, 9, 6, 7, 5, 4, 3, 3, 7, 8, 6, 5, 7, 9, 2],
			   [6, 8, 7, 3, 4, 6, 8, 6, 7, 6, 5, 8, 9, 4, 3, 5, 8, 6, 4, 1],
			   [9, 3, 6, 2, 6, 5, 6, 5, 8, 7, 6, 8, 5, 3, 2, 5, 6, 7, 5, 3],
			   [6, 8, 9, 0, 3, 1, 4, 7, 4, 3, 8, 3, 1, 2, 1, 2, 5, 7, 9, 0],
			   [8, 3, 2, 7, 9, 8, 5, 7, 3, 5, 7, 7, 6, 9, 3, 0, 5, 3, 1, 5],
			   [6, 4, 9, 6, 2, 4, 7, 9, 6, 3, 1, 0, 4, 5, 6, 3, 9, 6, 3, 1],
			   [6, 9, 8, 4, 7, 5, 8, 4, 1, 8, 7, 6, 8, 7, 4, 5, 3, 0, 4, 9],
			   [7, 4, 1, 1, 6, 9, 6, 9, 5, 3, 8, 0, 4, 2, 1, 7, 9, 6, 5, 8],
			   [7, 9, 7, 4, 3, 7, 9, 3, 8, 7, 9, 4, 7, 6, 0, 2, 5, 7, 3, 1],
			   [1, 4, 6, 3, 7, 6, 9, 0, 4, 2, 1, 7, 4, 3, 4, 8, 4, 1, 0, 7],
			   [5, 8, 6, 8, 5, 3, 3, 4, 9, 2, 6, 7, 6, 7, 8, 4, 5, 3, 2, 9],
			   [6, 4, 5, 8, 6, 7, 6, 8, 9, 6, 3, 2, 5, 4, 3, 1, 0, 6, 5, 3]];

var t0, t1;

console.log('Recursive approach: O(n^2)');
t0 = Date.now();
solve(matrix);
t1 = Date.now();
console.log('performance: ' + (t1 - t0) + ' milliseconds');
