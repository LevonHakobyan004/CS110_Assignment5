// 1
function matrixProduct(mat1, mat2) {
  const res = [];
  let i,
    j,
    k,
    N = mat1.length;
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      res[i][j] = 0;
      for (k = 0; k < N; k++) res[i][j] += mat1[i][k] * mat2[k][j];
    }
  }

  return res;
}

// 2
function sumOfMatrices(mat1, mat2) {
  const res = [];
  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[0].length; i++) {
      res[i][j] = mat1[i][j] + mat2[i][j];
    }
  }

  return res;
}

// 3
function sumOfArr(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function sumOfRows(mat) {
  let sum = [];
  for (let i = 0; i < mat.length; i++) {
    sum[i] = sumOfArr(mat[i]);
  }

  return sum;
}

// 5
export function trim(s) {
  return s.replace(/^\s+|\s+$/g, "");
}

// 4
export function countWords(s) {
  return trim(s).split(/\s+/).length;
}
