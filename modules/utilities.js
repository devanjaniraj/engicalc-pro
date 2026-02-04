/**
 * Enhanced Calculator Utilities
 * Includes undo/redo, calculation history tracking, and advanced features
 */

class CalculatorHistory {
    constructor(maxSize = 100) {
        this.maxSize = maxSize;
        this.operations = [];
        this.currentIndex = -1;
        this.loadFromStorage();
    }

    addOperation(operation) {
        this.operations = this.operations.slice(0, this.currentIndex + 1);
        this.operations.push(operation);
        if (this.operations.length > this.maxSize) {
            this.operations.shift();
        }
        this.currentIndex = this.operations.length - 1;
        this.saveToStorage();
    }

    undo() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.operations[this.currentIndex];
        }
        return null;
    }

    redo() {
        if (this.currentIndex < this.operations.length - 1) {
            this.currentIndex++;
            return this.operations[this.currentIndex];
        }
        return null;
    }

    getHistory() {
        return this.operations.slice(0, this.currentIndex + 1);
    }

    clear() {
        this.operations = [];
        this.currentIndex = -1;
        localStorage.removeItem('calcHistory');
    }

    saveToStorage() {
        const data = {
            operations: this.operations,
            currentIndex: this.currentIndex
        };
        localStorage.setItem('calcHistory', JSON.stringify(data));
    }

    loadFromStorage() {
        const saved = localStorage.getItem('calcHistory');
        if (saved) {
            const data = JSON.parse(saved);
            this.operations = data.operations;
            this.currentIndex = data.currentIndex;
        }
    }

    export() {
        const timestamp = new Date().toLocaleString();
        const csv = ['Timestamp,Expression,Result'].join('\n') + '\n' +
            this.operations.map(op => 
                `${timestamp},"${op.expression}","${op.result}"`
            ).join('\n');
        return csv;
    }
}

class BatchCalculator {
    constructor() {
        this.batch = [];
        this.results = [];
    }

    addExpression(expression) {
        this.batch.push(expression);
    }

    clearBatch() {
        this.batch = [];
        this.results = [];
    }

    processBatch(calculator) {
        this.results = [];
        this.batch.forEach(expr => {
            try {
                calculator.currentValue = expr;
                const result = calculator.calculate();
                this.results.push({ expression: expr, result: result, error: null });
            } catch (error) {
                this.results.push({ expression: expr, result: null, error: error.message });
            }
        });
        return this.results;
    }

    exportResults() {
        const csv = ['Expression,Result,Status'].join('\n') + '\n' +
            this.results.map(r => 
                `"${r.expression}","${r.result || 'Error'}","${r.error ? 'Error: ' + r.error : 'OK'}"`
            ).join('\n');
        return csv;
    }
}

class CalculatorSettings {
    constructor() {
        this.settings = {
            theme: 'light',
            precision: 10,
            angleMode: 'deg',
            notation: 'standard', // standard, scientific, engineering
            language: 'en',
            soundEnabled: true,
            historySize: 100
        };
        this.loadSettings();
    }

    getSetting(key) {
        return this.settings[key];
    }

    setSetting(key, value) {
        this.settings[key] = value;
        this.saveSettings();
    }

    saveSettings() {
        localStorage.setItem('calcSettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('calcSettings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }

    reset() {
        localStorage.removeItem('calcSettings');
        this.loadSettings();
    }
}

class ThemeManager {
    constructor() {
        this.themes = {
            light: {
                name: 'Light',
                bg: '#ffffff',
                text: '#000000',
                primary: '#667eea',
                secondary: '#764ba2'
            },
            dark: {
                name: 'Dark',
                bg: '#1a1a1a',
                text: '#ffffff',
                primary: '#667eea',
                secondary: '#764ba2'
            },
            ocean: {
                name: 'Ocean',
                bg: '#0a3d62',
                text: '#ffffff',
                primary: '#00d2fc',
                secondary: '#3fa7d6'
            },
            forest: {
                name: 'Forest',
                bg: '#1b3d2f',
                text: '#ffffff',
                primary: '#2ecc71',
                secondary: '#27ae60'
            },
            sunset: {
                name: 'Sunset',
                bg: '#2c1810',
                text: '#ffffff',
                primary: '#ff6b6b',
                secondary: '#ff9999'
            },
            cyberpunk: {
                name: 'Cyberpunk',
                bg: '#0f0f23',
                text: '#00ff00',
                primary: '#ff006e',
                secondary: '#8338ec'
            }
        };
        this.currentTheme = 'light';
        this.loadTheme();
    }

    getTheme(name) {
        return this.themes[name] || this.themes.light;
    }

    setTheme(name) {
        if (this.themes[name]) {
            this.currentTheme = name;
            this.applyTheme(name);
            localStorage.setItem('calcTheme', name);
        }
    }

    applyTheme(name) {
        const theme = this.getTheme(name);
        const root = document.documentElement;
        root.style.setProperty('--theme-bg', theme.bg);
        root.style.setProperty('--theme-text', theme.text);
        root.style.setProperty('--theme-primary', theme.primary);
        root.style.setProperty('--theme-secondary', theme.secondary);
    }

    loadTheme() {
        const saved = localStorage.getItem('calcTheme');
        if (saved && this.themes[saved]) {
            this.setTheme(saved);
        }
    }

    getAvailableThemes() {
        return Object.keys(this.themes).map(key => ({
            id: key,
            name: this.themes[key].name
        }));
    }
}
