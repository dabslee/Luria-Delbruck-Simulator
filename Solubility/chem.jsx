class Ion {
    constructor (charge, jsx) {
        this.charge = charge;
        this.jsx = jsx;
    }
}

cations = {
    // the alkali metals
    LITHIUM: Ion(1, <span>Li</span>),
    SODIUM: Ion(1, <span>Na</span>),
    POTASSIUM: Ion(1, <span>K</span>),
    RUBIDIUM: Ion(1, <span>Rb</span>),
    CESIUM: Ion(1, <span>Cs</span>),
    FRANCIUM: Ion(1, <span>Fr</span>),

    // the alkaline earth metals
    BERYLLIUM: Ion(2, <span>Be</span>),
    MAGNESIUM: Ion(2, <span>Mg</span>),
    CALCIUM: Ion(2, <span>Ca</span>),
    STRONTIUM: Ion(2, <span>Sr</span>),
    BARIUM: Ion(2, <span>Ba</span>),
    RADIUM: Ion(2, <span>Ra</span>),

    // 3d transition metals
    SCANDIUM3: Ion(3, <span>Sc</span>),
    TITANIUM4: Ion(4, <span>Ti</span>),
    VANADIUM2: Ion(2, <span>V</span>),
    VANADIUM3: Ion(3, <span>V</span>),
    VANADIUM4: Ion(4, <span>V</span>),
    VANADIUM5: Ion(5, <span>V</span>),
    CHROMIUM2: Ion(2, <span>Cr</span>),
    CHROMIUM3: Ion(3, <span>Cr</span>),
    CHROMIUM6: Ion(6, <span>Cr</span>),
    MANGANESE2: Ion(2, <span>Mn</span>),
    MANGANESE3: Ion(3, <span>Mn</span>),
    MANGANESE4: Ion(4, <span>Mn</span>),
    MANGANESE6: Ion(6, <span>Mn</span>),
    MANGANESE7: Ion(7, <span>Mn</span>),
    IRON2: Ion(2, <span>Fe</span>),
    IRON3: Ion(3, <span>Fe</span>),
    COBALT2: Ion(2, <span>Co</span>),
    COBALT3: Ion(3, <span>Co</span>),
    NICKEL2: Ion(2, <span>Ni</span>),
    COPPER1: Ion(1, <span>Cu</span>),
    COPPER2: Ion(2, <span>Cu</span>),
    ZINC2: Ion(2, <span>Zn</span>),

    // Other elemental cations
    ALUMINUM: Ion(3, <span>Al</span>),
    SILVER: Ion(1, <span>Ag</span>),
    LEAD2: Ion(2, <span>Pb</span>),
    LEAD4: Ion(4, <span>Pb</span>),

    // Polyatomic cations
    AMMONIUM: Ion(1, <span>NH<sub>4</sub></span>),
    MERCURY1: Ion(2, <span>Hg<sub>2</sub></span>),
}

