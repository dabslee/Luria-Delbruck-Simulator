class Ion {
    constructor (charge, symbol, polyatomic=false) {
        this.charge = charge;
        this.symbol = symbol;
        this.polyatomic = polyatomic;
    }
}

const cations = {
    // the alkali metals
    LITHIUM: new Ion(1, <span>Li</span>),
    SODIUM: new Ion(1, <span>Na</span>),
    POTASSIUM: new Ion(1, <span>K</span>),
    RUBIDIUM: new Ion(1, <span>Rb</span>),
    CESIUM: new Ion(1, <span>Cs</span>),
    FRANCIUM: new Ion(1, <span>Fr</span>),

    // the alkaline earth metals
    BERYLLIUM: new Ion(2, <span>Be</span>),
    MAGNESIUM: new Ion(2, <span>Mg</span>),
    CALCIUM: new Ion(2, <span>Ca</span>),
    STRONTIUM: new Ion(2, <span>Sr</span>),
    BARIUM: new Ion(2, <span>Ba</span>),
    RADIUM: new Ion(2, <span>Ra</span>),

    // 3d transition metals
    SCANDIUM3: new Ion(3, <span>Sc</span>),
    TITANIUM4: new Ion(4, <span>Ti</span>),
    VANADIUM2: new Ion(2, <span>V</span>),
    VANADIUM3: new Ion(3, <span>V</span>),
    VANADIUM4: new Ion(4, <span>V</span>),
    VANADIUM5: new Ion(5, <span>V</span>),
    CHROMIUM2: new Ion(2, <span>Cr</span>),
    CHROMIUM3: new Ion(3, <span>Cr</span>),
    CHROMIUM6: new Ion(6, <span>Cr</span>),
    MANGANESE2: new Ion(2, <span>Mn</span>),
    MANGANESE3: new Ion(3, <span>Mn</span>),
    MANGANESE4: new Ion(4, <span>Mn</span>),
    MANGANESE6: new Ion(6, <span>Mn</span>),
    MANGANESE7: new Ion(7, <span>Mn</span>),
    IRON2: new Ion(2, <span>Fe</span>),
    IRON3: new Ion(3, <span>Fe</span>),
    COBALT2: new Ion(2, <span>Co</span>),
    COBALT3: new Ion(3, <span>Co</span>),
    NICKEL2: new Ion(2, <span>Ni</span>),
    COPPER1: new Ion(1, <span>Cu</span>),
    COPPER2: new Ion(2, <span>Cu</span>),
    ZINC2: new Ion(2, <span>Zn</span>),

    // Other elemental cations
    ALUMINUM: new Ion(3, <span>Al</span>),
    SILVER: new Ion(1, <span>Ag</span>),
    LEAD2: new Ion(2, <span>Pb</span>),
    LEAD4: new Ion(4, <span>Pb</span>),

    // Polyatomic cations
    AMMONIUM: new Ion(1, <span>NH<sub>4</sub></span>, true),
    MERCURY1: new Ion(2, <span>Hg<sub>2</sub></span>, true),
}

