// Enhanced Calculator with all advanced features
// Integrates Statistics, Matrix, Equation Solver, Periodic Table, and more

class AdvancedCalculator {
    constructor() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.memory = 0;
        this.history = new CalculatorHistory();
        this.angleMode = 'deg';
        this.isDarkMode = false;
        this.currentMode = 'basic';
        this.precision = 10;
        this.settings = new CalculatorSettings();
        this.themeManager = new ThemeManager();
        this.statistics = new StatisticsCalculator();
        this.matrix = new MatrixCalculator();
        this.equations = new EquationSolver();
        this.periodicTable = new PeriodicTable();
        
        this.initialize();
    }

    initialize() {
        this.setupEventListeners();
        this.updateDisplay();
        this.loadHistory();
        this.initializeUnitConversions();
        this.loadPreferences();
        this.setupThemeSelector();
        this.setupLanguageSelector();
        this.setupModeListeners();
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

        // Constants buttons
        document.querySelectorAll('.const-btn').forEach(btn => {
            btn.addEventListener('click', () => this.insertConstant(btn.dataset.constant));
        });

        // Memory buttons
        document.querySelectorAll('.mem-btn').forEach(btn => {
            btn.addEventListener('click', () => this.handleMemory(btn.dataset.action));
        });

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) themeToggle.addEventListener('click', () => this.toggleTheme());

        // Angle mode toggle
        const angleToggle = document.getElementById('angleToggle');
        if (angleToggle) angleToggle.addEventListener('click', () => this.toggleAngleMode());

        // Copy button
        const copyBtn = document.getElementById('copyBtn');
        if (copyBtn) copyBtn.addEventListener('click', () => this.copyToClipboard());

        // Undo/Redo buttons
        const undoBtn = document.getElementById('undoBtn');
        const redoBtn = document.getElementById('redoBtn');
        if (undoBtn) undoBtn.addEventListener('click', () => this.undo());
        if (redoBtn) redoBtn.addEventListener('click', () => this.redo());

        // History panel
        const historyToggle = document.getElementById('historyToggle');
        if (historyToggle) {
            historyToggle.addEventListener('click', () => {
                const panel = document.getElementById('historyPanel');
                if (panel) panel.classList.toggle('hidden');
            });
        }

        const clearHistory = document.getElementById('clearHistory');
        if (clearHistory) clearHistory.addEventListener('click', () => this.clearHistory());

        // Unit conversion
        const convertBtn = document.getElementById('convertBtn');
        if (convertBtn) convertBtn.addEventListener('click', () => this.performConversion());

        const unitCategory = document.getElementById('unitCategory');
        if (unitCategory) unitCategory.addEventListener('change', () => this.updateUnitOptions());

        const fromValue = document.getElementById('fromValue');
        if (fromValue) fromValue.addEventListener('input', () => this.performConversion());

        // Keyboard support
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));

        // Statistics mode
        const statsAdd = document.getElementById('statsAdd');
        if (statsAdd) statsAdd.addEventListener('click', () => this.addStatisticalData());

        const statsClear = document.getElementById('statsClear');
        if (statsClear) statsClear.addEventListener('click', () => this.clearStatistics());

        // Equation solver
        const solveBtn = document.getElementById('solveBtn');
        if (solveBtn) solveBtn.addEventListener('click', () => this.solveEquation());

        // Matrix operations
        const matrixCalc = document.getElementById('matrixCalc');
        if (matrixCalc) matrixCalc.addEventListener('click', () => this.calculateMatrix());

        const matrixClear = document.getElementById('matrixClear');
        if (matrixClear) matrixClear.addEventListener('click', () => this.clearMatrix());
    }

    setupThemeSelector() {
        const themeSelector = document.getElementById('themeSelector');
        const themeModal = document.getElementById('themeModal');
        const themeGrid = document.getElementById('themeGrid');
        const closeThemeModal = document.getElementById('closeThemeModal');

        if (themeSelector && themeModal && themeGrid) {
            themeSelector.addEventListener('click', () => {
                themeModal.classList.toggle('hidden');
                this.populateThemeGrid();
            });

            if (closeThemeModal) {
                closeThemeModal.addEventListener('click', () => {
                    themeModal.classList.add('hidden');
                });
            }

            // Close modal when clicking outside
            window.addEventListener('click', (e) => {
                if (e.target === themeModal) {
                    themeModal.classList.add('hidden');
                }
            });
        }
    }

    populateThemeGrid() {
        const themeGrid = document.getElementById('themeGrid');
        if (!themeGrid) return;

        themeGrid.innerHTML = '';
        const themes = this.themeManager.getAvailableThemes();

        themes.forEach(theme => {
            const themeColor = this.themeManager.getTheme(theme.id);
            const option = document.createElement('div');
            option.className = 'theme-option';
            if (theme.id === this.themeManager.currentTheme) {
                option.classList.add('active');
            }
            option.innerHTML = `
                <div class="theme-preview" style="background: ${themeColor.bg}; border: 3px solid ${themeColor.primary};"></div>
                <span>${theme.name}</span>
            `;
            option.addEventListener('click', () => {
                this.themeManager.setTheme(theme.id);
                this.populateThemeGrid();
            });
            themeGrid.appendChild(option);
        });
    }

    setupLanguageSelector() {
        const langSelector = document.getElementById('langSelector');
        if (langSelector) {
            langSelector.value = i18nInstance.getLanguage();
            langSelector.addEventListener('change', (e) => {
                i18nInstance.setLanguage(e.target.value);
                i18nInstance.updateUI();
            });
        }
    }

    setupModeListeners() {
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchMode(e.target.id));
        });
    }

    switchMode(modeId) {
        // Remove active class from all mode buttons
        document.querySelectorAll('.mode-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // Add active class to clicked button
        document.getElementById(modeId).classList.add('active');

        // Hide all panels
        document.getElementById('basicGrid').classList.add('hidden');
        document.getElementById('scientificGrid').classList.add('hidden');
        document.getElementById('statsPanel').classList.add('hidden');
        document.getElementById('matrixPanel').classList.add('hidden');
        document.getElementById('equationPanel').classList.add('hidden');
        document.getElementById('engineeringPanel').classList.add('hidden');

        // Show selected panel
        switch (modeId) {
            case 'basicMode':
                this.currentMode = 'basic';
                document.getElementById('basicGrid').classList.remove('hidden');
                break;
            case 'scientificMode':
                this.currentMode = 'scientific';
                document.getElementById('scientificGrid').classList.remove('hidden');
                break;
            case 'statisticsMode':
                this.currentMode = 'statistics';
                document.getElementById('statsPanel').classList.remove('hidden');
                break;
            case 'matrixMode':
                this.currentMode = 'matrix';
                document.getElementById('matrixPanel').classList.remove('hidden');
                break;
            case 'equationMode':
                this.currentMode = 'equation';
                document.getElementById('equationPanel').classList.remove('hidden');
                this.setupEquationSolver();
                break;
            case 'engineeringMode':
                this.currentMode = 'engineering';
                document.getElementById('engineeringPanel').classList.remove('hidden');
                break;
        }
    }

    // Basic calculator functions
    appendNumber(num) {
        if (num === '.' && this.currentValue.includes('.')) return;
        if (this.shouldResetDisplay) {
            this.currentValue = num;
            this.shouldResetDisplay = false;
        } else {
            this.currentValue = this.currentValue === '0' ? num : this.currentValue + num;
        }
        this.updateDisplay();
    }

    selectOperation(op) {
        if (this.currentValue === '') return;
        if (this.previousValue !== '') {
            this.calculate();
        }
        this.operation = op;
        this.previousValue = this.currentValue;
        this.shouldResetDisplay = true;
    }

    calculate() {
        if (!this.operation || this.previousValue === '') return;

        let result;
        const prev = parseFloat(this.previousValue);
        const current = parseFloat(this.currentValue);

        switch (this.operation) {
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
                result = current === 0 ? 'Error' : prev / current;
                break;
            default:
                return;
        }

        this.currentValue = isNaN(result) ? 'Error' : result.toString();
        this.operation = null;
        this.previousValue = '';
        this.addToHistory(`${prev} ${this.operation} ${current}`, this.currentValue);
        this.updateDisplay();
    }

    handleFunction(action) {
        const value = parseFloat(this.currentValue);
        let result;

        switch (action) {
            case 'clear':
                this.clear();
                return;
            case 'backspace':
                this.currentValue = this.currentValue.slice(0, -1) || '0';
                break;
            case 'percent':
                result = value / 100;
                this.currentValue = result.toString();
                break;
            case 'negate':
                this.currentValue = (value * -1).toString();
                break;
            case 'equals':
                this.calculate();
                return;
        }
        this.updateDisplay();
    }

    handleScientific(action) {
        const value = parseFloat(this.currentValue);
        let result;

        switch (action) {
            case 'square':
                result = value * value;
                break;
            case 'cube':
                result = value * value * value;
                break;
            case 'sqrt':
                result = Math.sqrt(value);
                break;
            case 'cbrt':
                result = Math.cbrt(value);
                break;
            case 'sin':
                const sinVal = this.angleMode === 'rad' ? value : value * Math.PI / 180;
                result = Math.sin(sinVal);
                break;
            case 'cos':
                const cosVal = this.angleMode === 'rad' ? value : value * Math.PI / 180;
                result = Math.cos(cosVal);
                break;
            case 'tan':
                const tanVal = this.angleMode === 'rad' ? value : value * Math.PI / 180;
                result = Math.tan(tanVal);
                break;
            case 'asin':
                result = this.angleMode === 'rad' ? Math.asin(value) : Math.asin(value) * 180 / Math.PI;
                break;
            case 'acos':
                result = this.angleMode === 'rad' ? Math.acos(value) : Math.acos(value) * 180 / Math.PI;
                break;
            case 'atan':
                result = this.angleMode === 'rad' ? Math.atan(value) : Math.atan(value) * 180 / Math.PI;
                break;
            case 'sinh':
                result = Math.sinh(value);
                break;
            case 'cosh':
                result = Math.cosh(value);
                break;
            case 'tanh':
                result = Math.tanh(value);
                break;
            case 'log':
                result = Math.log10(value);
                break;
            case 'ln':
                result = Math.log(value);
                break;
            case 'exp':
                result = Math.exp(value);
                break;
            case 'factorial':
                result = this.factorial(value);
                break;
            case 'reciprocal':
                result = 1 / value;
                break;
            case 'abs':
                result = Math.abs(value);
                break;
            case 'power':
                this.operation = 'power';
                this.previousValue = this.currentValue;
                this.shouldResetDisplay = true;
                this.updateDisplay();
                return;
            case 'pi':
                this.currentValue = Math.PI.toString();
                break;
            case 'euler':
                this.currentValue = Math.E.toString();
                break;
            case 'rand':
                result = Math.random();
                break;
            case 'modulo':
                this.operation = 'modulo';
                this.previousValue = this.currentValue;
                this.shouldResetDisplay = true;
                this.updateDisplay();
                return;
            case 'percent':
                result = value / 100;
                break;
            case 'openParen':
            case 'closeParen':
                return;
        }

        if (result !== undefined) {
            this.currentValue = isNaN(result) ? 'Error' : result.toFixed(this.precision).replace(/\.?0+$/, '');
            this.addToHistory(action, this.currentValue);
        }
        this.updateDisplay();
    }

    factorial(n) {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    insertConstant(constant) {
        const constants = {
            c: 299792458,
            g: 9.81,
            planck: 6.62607015e-34,
            avogadro: 6.02214076e23,
            boltzmann: 1.380649e-23,
            gas: 8.314
        };
        this.currentValue = constants[constant] ? constants[constant].toString() : '0';
        this.updateDisplay();
    }

    handleMemory(action) {
        const value = parseFloat(this.currentValue);
        const memoryIndicator = document.getElementById('memoryIndicator');

        switch (action) {
            case 'mc':
                this.memory = 0;
                break;
            case 'mr':
                this.currentValue = this.memory.toString();
                this.shouldResetDisplay = true;
                break;
            case 'mplus':
                this.memory += value;
                break;
            case 'mminus':
                this.memory -= value;
                break;
            case 'ms':
                this.memory = value;
                break;
        }

        if (memoryIndicator) {
            memoryIndicator.textContent = this.memory !== 0 ? `M: ${this.memory.toFixed(2)}` : '';
        }
        this.updateDisplay();
    }

    clear() {
        this.currentValue = '0';
        this.previousValue = '';
        this.operation = null;
        this.shouldResetDisplay = false;
        this.updateDisplay();
    }

    undo() {
        const prevOp = this.history.undo();
        if (prevOp) {
            this.currentValue = prevOp.result;
            this.updateDisplay();
        }
    }

    redo() {
        const nextOp = this.history.redo();
        if (nextOp) {
            this.currentValue = nextOp.result;
            this.updateDisplay();
        }
    }

    updateDisplay() {
        const mainDisplay = document.getElementById('mainDisplay');
        if (mainDisplay) {
            mainDisplay.textContent = this.currentValue;
        }
        const historyDisplay = document.getElementById('historyDisplay');
        if (historyDisplay) {
            historyDisplay.textContent = this.previousValue && this.operation
                ? `${this.previousValue} ${this.operation}`
                : '';
        }
    }

    addToHistory(expression, result) {
        this.history.addOperation({
            expression: expression,
            result: result,
            timestamp: new Date().toLocaleTimeString()
        });
        this.displayHistory();
    }

    displayHistory() {
        const historyList = document.getElementById('historyList');
        if (!historyList) return;

        const historyItems = this.history.getHistory();
        historyList.innerHTML = historyItems.map(item => `
            <div class="history-item" onclick="calculator.currentValue = '${item.result}'; calculator.updateDisplay();">
                <div class="expression">${item.expression}</div>
                <div class="result">${item.result}</div>
                <small>${item.timestamp}</small>
            </div>
        `).join('');
    }

    loadHistory() {
        this.displayHistory();
    }

    clearHistory() {
        this.history.clear();
        this.displayHistory();
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.currentValue).then(() => {
            const copyBtn = document.getElementById('copyBtn');
            if (copyBtn) {
                const originalContent = copyBtn.innerHTML;
                copyBtn.innerHTML = '✓';
                setTimeout(() => {
                    copyBtn.innerHTML = originalContent;
                }, 1500);
            }
        });
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('calculatorTheme', this.isDarkMode ? 'dark' : 'light');
    }

    toggleAngleMode() {
        this.angleMode = this.angleMode === 'deg' ? 'rad' : 'deg';
        const angleModeDisplay = document.getElementById('angleMode');
        if (angleModeDisplay) {
            angleModeDisplay.textContent = this.angleMode.toUpperCase();
        }
        localStorage.setItem('calculatorAngleMode', this.angleMode);
    }

    loadPreferences() {
        const savedTheme = localStorage.getItem('calculatorTheme');
        const savedAngleMode = localStorage.getItem('calculatorAngleMode');
        const themeIcon = document.querySelector('.theme-icon');

        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark-mode');
            if (themeIcon) themeIcon.textContent = '☀️';
        }

        if (savedAngleMode) {
            this.angleMode = savedAngleMode;
            const angleModeDisplay = document.getElementById('angleMode');
            if (angleModeDisplay) {
                angleModeDisplay.textContent = this.angleMode.toUpperCase();
            }
        }
    }

    // Unit Conversion Functions
    initializeUnitConversions() {
        this.unitConversions = {
            length: {
                meter: 1,
                kilometer: 1000,
                mile: 1609.34,
                foot: 0.3048,
                inch: 0.0254,
                yard: 0.9144,
                centimeter: 0.01,
                millimeter: 0.001
            },
            mass: {
                kilogram: 1,
                gram: 0.001,
                pound: 0.453592,
                ounce: 0.0283495,
                ton: 1000,
                milligram: 0.000001
            },
            temperature: {
                celsius: 0,
                fahrenheit: 32,
                kelvin: 273.15
            },
            area: {
                'square meter': 1,
                'square kilometer': 1e6,
                hectare: 10000,
                acre: 4046.86,
                'square mile': 2.589988e6,
                'square foot': 0.092903,
                'square inch': 0.00064516
            },
            volume: {
                liter: 0.001,
                'cubic meter': 1,
                gallon: 0.00378541,
                'cubic foot': 0.0283168,
                'cubic inch': 0.0000163871,
                milliliter: 0.000001
            },
            speed: {
                'meter per second': 1,
                'kilometer per hour': 0.277778,
                'mile per hour': 0.44704,
                knot: 0.51444
            },
            pressure: {
                pascal: 1,
                bar: 100000,
                psi: 6894.76,
                atmosphere: 101325
            },
            energy: {
                joule: 1,
                calorie: 4.184,
                'kilowatt-hour': 3.6e6,
                'electron volt': 1.602e-19
            }
        };
        this.updateUnitOptions();
    }

    updateUnitOptions() {
        const category = document.getElementById('unitCategory')?.value || 'length';
        const units = Object.keys(this.unitConversions[category]);

        const fromUnit = document.getElementById('fromUnit');
        const toUnit = document.getElementById('toUnit');

        if (fromUnit && toUnit) {
            [fromUnit, toUnit].forEach(select => {
                select.innerHTML = units.map(unit => 
                    `<option value="${unit}">${unit}</option>`
                ).join('');
            });
        }
    }

    performConversion() {
        const category = document.getElementById('unitCategory')?.value || 'length';
        const fromValue = parseFloat(document.getElementById('fromValue')?.value || 0);
        const fromUnit = document.getElementById('fromUnit')?.value;
        const toUnit = document.getElementById('toUnit')?.value;
        const toValueField = document.getElementById('toValue');

        if (category === 'temperature') {
            this.convertTemperature(fromValue, fromUnit, toUnit, toValueField);
        } else {
            const conversionFactor = this.unitConversions[category][toUnit] / 
                                    this.unitConversions[category][fromUnit];
            const result = fromValue * conversionFactor;
            if (toValueField) toValueField.value = result.toFixed(6);
        }
    }

    convertTemperature(value, fromUnit, toUnit, resultField) {
        let celsius;

        if (fromUnit === 'celsius') celsius = value;
        else if (fromUnit === 'fahrenheit') celsius = (value - 32) * 5/9;
        else if (fromUnit === 'kelvin') celsius = value - 273.15;

        let result;
        if (toUnit === 'celsius') result = celsius;
        else if (toUnit === 'fahrenheit') result = celsius * 9/5 + 32;
        else if (toUnit === 'kelvin') result = celsius + 273.15;

        if (resultField) resultField.value = result.toFixed(2);
    }

    // Statistics Mode
    addStatisticalData() {
        const input = document.getElementById('statsInput')?.value || '';
        const values = input.split(',').map(v => parseFloat(v.trim())).filter(v => !isNaN(v));

        values.forEach(v => this.statistics.addValue(v));
        this.updateStatisticsDisplay();
    }

    clearStatistics() {
        this.statistics.clearData();
        document.getElementById('statsInput').value = '';
        this.updateStatisticsDisplay();
    }

    updateStatisticsDisplay() {
        document.getElementById('statMean').textContent = this.statistics.getMean().toFixed(4);
        document.getElementById('statMedian').textContent = this.statistics.getMedian().toFixed(4);
        document.getElementById('statMode').textContent = this.statistics.getMode();
        document.getElementById('statStdDev').textContent = this.statistics.getStdDev().toFixed(4);
        document.getElementById('statVariance').textContent = this.statistics.getVariance().toFixed(4);
    }

    // Matrix Operations
    calculateMatrix() {
        // Placeholder for matrix calculations
        const result = document.getElementById('matrixResults');
        if (result) result.innerHTML = '<p>Matrix calculations will be implemented</p>';
    }

    clearMatrix() {
        document.getElementById('matrixResults').innerHTML = '';
    }

    // Equation Solver
    setupEquationSolver() {
        const eqnType = document.getElementById('eqnType');
        if (eqnType) {
            eqnType.addEventListener('change', () => this.updateEquationInputs());
            this.updateEquationInputs();
        }
    }

    updateEquationInputs() {
        const type = document.getElementById('eqnType')?.value || 'linear';
        const inputs = document.getElementById('equationInputs');
        if (!inputs) return;

        let html = '';
        if (type === 'linear') {
            html = '<input type="number" placeholder="a" id="eqnA"><input type="number" placeholder="b" id="eqnB">';
        } else if (type === 'quadratic') {
            html = '<input type="number" placeholder="a" id="eqnA"><input type="number" placeholder="b" id="eqnB"><input type="number" placeholder="c" id="eqnC">';
        }
        inputs.innerHTML = html;
    }

    solveEquation() {
        const type = document.getElementById('eqnType')?.value || 'linear';
        const resultDiv = document.getElementById('equationResults');
        if (!resultDiv) return;

        let result;
        if (type === 'linear') {
            const a = parseFloat(document.getElementById('eqnA')?.value || 0);
            const b = parseFloat(document.getElementById('eqnB')?.value || 0);
            result = this.equations.solveLinear(a, b);
        } else if (type === 'quadratic') {
            const a = parseFloat(document.getElementById('eqnA')?.value || 1);
            const b = parseFloat(document.getElementById('eqnB')?.value || 0);
            const c = parseFloat(document.getElementById('eqnC')?.value || 0);
            result = this.equations.solveQuadratic(a, b, c);
        }

        resultDiv.innerHTML = `<strong>Solutions:</strong> ${result.solutions.join(', ')}`;
    }

    handleKeyboard(e) {
        const key = e.key;
        
        if (key >= '0' && key <= '9') {
            this.appendNumber(key);
        } else if (key === '.') {
            this.appendNumber('.');
        } else if (key === '+') {
            this.selectOperation('add');
        } else if (key === '-') {
            this.selectOperation('subtract');
        } else if (key === '*') {
            this.selectOperation('multiply');
        } else if (key === '/') {
            e.preventDefault();
            this.selectOperation('divide');
        } else if (key === 'Enter' || key === '=') {
            e.preventDefault();
            this.calculate();
        } else if (key === 'Escape') {
            this.clear();
        } else if (key === 'Backspace') {
            this.currentValue = this.currentValue.slice(0, -1) || '0';
            this.updateDisplay();
        }
    }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.calculator = new AdvancedCalculator();
});
