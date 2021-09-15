class Ion {
    constructor (charge, symbol, polyatomic=false) {
        this.charge = charge;
        this.symbol = symbol;
        this.polyatomic = polyatomic;
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
    AMMONIUM: Ion(1, <span>NH<sub>4</sub></span>, polyatomic=true),
    MERCURY1: Ion(2, <span>Hg<sub>2</sub></span>, polyatomic=true),
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
    SULFATE: Ion(-2, <span>SO<sub>4</sub></span>, polyatomic=true),
    BISULFATE: Ion(-1, <span>HSO<sub>4</sub></span>, polyatomic=true),
    SULFITE: Ion(-2, <span>SO<sub>3</sub></span>, polyatomic=true),
    NITRATE: Ion(-1, <span>NO<sub>3</sub></span>, polyatomic=true),
    NITRITE: Ion(-1, <span>NO<sub>2</sub></span>, polyatomic=true),
    PHOSPHATE: Ion(-3, <span>PO<sub>4</sub></span>, polyatomic=true),
    BIPHOSPHATE: Ion(-2, <span>HPO<sub>4</sub></span>, polyatomic=true),
    PHOSPHITE: Ion(-3, <span>PO<sub>3</sub></span>, polyatomic=true),
    HYDROXIDE: Ion(-1, <span>OH</span>, polyatomic=true),
    PEROXIDE: Ion(-2, <span>O<sub>2</sub></span>, polyatomic=true),
    ACETATE: Ion(-1, <span>C<sub>2</sub>H<sub>3</sub>O<sub>2</sub></span>, polyatomic=true),
    PERCHLORATE: Ion(-1, <span>ClO<sub>4</sub></span>, polyatomic=true),
    CHLORATE: Ion(-1, <span>ClO<sub>3</sub></span>, polyatomic=true),
    CHLORITE: Ion(-1, <span>ClO<sub>2</sub></span>, polyatomic=true),
    HYPOCHLORITE: Ion(-1, <span>ClO</span>, polyatomic=true),
    CHROMATE: Ion(-2, <span>CrO<sub>4</sub></span>, polyatomic=true),
    DICHROMATE: Ion(-2, <span>Cr<sub>2</sub>O<sub>7</sub></span>, polyatomic=true),
    PERMANGANATE: Ion(-1, <span>MnO<sub>4</sub></span>, polyatomic=true),
    CYANIDE: Ion(-1, <span>CN</span>, polyatomic=true),
    CYANATE: Ion(-1, <span>CNO</span>, polyatomic=true),
    THIOCYANATE: Ion(-1, <span>SCN</span>, polyatomic=true),
    CARBONATE: Ion(-2, <span>CO<sub>3</sub></span>, polyatomic=true),
    BICARBONATE: Ion(-1, <span>HCO<sub>3</sub></span>, polyatomic=true),
    OXALATE: Ion(-2, <span>C<sub>2</sub>O<sub>4</sub></span>, polyatomic=true),
    THIOSULFATE: Ion(-2, <span>S<sub>2</sub>O<sub>3</sub></span>, polyatomic=true),
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
    let index = Math.floor(Math.random()*lst.length);
    return lst[index];
}

class Salt extends React.Component {
    constructor (cation=null, anion=null) {
        if (cation != null && anion != null) {
            this.cation = cation;
            this.anion = anion;
            return;
        }
        this.cation = randFromList(cations);
        this.anion = randFromList(anions);
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

    render() {
        let lcm = lcm(this.cation.charge, Math.abs(this.anion.charge));
        let cation_count = lcm / this.cation.charge;
        let anion_count = lcm / Math.abs(this.anion.charge);
        
        let cation_jsx = this.cation.symbol;
        if (cation_count > 1) cation_jsx = <span>({this.cation.symbol})<sub>{cation_count}</sub></span>;
        let anion_count = this.anion.symbol;
        if (anion_count > 1) anion_jsx = <span>({this.anion.symbol})<sub>{anion_count}</sub></span>;
        
        return (
            <span>{cation_jsx}{anion_jsx}</span>
        )
    }
}