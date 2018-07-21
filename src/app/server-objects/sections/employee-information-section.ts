import { Section } from '../section'

export interface EmployeeInformationSection extends Section {
    name                : string;
    employeeSAPNumber   : string;
    title               : string;
    reportingPeriod     : string;
    department          : string;
    division            : string;
    reviewType          : string;
    isSupervisorOrAbove : boolean;
}