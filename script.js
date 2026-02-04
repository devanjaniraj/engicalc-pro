// Calculator State
class Calculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.memory = 0;
        this.history = [];
        this.angleMode = 'deg'; // deg or rad
        this.isDarkMode = false;
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.updateDisplay();
        this.loadHistory();
        this.initializeUnitConversions();
        this.loadPreferences();
    }

    setupEventListeners() {
        // Number buttons
        document.querySelectorAll('.num-btn').forEach(btn => {
            btn.addEventListener('click', () => this.appendNumber(btn.dataset.value));
        });

        // Operation buttons
        document.querySelectorAll('.operator-btn').forEach(btn => {
            btn.addEventListener('click', () => this.selectOperation(btn.dataset.action));
        });

        // Function buttons
        document.querySelectorAll('.btn[data-action]').forEach(btn => {
            if (!btn.classList.contains('operator-btn') && !btn.classList.contains('num-btn')) {
                btn.addEventListener('click', () => this.handleFunction(btn.dataset.action));
            }
        });

        // Scientific buttons
        document.querySelectorAll('.sci-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleScientific(btn.dataset.action));
        });

        // Mode toggle buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchMode(e.target.id));
        });

        // Memory buttons
        document.querySelectorAll('.mem-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleMemory(btn.dataset.action));
        });

        // Constants buttons
        document.querySelectorAll('.const-btn').forEach(btn => {
            btn.addEventListener('click', () => this.insertConstant(btn.dataset.constant));
        });

        // History toggle
        document.getElementById('historyToggle').addEventListener('click', () => {
            document.getElementById('historyPanel').classList.toggle('hidden');
        });

        // Clear history
        document.getElementById('clearHistory').addEventListener('click', () => {
            this.clearHistory();
        });

        // Conversion
        document.getElementById('convertBtn').addEventListener('click', () => {
            this.performConversion();
        });

        document.getElementById('unitCategory').addEventListener('change', () => {
            this.updateUnitOptions();
        });

        document.getElementById('fromValue').addEventListener('input', () => {
            this.performConversion();
        });

        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Angle mode toggle
        document.getElementById('angleToggle').addEventListener('click', () => {
            this.toggleAngleMode();
        });

        // Copy button
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyToClipboard();
        });

        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
    }

    appendNumber(num) {
        if (this.shouldResetDisplay) {
            this.currentValue = '';
            this.shouldResetDisplay = false;
        }
        
        if (num === '.' && this.currentValue.includes('.')) return;
        
        if (this.currentValue === '0' && num !== '.') {
            this.currentValue = num;
        } else {
            this.currentValue += num;
        }
        
        this.updateDisplay();
    }

    selectOperation(op) {
        if (this.operation !== null && !this.shouldResetDisplay) {
            this.calculate();
        }
        
        this.operation = op;
        this.previousValue = this.currentValue;
        this.shouldResetDisplay = true;
        this.updateHistoryDisplay();
    }

    calculate() {
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        let result;
        
        switch(this.operation) {
            case 'add':
                result = prev + current;
                break;
            case 'subtract':
                result = prev - current;
                break;
            case 'multiply':
                result = prev * current;
                break;
            case 'divide':
                result = current !== 0 ? prev / current : 'Error';
                break;
            case 'power':
                result = Math.pow(prev, current);
                break;
            default:
                return;
        }
        
        const expression = `${this.previousValue} ${this.getOperatorSymbol()} ${this.currentValue}`;
        this.addToHistory(expression, result);
        
        this.currentValue = result.toString();
        this.operation = null;
        this.previousValue = '';
        this.shouldResetDisplay = true;
        this.updateDisplay();
    }

    handleFunction(action) {
        switch(action) {
            case 'clear':
                this.clear();
                break;
            case 'backspace':
                this.backspace();
                break;
            case 'percent':
                this.percent();
                break;
            case 'negate':
                this.negate();
                break;
            case 'equals':
                if (this.operation) {
                    this.calculate();
                }
                break;
        }
    }

    handleScientific(action) {
        const current = parseFloat(this.currentValue);
        let result;
        
        switch(action) {
            case 'sin':
                result = this.angleMode === 'deg' ? 
                    Math.sin(current * Math.PI / 180) : Math.sin(current);
                break;
            case 'cos':
                result = this.angleMode === 'deg' ? 
                    Math.cos(current * Math.PI / 180) : Math.cos(current);
                break;
            case 'tan':
                result = this.angleMode === 'deg' ? 
                    Math.tan(current * Math.PI / 180) : Math.tan(current);
                break;
            case 'log':
                result = Math.log10(current);
                break;
            case 'ln':
                result = Math.log(current);
                break;
            case 'exp':
                result = Math.exp(current);
                break;
            case 'sqrt':
                result = Math.sqrt(current);
                break;
            case 'square':
                result = current * current;
                break;
            case 'factorial':
                result = this.factorial(Math.floor(current));
                break;
            case 'reciprocal':
                result = current !== 0 ? 1 / current : 'Error';
                break;
            case 'pi':
                this.currentValue = Math.PI.toString();
                this.updateDisplay();
                return;
            case 'euler':
                this.currentValue = Math.E.toString();
                this.updateDisplay();
                return;
            case 'power':
                this.operation = 'power';
                this.previousValue = this.currentValue;
                this.shouldResetDisplay = true;
                this.updateHistoryDisplay();
                return;
            case 'openParen':
            case 'closeParen':
                // For future complex expression parsing
                return;
        }
        
        if (result !== undefined) {
            this.addToHistory(`${action}(${current})`, result);
            this.currentValue = result.toString();
            this.shouldResetDisplay = true;
            this.updateDisplay();
        }
    }

    factorial(n) {
        if (n < 0) return 'Error';
        if (n === 0 || n === 1) return 1;
        if (n > 170) return Infinity; // Prevent overflow
        
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    handleMemory(action) {
        const current = parseFloat(this.currentValue);
        
        switch(action) {
            case 'mc':
                this.memory = 0;
                break;
            case 'mr':
                this.currentValue = this.memory.toString();
                this.shouldResetDisplay = true;
                break;
            case 'mplus':
                this.memory += current;
                break;
            case 'mminus':
                this.memory -= current;
                break;
            case 'ms':
                this.memory = current;
                break;
        }
        
        this.updateMemoryDisplay();
        this.updateDisplay();
    }

    insertConstant(constant) {
        const constants = {
            c: 299792458, // Speed of light (m/s)
            g: 9.80665, // Gravity (m/s²)
            planck: 6.62607015e-34, // Planck's constant (J⋅s)
            avogadro: 6.02214076e23, // Avogadro's number (1/mol)
            boltzmann: 1.380649e-23, // Boltzmann constant (J/K)
            gas: 8.314462618 // Gas constant (J/(mol⋅K))
        };
        
        this.currentValue = constants[constant].toString();
        this.shouldResetDisplay = true;
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }

    backspace() {
        if (this.currentValue.length > 1) {
            this.currentValue = this.currentValue.slice(0, -1);
        } else {
            this.currentValue = '0';
        }
        this.updateDisplay();
    }

    percent() {
        const current = parseFloat(this.currentValue);
        this.currentValue = (current / 100).toString();
        this.updateDisplay();
    }

    negate() {
        const current = parseFloat(this.currentValue);
        this.currentValue = (-current).toString();
        this.updateDisplay();
    }

    updateDisplay() {
        const display = document.getElementById('mainDisplay');
        const value = parseFloat(this.currentValue);
        
        if (this.currentValue === 'Error' || isNaN(value)) {
            display.textContent = this.currentValue;
        } else if (Math.abs(value) > 1e10 || (Math.abs(value) < 1e-6 && value !== 0)) {
            display.textContent = value.toExponential(6);
        } else {
            display.textContent = this.currentValue;
        }
    }

    updateHistoryDisplay() {
        const historyDisplay = document.getElementById('historyDisplay');
        if (this.operation && this.previousValue) {
            historyDisplay.textContent = `${this.previousValue} ${this.getOperatorSymbol()}`;
        } else {
            historyDisplay.textContent = '';
        }
    }

    updateMemoryDisplay() {
        const indicator = document.getElementById('memoryIndicator');
        if (this.memory !== 0) {
            indicator.textContent = `Memory: ${this.memory}`;
        } else {
            indicator.textContent = '';
        }
    }

    getOperatorSymbol() {
        const symbols = {
            add: '+',
            subtract: '−',
            multiply: '×',
            divide: '÷',
            power: '^'
        };
        return symbols[this.operation] || '';
    }

    addToHistory(expression, result) {
        const historyItem = {
            expression,
            result: result.toString(),
            timestamp: new Date().toLocaleTimeString()
        };
        
        this.history.unshift(historyItem);
        if (this.history.length > 50) {
            this.history.pop();
        }
        
        this.saveHistory();
        this.renderHistory();
    }

    renderHistory() {
        const historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        
        this.history.forEach((item, index) => {
            const historyDiv = document.createElement('div');
            historyDiv.className = 'history-item';
            historyDiv.innerHTML = `
                <div class="expression">${item.expression}</div>
                <div class="result">= ${item.result}</div>
            `;
            historyDiv.addEventListener('click', () => {
                this.currentValue = item.result;
                this.updateDisplay();
            });
            historyList.appendChild(historyDiv);
        });
    }

    saveHistory() {
        localStorage.setItem('calculatorHistory', JSON.stringify(this.history));
    }

    loadHistory() {
        const saved = localStorage.getItem('calculatorHistory');
        if (saved) {
            this.history = JSON.parse(saved);
            this.renderHistory();
        }
    }

    clearHistory() {
        this.history = [];
        this.saveHistory();
        this.renderHistory();
    }

    switchMode(modeId) {
        // Update button states
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.getElementById(modeId).classList.add('active');
        
        // Hide all grids and panels
        document.getElementById('basicGrid').classList.add('hidden');
        document.getElementById('scientificGrid').classList.add('hidden');
        document.getElementById('engineeringPanel').classList.add('hidden');
        
        // Show selected mode
        switch(modeId) {
            case 'basicMode':
                document.getElementById('basicGrid').classList.remove('hidden');
                break;
            case 'scientificMode':
                document.getElementById('scientificGrid').classList.remove('hidden');
                break;
            case 'engineeringMode':
                document.getElementById('scientificGrid').classList.remove('hidden');
                document.getElementById('engineeringPanel').classList.remove('hidden');
                break;
        }
    }

    // Unit Conversion System
    initializeUnitConversions() {
        this.conversionUnits = {
            length: {
                meter: 1,
                kilometer: 0.001,
                centimeter: 100,
                millimeter: 1000,
                mile: 0.000621371,
                yard: 1.09361,
                foot: 3.28084,
                inch: 39.3701
            },
            mass: {
                kilogram: 1,
                gram: 1000,
                milligram: 1000000,
                ton: 0.001,
                pound: 2.20462,
                ounce: 35.274
            },
            temperature: {
                celsius: 'special',
                fahrenheit: 'special',
                kelvin: 'special'
            },
            area: {
                'square meter': 1,
                'square kilometer': 0.000001,
                'square centimeter': 10000,
                'square mile': 3.861e-7,
                'square yard': 1.19599,
                'square foot': 10.7639,
                'acre': 0.000247105,
                'hectare': 0.0001
            },
            volume: {
                'cubic meter': 1,
                liter: 1000,
                milliliter: 1000000,
                'cubic centimeter': 1000000,
                'cubic foot': 35.3147,
                gallon: 264.172,
                quart: 1056.69,
                pint: 2113.38
            },
            speed: {
                'meter/second': 1,
                'kilometer/hour': 3.6,
                'mile/hour': 2.23694,
                'foot/second': 3.28084,
                knot: 1.94384
            },
            pressure: {
                pascal: 1,
                kilopascal: 0.001,
                bar: 0.00001,
                atmosphere: 9.8692e-6,
                psi: 0.000145038,
                torr: 0.00750062
            },
            energy: {
                joule: 1,
                kilojoule: 0.001,
                calorie: 0.239006,
                kilocalorie: 0.000239006,
                'watt-hour': 0.000277778,
                'kilowatt-hour': 2.7778e-7,
                electronvolt: 6.242e18
            }
        };
        
        this.updateUnitOptions();
    }

    updateUnitOptions() {
        const category = document.getElementById('unitCategory').value;
        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');
        
        fromUnit.innerHTML = '';
        toUnit.innerHTML = '';
        
        const units = Object.keys(this.conversionUnits[category]);
        
        units.forEach(unit => {
            const option1 = document.createElement('option');
            option1.value = unit;
            option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            fromUnit.appendChild(option1);
            
            const option2 = document.createElement('option');
            option2.value = unit;
            option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            toUnit.appendChild(option2);
        });
        
        if (units.length > 1) {
            toUnit.value = units[1];
        }
    }

    performConversion() {
        const category = document.getElementById('unitCategory').value;
        const fromValue = parseFloat(document.getElementById('fromValue').value);
        const fromUnit = document.getElementById('fromUnit').value;
        const toUnit = document.getElementById('toUnit').value;
        
        if (isNaN(fromValue)) {
            document.getElementById('toValue').value = '';
            return;
        }
        
        let result;
        
        if (category === 'temperature') {
            result = this.convertTemperature(fromValue, fromUnit, toUnit);
        } else {
            const fromFactor = this.conversionUnits[category][fromUnit];
            const toFactor = this.conversionUnits[category][toUnit];
            result = (fromValue / fromFactor) * toFactor;
        }
        
        document.getElementById('toValue').value = result.toFixed(6);
    }

    convertTemperature(value, from, to) {
        // Convert to Celsius first
        let celsius;
        
        if (from === 'celsius') {
            celsius = value;
        } else if (from === 'fahrenheit') {
            celsius = (value - 32) * 5/9;
        } else if (from === 'kelvin') {
            celsius = value - 273.15;
        }
        
        // Convert from Celsius to target
        if (to === 'celsius') {
            return celsius;
        } else if (to === 'fahrenheit') {
            return celsius * 9/5 + 32;
        } else if (to === 'kelvin') {
            return celsius + 273.15;
        }
    }

    handleKeyboard(e) {
        if (e.key >= '0' && e.key <= '9' || e.key === '.') {
            this.appendNumber(e.key);
        } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
            const operationMap = {
                '+': 'add',
                '-': 'subtract',
                '*': 'multiply',
                '/': 'divide'
            };
            this.selectOperation(operationMap[e.key]);
        } else if (e.key === 'Enter' || e.key === '=') {
            e.preventDefault();
            if (this.operation) {
                this.calculate();
            }
        } else if (e.key === 'Escape') {
            this.clear();
        } else if (e.key === 'Backspace') {
            this.backspace();
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode');
        
        const themeIcon = document.querySelector('.theme-icon');
        themeIcon.textContent = this.isDarkMode ? '☀️' : '🌙';
        
        localStorage.setItem('calculatorTheme', this.isDarkMode ? 'dark' : 'light');
    }

    toggleAngleMode() {
        this.angleMode = this.angleMode === 'deg' ? 'rad' : 'deg';
        document.getElementById('angleMode').textContent = this.angleMode.toUpperCase();
        localStorage.setItem('calculatorAngleMode', this.angleMode);
    }

    copyToClipboard() {
        const textToCopy = this.currentValue;
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const copyBtn = document.getElementById('copyBtn');
            const originalContent = copyBtn.innerHTML;
            copyBtn.innerHTML = '<span>✓</span>';
            copyBtn.style.background = 'rgba(56, 239, 125, 0.3)';
            
            setTimeout(() => {
                copyBtn.innerHTML = originalContent;
                copyBtn.style.background = '';
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy:', err);
        });
    }

    loadPreferences() {
        const savedTheme = localStorage.getItem('calculatorTheme');
        const savedAngleMode = localStorage.getItem('calculatorAngleMode');
        
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark-mode');
            document.querySelector('.theme-icon').textContent = '☀️';
        }
        
        if (savedAngleMode) {
            this.angleMode = savedAngleMode;
            document.getElementById('angleMode').textContent = this.angleMode.toUpperCase();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new Calculator();
});
