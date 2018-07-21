import { Section } from './section'

export interface Form {
    summary         : String;
    formVersion     : number;
    sections        : Section[];   
}