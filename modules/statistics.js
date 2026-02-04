/**
 * Statistics Calculator Module
 * Provides statistical calculations: mean, median, mode, std dev, variance
 */

class StatisticsCalculator {
    constructor() {
        this.dataSet = [];
    }

    addValue(value) {
        const num = parseFloat(value);
        if (!isNaN(num)) {
            this.dataSet.push(num);
            return true;
        }
        return false;
    }

    clearData() {
        this.dataSet = [];
    }

    getMean() {
        if (this.dataSet.length === 0) return 0;
        const sum = this.dataSet.reduce((a, b) => a + b, 0);
        return sum / this.dataSet.length;
    }

    getMedian() {
        if (this.dataSet.length === 0) return 0;
        const sorted = [...this.dataSet].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    }

    getMode() {
        if (this.dataSet.length === 0) return 0;
        const frequency = {};
        this.dataSet.forEach(num => {
            frequency[num] = (frequency[num] || 0) + 1;
        });
        return Object.keys(frequency).reduce((a, b) => 
            frequency[a] > frequency[b] ? a : b
        );
    }

    getVariance() {
        const mean = this.getMean();
        if (this.dataSet.length === 0) return 0;
        const squareDiffs = this.dataSet.map(value => Math.pow(value - mean, 2));
        return squareDiffs.reduce((a, b) => a + b, 0) / this.dataSet.length;
    }

    getStdDev() {
        return Math.sqrt(this.getVariance());
    }

    getRange() {
        if (this.dataSet.length === 0) return 0;
        return Math.max(...this.dataSet) - Math.min(...this.dataSet);
    }

    getMin() {
        return this.dataSet.length === 0 ? 0 : Math.min(...this.dataSet);
    }

    getMax() {
        return this.dataSet.length === 0 ? 0 : Math.max(...this.dataSet);
    }

    getCount() {
        return this.dataSet.length;
    }

    getSum() {
        return this.dataSet.reduce((a, b) => a + b, 0);
    }
}
