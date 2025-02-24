function spiralOrderMatrix(matrix) {
	if (!matrix) {
		console.log("Not a valid matrix");
		return;
	}
	if (matrix.length == 0) {
		console.log("Not a valid matrix");
		return;
	}
	const rows = matrix.length;
	const cols = matrix[0].length;

	if (rows !== cols) {
		console.log("The matrix must be N*N");
		return;
	}

	let result = [];
	let top = 0,
		bottom = rows - 1,
		left = 0,
		right = cols - 1;

	while (top <= bottom && left <= right) {
		for (let i = left; i <= right; i++) {
			result.push(matrix[top][i]);
		}
		top++;

		for (let i = top; i <= bottom; i++) {
			result.push(matrix[i][right]);
		}
		right--;

		if (top <= bottom) {
			for (let i = right; i >= left; i--) {
				result.push(matrix[bottom][i]);
			}
			bottom--;
		}

		if (left <= right) {
			for (let i = bottom; i >= top; i--) {
				result.push(matrix[i][left]);
			}
			left++;
		}
	}

	console.log(result);
}

const matrix1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const matrix2 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

const matrix3 = [1, 2, 3, 4];

spiralOrderMatrix(matrix1);
spiralOrderMatrix(matrix2);
spiralOrderMatrix(matrix3);
spiralOrderMatrix([]);
spiralOrderMatrix(null);
