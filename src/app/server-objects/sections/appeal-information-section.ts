import { Section } from '../section'

export interface AppealInformationSection extends Section {
    employeeName        : string;
    employeeSAPNumber   : string;
    department          : string;
    raterName           : string;
    raterSAPNumber      : string;
}