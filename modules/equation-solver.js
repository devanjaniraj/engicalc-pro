/**
 * Equation Solver Module
 * Solves linear and quadratic equations
 */

class EquationSolver {
    /**
     * Solve quadratic equation: ax² + bx + c = 0
     */
    solveQuadratic(a, b, c) {
        if (a === 0) {
            return this.solveLinear(b, c);
        }

        const discriminant = b * b - 4 * a * c;
        const results = {
            discriminant: discriminant,
            solutions: []
        };

        if (discriminant > 0) {
            const sqrt_d = Math.sqrt(discriminant);
            results.solutions = [
                (-b + sqrt_d) / (2 * a),
                (-b - sqrt_d) / (2 * a)
            ];
            results.type = 'two_real';
        } else if (discriminant === 0) {
            results.solutions = [-b / (2 * a)];
            results.type = 'one_real';
        } else {
            const sqrt_d = Math.sqrt(-discriminant);
            const real = -b / (2 * a);
            const imag = sqrt_d / (2 * a);
            results.solutions = [`${real.toFixed(4)} + ${imag.toFixed(4)}i`, `${real.toFixed(4)} - ${imag.toFixed(4)}i`];
            results.type = 'complex';
        }

        return results;
    }

    /**
     * Solve linear equation: ax + b = 0
     */
    solveLinear(a, b) {
        if (a === 0) {
            return { solutions: [], error: 'No solution or infinite solutions' };
        }
        return { solutions: [-b / a], type: 'linear' };
    }

    /**
     * Solve system of linear equations (2x2): 
     * a1*x + b1*y = c1
     * a2*x + b2*y = c2
     */
    solve2x2System(a1, b1, c1, a2, b2, c2) {
        const det = a1 * b2 - a2 * b1;
        
        if (det === 0) {
            return { error: 'System has no unique solution' };
        }

        const x = (c1 * b2 - c2 * b1) / det;
        const y = (a1 * c2 - a2 * c1) / det;

        return {
            x: x,
            y: y,
            type: 'system_2x2'
        };
    }

    /**
     * Parse equation string and solve
     */
    parseAndSolve(equationString) {
        // Simple parser for quadratic equations
        // Format: ax^2 + bx + c = 0 or similar variations
        const regex = /([+-]?\d*.?\.?\d*)\*?x\^2|([+-]?\d*.?\.?\d*)\*?x|([+-]?\d+\.?\d*)/g;
        let a = 0, b = 0, c = 0;
        let match;

        while ((match = regex.exec(equationString)) !== null) {
            if (match[1] !== undefined) {
                a = parseFloat(match[1] || 1);
            } else if (match[2] !== undefined) {
                b = parseFloat(match[2] || 1);
            } else if (match[3] !== undefined) {
                c = parseFloat(match[3]);
            }
        }

        return this.solveQuadratic(a, b, c);
    }
}
