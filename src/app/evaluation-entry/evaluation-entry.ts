

export class EvaluationEntry {

    entryNumber             : number;
    weightPercentage        : number;
    rating                  : number;

    responsibilitySummary   : string;
    performanceSummary      : string;

    deleteCallback          : Function;

    constructor() {
        this.entryNumber            = 1;  
        this.weightPercentage       = 0.0;
        this.rating                 = 1;
        this.responsibilitySummary  = '';
        this.performanceSummary     = '';
        this.deleteCallback         = null;
    }
}