import { FormState } from './form-state' 

export interface FormSummary {
    id                  : number;
    creator             : String;
    creatorSAPNumber    : String;
    employee            : String;
    employeeSAPNumber   : String;
    formType            : String;
    dateCreated         : String;
    formState           : FormState;
}