const anions = {
    // halides
    FLUORIDE: new Ion(-1, <span>F</span>),
    CHLORIDE: new Ion(-1, <span>Cl</span>),
    BROMIDE: new Ion(-1, <span>Br</span>),
    IODIDE: new Ion(-1, <span>I</span>),

    // chalcogens
    OXIDE: new Ion(-2, <span>O</span>),
    SULFIDE: new Ion(-2, <span>S</span>),
    SELENIDE: new Ion(-2, <span>Se</span>),

    // pnictogens
    NITRIDE: new Ion(-3, <span>N</span>),
    PHOSPHIDE: new Ion(-3, <span>P</span>),

    // other elemental anions
    CARBIDE: new Ion(-4, <span>C</span>),

    // polyatomic anions
    SULFATE: new Ion(-2, <span>SO<sub>4</sub></span>, true),
    BISULFATE: new Ion(-1, <span>HSO<sub>4</sub></span>, true),
    SULFITE: new Ion(-2, <span>SO<sub>3</sub></span>, true),
    NITRATE: new Ion(-1, <span>NO<sub>3</sub></span>, true),
    NITRITE: new Ion(-1, <span>NO<sub>2</sub></span>, true),
    PHOSPHATE: new Ion(-3, <span>PO<sub>4</sub></span>, true),
    BIPHOSPHATE: new Ion(-2, <span>HPO<sub>4</sub></span>, true),
    PHOSPHITE: new Ion(-3, <span>PO<sub>3</sub></span>, true),
    HYDROXIDE: new Ion(-1, <span>OH</span>, true),
    PEROXIDE: new Ion(-2, <span>O<sub>2</sub></span>, true),
    ACETATE: new Ion(-1, <span>C<sub>2</sub>H<sub>3</sub>O<sub>2</sub></span>, true),
    PERCHLORATE: new Ion(-1, <span>ClO<sub>4</sub></span>, true),
    CHLORATE: new Ion(-1, <span>ClO<sub>3</sub></span>, true),
    CHLORITE: new Ion(-1, <span>ClO<sub>2</sub></span>, true),
    HYPOCHLORITE: new Ion(-1, <span>ClO</span>, true),
    CHROMATE: new Ion(-2, <span>CrO<sub>4</sub></span>, true),
    DICHROMATE: new Ion(-2, <span>Cr<sub>2</sub>O<sub>7</sub></span>, true),
    PERMANGANATE: new Ion(-1, <span>MnO<sub>4</sub></span>, true),
    CYANIDE: new Ion(-1, <span>CN</span>, true),
    CYANATE: new Ion(-1, <span>CNO</span>, true),
    THIOCYANATE: new Ion(-1, <span>SCN</span>, true),
    CARBONATE: new Ion(-2, <span>CO<sub>3</sub></span>, true),
    BICARBONATE: new Ion(-1, <span>HCO<sub>3</sub></span>, true),
    OXALATE: new Ion(-2, <span>C<sub>2</sub>O<sub>4</sub></span>, true),
    THIOSULFATE: new Ion(-2, <span>S<sub>2</sub>O<sub>3</sub></span>, true),
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
function randFromList(lst) {
    let length = Object.keys(lst).length;
    let index = Math.floor(Math.random()*length);
    return lst[Object.keys(lst)[index]];
}

class Salt {
    constructor (cation, anion) {
        this.cation = cation;
        this.anion = anion;
    }

    render() {
        let lcm_val = lcm(this.cation.charge, Math.abs(this.anion.charge));
        let cation_count = lcm_val / this.cation.charge;
        let anion_count = lcm_val / Math.abs(this.anion.charge);
        
        let cation_jsx = this.cation.symbol;
        if (cation_count > 1) {
            if (this.cation.polyatomic) cation_jsx = <span>({cation_jsx})</span>;
            cation_jsx = <span>{cation_jsx}<sub>{cation_count}</sub></span>;
        }

        let anion_jsx = this.anion.symbol;
        if (anion_count > 1) {
            if (this.anion.polyatomic) anion_jsx = <span>({anion_jsx})</span>;
            anion_jsx = <span>{anion_jsx}<sub>{anion_count}</sub></span>;
        }
        
        return (
            <span>{cation_jsx}{anion_jsx}</span>
        )
    }
}

function isSoluble(salt) {
    // exceptions
    if (salt.cation == cations.SILVER && salt.anion == anions.FLUORIDE) return true;

    // if cation is ammonium or alkali then soluble
    if ([
        cations.AMMONIUM,
        cations.LITHIUM,
        cations.SODIUM,
        cations.POTASSIUM,
        cations.RUBIDIUM,
        cations.CESIUM,
        cations.FRANCIUM,
    ].includes(salt.cation)) return true;

    // if anion is nitrate or acetate then soluble
    if ([
        anions.NITRATE,
        anions.ACETATE,
    ].includes(salt.anion)) return true;

    // if anion is halide (except fluoride) then soluble except with Ag, Pb(II), Hg2
    if ([
        anions.CHLORIDE,
        anions.BROMIDE,
        anions.IODIDE
    ].includes(salt.anion) && !([
        cations.SILVER,
        cations.LEAD2,
    ].includes(salt.cation))) return true;

    // if anion is sulfate then soluble except with Ca, Sr, Ba, Pb(II)
    if (salt.anion == anions.SULFATE && !([
        cations.CALCIUM,
        cations.STRONTIUM,
        cations.BARIUM,
        cations.LEAD2,
    ].includes(salt.cation))) return true;

    // oxides are soluble if with Ca, Sr, Ba
    if (salt.anion == anions.OXIDE && [
        cations.CALCIUM,
        cations.STRONTIUM,
        cations.BARIUM,
    ].includes(salt.cation)) return true;

    return false;
}