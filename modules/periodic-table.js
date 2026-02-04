/**
 * Periodic Table Module
 * Provides chemical element data and properties
 */

const PERIODIC_TABLE = {
    1: { symbol: 'H', name: 'Hydrogen', atomicMass: 1.008, atomicNumber: 1, category: 'nonmetal' },
    2: { symbol: 'He', name: 'Helium', atomicMass: 4.003, atomicNumber: 2, category: 'noble-gas' },
    3: { symbol: 'Li', name: 'Lithium', atomicMass: 6.941, atomicNumber: 3, category: 'alkali-metal' },
    4: { symbol: 'Be', name: 'Beryllium', atomicMass: 9.012, atomicNumber: 4, category: 'alkaline-earth' },
    5: { symbol: 'B', name: 'Boron', atomicMass: 10.81, atomicNumber: 5, category: 'metalloid' },
    6: { symbol: 'C', name: 'Carbon', atomicMass: 12.01, atomicNumber: 6, category: 'nonmetal' },
    7: { symbol: 'N', name: 'Nitrogen', atomicMass: 14.01, atomicNumber: 7, category: 'nonmetal' },
    8: { symbol: 'O', name: 'Oxygen', atomicMass: 16.00, atomicNumber: 8, category: 'nonmetal' },
    9: { symbol: 'F', name: 'Fluorine', atomicMass: 19.00, atomicNumber: 9, category: 'halogen' },
    10: { symbol: 'Ne', name: 'Neon', atomicMass: 20.18, atomicNumber: 10, category: 'noble-gas' },
    11: { symbol: 'Na', name: 'Sodium', atomicMass: 22.99, atomicNumber: 11, category: 'alkali-metal' },
    12: { symbol: 'Mg', name: 'Magnesium', atomicMass: 24.31, atomicNumber: 12, category: 'alkaline-earth' },
    13: { symbol: 'Al', name: 'Aluminum', atomicMass: 26.98, atomicNumber: 13, category: 'metal' },
    14: { symbol: 'Si', name: 'Silicon', atomicMass: 28.09, atomicNumber: 14, category: 'metalloid' },
    15: { symbol: 'P', name: 'Phosphorus', atomicMass: 30.97, atomicNumber: 15, category: 'nonmetal' },
    16: { symbol: 'S', name: 'Sulfur', atomicMass: 32.06, atomicNumber: 16, category: 'nonmetal' },
    17: { symbol: 'Cl', name: 'Chlorine', atomicMass: 35.45, atomicNumber: 17, category: 'halogen' },
    18: { symbol: 'Ar', name: 'Argon', atomicMass: 39.95, atomicNumber: 18, category: 'noble-gas' },
    26: { symbol: 'Fe', name: 'Iron', atomicMass: 55.85, atomicNumber: 26, category: 'transition-metal' },
    29: { symbol: 'Cu', name: 'Copper', atomicMass: 63.55, atomicNumber: 29, category: 'transition-metal' },
    30: { symbol: 'Zn', name: 'Zinc', atomicMass: 65.38, atomicNumber: 30, category: 'transition-metal' },
    47: { symbol: 'Ag', name: 'Silver', atomicMass: 107.87, atomicNumber: 47, category: 'transition-metal' },
    79: { symbol: 'Au', name: 'Gold', atomicMass: 196.97, atomicNumber: 79, category: 'transition-metal' },
    92: { symbol: 'U', name: 'Uranium', atomicMass: 238.03, atomicNumber: 92, category: 'actinide' }
};

class PeriodicTable {
    constructor() {
        this.elements = PERIODIC_TABLE;
    }

    getElement(atomicNumberOrSymbol) {
        const num = parseInt(atomicNumberOrSymbol);
        if (!isNaN(num)) {
            return this.elements[num];
        }

        const symbol = atomicNumberOrSymbol.toUpperCase();
        for (const [key, element] of Object.entries(this.elements)) {
            if (element.symbol === symbol) {
                return element;
            }
        }
        return null;
    }

    searchByName(name) {
        const lowerName = name.toLowerCase();
        return Object.values(this.elements).filter(el => 
            el.name.toLowerCase().includes(lowerName)
        );
    }

    getCategory(category) {
        return Object.values(this.elements).filter(el => el.category === category);
    }

    calculateMolarMass(formula) {
        // Simple formula parser (e.g., H2O, CO2)
        const regex = /([A-Z][a-z]?)(\d*)/g;
        let totalMass = 0;
        let match;

        while ((match = regex.exec(formula)) !== null) {
            const symbol = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            
            const element = this.getElement(symbol);
            if (element) {
                totalMass += element.atomicMass * count;
            }
        }

        return totalMass;
    }

    getElementList() {
        return Object.values(this.elements).sort((a, b) => a.atomicNumber - b.atomicNumber);
    }
}