anions = {
    // halides
    FLUORIDE: Ion(-1, <span>F</span>),
    CHLORIDE: Ion(-1, <span>Cl</span>),
    BROMIDE: Ion(-1, <span>Br</span>),
    IODIDE: Ion(-1, <span>I</span>),

    // chalcogens
    OXIDE: Ion(-2, <span>O</span>),
    SULFIDE: Ion(-2, <span>S</span>),
    SELENIDE: Ion(-2, <span>Se</span>),

    // pnictogens
    NITRIDE: Ion(-3, <span>N</span>),
    PHOSPHIDE: Ion(-3, <span>P</span>),

    // other elemental anions
    CARBIDE: Ion(-4, <span>C</span>),

    // polyatomic anions
    SULFATE: Ion(-2, <span>SO<sub>4</sub></span>),
    BISULFATE: Ion(-1, <span>HSO<sub>4</sub></span>),
    SULFITE: Ion(-2, <span>SO<sub>3</sub></span>),
    NITRATE: Ion(-1, <span>NO<sub>3</sub></span>),
    NITRITE: Ion(-1, <span>NO<sub>2</sub></span>),
    PHOSPHATE: Ion(-3, <span>PO<sub>4</sub></span>),
    BIPHOSPHATE: Ion(-2, <span>HPO<sub>4</sub></span>),
    PHOSPHITE: Ion(-3, <span>PO<sub>3</sub></span>),
    HYDROXIDE: Ion(-1, <span>OH</span>),
    PEROXIDE: Ion(-2, <span>O<sub>2</sub></span>),
    ACETATE: Ion(-1, <span>C<sub>2</sub>H<sub>3</sub>O<sub>2</sub></span>),
    PERCHLORATE: Ion(-1, <span>ClO<sub>4</sub></span>),
    CHLORATE: Ion(-1, <span>ClO<sub>3</sub></span>),
    CHLORITE: Ion(-1, <span>ClO<sub>2</sub></span>),
    HYPOCHLORITE: Ion(-1, <span>ClO</span>),
    CHROMATE: Ion(-2, <span>CrO<sub>4</sub></span>),
    DICHROMATE: Ion(-2, <span>Cr<sub>2</sub>O<sub>7</sub></span>),
    PERMANGANATE: Ion(-1, <span>MnO<sub>4</sub></span>),
    CYANIDE: Ion(-1, <span>CN</span>),
    CYANATE: Ion(-1, <span>CNO</span>),
    THIOCYANATE: Ion(-1, <span>SCN</span>),
    CARBONATE: Ion(-2, <span>CO<sub>3</sub></span>),
    BICARBONATE: Ion(-1, <span>HCO<sub>3</sub></span>),
    OXALATE: Ion(-2, <span>C<sub>2</sub>O<sub>4</sub></span>),
    THIOSULFATE: Ion(-2, <span>S<sub>2</sub>O<sub>3</sub></span>),
}

class Salt {
    constructor (cation, anion) {
        this.cation = cation;
        this.anion = anion;
    }

    isSoluble() {
        // exceptions
        if (this.cation == cations.SILVER && this.anion == anions.FLUORIDE) return true;

        // if cation is ammonium or alkali then soluble
        if (this.cation in [
            cations.AMMONIUM,
            cations.LITHIUM,
            cations.SODIUM,
            cations.POTASSIUM,
            cations.RUBIDIUM,
            cations.CESIUM,
            cations.FRANCIUM,
        ]) return true;

        // if anion is nitrate or acetate then soluble
        if (this.anion in [
            anions.NITRATE,
            anions.ACETATE,
        ]) return true;

        // if anion is halide (except fluoride) then soluble except with Ag, Pb(II), Hg2
        if (this.anion in [
            anions.CHLORIDE,
            anions.BROMIDE,
            anions.IODIDE
        ] && !(this.cation in [
            cations.SILVER,
            cations.LEAD2,
        ])) return true;

        // if anion is sulfate then soluble except with Ca, Sr, Ba, Pb(II)
        if (this.anion == anions.SULFATE && !(this.cation in [
            anions.CALCIUM,
            anions.STRONTIUM,
            anions.BARIUM,
            anions.LEAD2,
        ])) return true;

        // oxides are soluble if with Ca, Sr, Ba
        if (this.anion == anions.OXIDE && this.cation in [
            cations.CALCIUM,
            cations.STRONTIUM,
            cations.BARIUM,
        ]) return true;

        return false;
    }

    toString() {
        let lcm = lcm(this.cation.charge, Math.abs(this.anion.charge));
        let cation_count = lcm / this.cation.charge;
        let anion_count = lcm / Math.abs(this.anion.charge);
        
    }
}

function lcm(number1, number2) {
    let hcf;
    for (let i = 1; i <= number1 && i <= number2; i++) {
        if( number1 % i == 0 && number2 % i == 0) {
            hcf = i;
        }
    }
    return (number1 * number2) / hcf;
}