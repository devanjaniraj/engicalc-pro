/**
 * Internationalization Module
 * Provides multilingual support for the calculator
 */

const TRANSLATIONS = {
    en: {
        title: 'Engineering Calculator',
        basic: 'Basic',
        scientific: 'Scientific',
        engineering: 'Engineering',
        deg: 'DEG',
        rad: 'RAD',
        copy: 'Copy',
        clear: 'Clear',
        delete: 'Delete',
        history: 'History',
        clearHistory: 'Clear History',
        memory: 'Memory',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: 'Constants',
        units: 'Units',
        convert: 'Convert',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sin',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sin⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: 'Statistics',
        matrix: 'Matrix',
        equations: 'Equations',
        periodic: 'Periodic Table',
        mean: 'Mean',
        median: 'Median',
        mode: 'Mode',
        stdDev: 'Std Dev',
        variance: 'Variance'
    },
    es: {
        title: 'Calculadora de Ingeniería',
        basic: 'Básico',
        scientific: 'Científico',
        engineering: 'Ingeniería',
        deg: 'GRA',
        rad: 'RAD',
        copy: 'Copiar',
        clear: 'Borrar',
        delete: 'Eliminar',
        history: 'Historial',
        clearHistory: 'Borrar Historial',
        memory: 'Memoria',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: 'Constantes',
        units: 'Unidades',
        convert: 'Convertir',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sen',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sen⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: 'Estadística',
        matrix: 'Matriz',
        equations: 'Ecuaciones',
        periodic: 'Tabla Periódica',
        mean: 'Media',
        median: 'Mediana',
        mode: 'Moda',
        stdDev: 'Desv. Est',
        variance: 'Varianza'
    },
    fr: {
        title: 'Calculatrice d\'Ingénierie',
        basic: 'Basique',
        scientific: 'Scientifique',
        engineering: 'Ingénierie',
        deg: 'DEG',
        rad: 'RAD',
        copy: 'Copier',
        clear: 'Effacer',
        delete: 'Supprimer',
        history: 'Historique',
        clearHistory: 'Effacer l\'historique',
        memory: 'Mémoire',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: 'Constantes',
        units: 'Unités',
        convert: 'Convertir',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sin',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sin⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: 'Statistiques',
        matrix: 'Matrice',
        equations: 'Équations',
        periodic: 'Tableau Périodique',
        mean: 'Moyenne',
        median: 'Médiane',
        mode: 'Mode',
        stdDev: 'Écart-type',
        variance: 'Variance'
    },
    de: {
        title: 'Ingenieurrechner',
        basic: 'Basis',
        scientific: 'Wissenschaftlich',
        engineering: 'Ingenieurwesen',
        deg: 'GRA',
        rad: 'RAD',
        copy: 'Kopieren',
        clear: 'Löschen',
        delete: 'Entfernen',
        history: 'Verlauf',
        clearHistory: 'Verlauf löschen',
        memory: 'Speicher',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: 'Konstanten',
        units: 'Einheiten',
        convert: 'Konvertieren',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sin',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sin⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: 'Statistik',
        matrix: 'Matrix',
        equations: 'Gleichungen',
        periodic: 'Periodisches System',
        mean: 'Durchschnitt',
        median: 'Median',
        mode: 'Modalwert',
        stdDev: 'Std. Abw.',
        variance: 'Varianz'
    },
    zh: {
        title: '工程计算器',
        basic: '基础',
        scientific: '科学',
        engineering: '工程',
        deg: '度',
        rad: '弧',
        copy: '复制',
        clear: '清除',
        delete: '删除',
        history: '历史',
        clearHistory: '清除历史',
        memory: '内存',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: '常数',
        units: '单位',
        convert: '转换',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sin',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sin⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: '统计',
        matrix: '矩阵',
        equations: '方程',
        periodic: '元素周期表',
        mean: '平均值',
        median: '中位数',
        mode: '众数',
        stdDev: '标准差',
        variance: '方差'
    },
    ja: {
        title: '工学電卓',
        basic: '基本',
        scientific: '科学',
        engineering: '工学',
        deg: '度',
        rad: 'ラド',
        copy: 'コピー',
        clear: 'クリア',
        delete: '削除',
        history: '履歴',
        clearHistory: '履歴をクリア',
        memory: 'メモリ',
        memoryAdd: 'M+',
        memorySub: 'M-',
        memoryRecall: 'MR',
        memoryClear: 'MC',
        memoryStore: 'MS',
        constants: '定数',
        units: '単位',
        convert: '変換',
        equals: '=',
        pi: 'π',
        euler: 'e',
        sin: 'sin',
        cos: 'cos',
        tan: 'tan',
        arcsin: 'sin⁻¹',
        arccos: 'cos⁻¹',
        arctan: 'tan⁻¹',
        sqrt: '√',
        power: 'x^y',
        factorial: 'n!',
        reciprocal: '1/x',
        percent: '%',
        statistics: '統計',
        matrix: '行列',
        equations: '方程式',
        periodic: '周期表',
        mean: '平均値',
        median: '中央値',
        mode: '最頻値',
        stdDev: '標準偏差',
        variance: '分散'
    }
};

class i18n {
    constructor(defaultLang = 'en') {
        this.currentLanguage = defaultLang;
        this.translations = TRANSLATIONS;
        this.loadLanguage();
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLanguage = lang;
            localStorage.setItem('calcLanguage', lang);
            this.updateUI();
        }
    }

    getLanguage() {
        return this.currentLanguage;
    }

    t(key) {
        const trans = this.translations[this.currentLanguage];
        return trans && trans[key] ? trans[key] : this.translations.en[key] || key;
    }

    loadLanguage() {
        const saved = localStorage.getItem('calcLanguage');
        if (saved && this.translations[saved]) {
            this.currentLanguage = saved;
        } else {
            // Detect browser language
            const browserLang = navigator.language.substring(0, 2);
            if (this.translations[browserLang]) {
                this.currentLanguage = browserLang;
            }
        }
    }

    getAvailableLanguages() {
        return Object.keys(this.translations).map(lang => ({
            code: lang,
            name: this.getLanguageName(lang)
        }));
    }

    getLanguageName(code) {
        const names = {
            en: 'English',
            es: 'Español',
            fr: 'Français',
            de: 'Deutsch',
            zh: '中文',
            ja: '日本語'
        };
        return names[code] || code;
    }

    updateUI() {
        // Update UI elements based on current language
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = this.t(key);
        });

        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            element.setAttribute('title', this.t(key));
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            element.setAttribute('placeholder', this.t(key));
        });
    }

    formatNumber(num, precision = 2) {
        const nf = new Intl.NumberFormat(this.currentLanguage, {
            minimumFractionDigits: 0,
            maximumFractionDigits: precision
        });
        return nf.format(num);
    }
}

// Create global i18n instance
const i18nInstance = new i18n();
