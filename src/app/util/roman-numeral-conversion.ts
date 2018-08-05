

export class RomanNumeralConverter {

    static getRomanNumerals(num : number): string {
        let romanNumerals = "";

        for(let i = 0; i < num; i++) {
            romanNumerals += "I";
        }

        romanNumerals.replace("IIIII", "V");
        romanNumerals.replace("IIII", "IV");
        romanNumerals.replace("VV", "X");

        return romanNumerals;
    }

}