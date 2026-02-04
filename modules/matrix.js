/**
 * Matrix Calculator Module
 * Provides matrix operations: addition, multiplication, transpose, determinant
 */

class MatrixCalculator {
    constructor() {
        this.matrixA = [];
        this.matrixB = [];
    }

    setMatrixA(matrix) {
        this.matrixA = JSON.parse(JSON.stringify(matrix));
    }

    setMatrixB(matrix) {
        this.matrixB = JSON.parse(JSON.stringify(matrix));
    }

    add(a, b) {
        if (a.length !== b.length || a[0].length !== b[0].length) {
            throw new Error('Matrices must have same dimensions');
        }
        return a.map((row, i) => row.map((val, j) => val + b[i][j]));
    }

    subtract(a, b) {
        if (a.length !== b.length || a[0].length !== b[0].length) {
            throw new Error('Matrices must have same dimensions');
        }
        return a.map((row, i) => row.map((val, j) => val - b[i][j]));
    }

    multiply(a, b) {
        if (a[0].length !== b.length) {
            throw new Error('Incompatible matrix dimensions for multiplication');
        }
        const result = [];
        for (let i = 0; i < a.length; i++) {
            result[i] = [];
            for (let j = 0; j < b[0].length; j++) {
                let sum = 0;
                for (let k = 0; k < b.length; k++) {
                    sum += a[i][k] * b[k][j];
                }
                result[i][j] = sum;
            }
        }
        return result;
    }

    transpose(matrix) {
        return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
    }

    determinant(matrix) {
        const n = matrix.length;
        if (n !== matrix[0].length) {
            throw new Error('Matrix must be square');
        }
        if (n === 1) return matrix[0][0];
        if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        
        let det = 0;
        for (let j = 0; j < n; j++) {
            det += Math.pow(-1, j) * matrix[0][j] * this.determinant(this.minor(matrix, 0, j));
        }
        return det;
    }

    minor(matrix, row, col) {
        return matrix
            .filter((_, i) => i !== row)
            .map(r => r.filter((_, j) => j !== col));
    }

    scalarMultiply(matrix, scalar) {
        return matrix.map(row => row.map(val => val * scalar));
    }

    inverse(matrix) {
        const det = this.determinant(matrix);
        if (det === 0) throw new Error('Matrix is singular and cannot be inverted');
        
        const n = matrix.length;
        if (n === 2) {
            const inv = [
                [matrix[1][1], -matrix[0][1]],
                [-matrix[1][0], matrix[0][0]]
            ];
            return this.scalarMultiply(inv, 1 / det);
        }
        
        // For larger matrices, use adjugate matrix method
        throw new Error('Inverse calculation not implemented for matrices > 2x2');
    }
}
