import { Section } from './section'
import { FormSummary } from './form-summary';

export interface Form {
    summary         : FormSummary;
    formVersion     : number;
    sections        : Section[];   
}