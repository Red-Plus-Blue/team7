import { Injectable }       from '@angular/core';
import { Form }             from './server-objects/form'
import { FormSummary }      from './server-objects/form-summary' 
import { FormState }        from './server-objects/form-state' 
import { ServerResponse }   from './server-objects/server-response'
import { User }             from './server-objects/user'

@Injectable({
    providedIn: 'root'
})
export class ServerApiService {

    constructor() { }

    getDepartmentList() : ServerResponse<String[]> {
        return {
            error : null,
            object : [
                "Example Department",
                "Demo Department",
                "Sample Department",
                "Possible Department"
            ]
        }
    }

    createForm(formSummary : FormSummary) : ServerResponse<FormSummary> {
        return { error : null, object : null };
    }

    readForm(id : number) : ServerResponse<Form> {
        return { 
            error   : null,
            object  : this.temp_stepPayForm()
        };
    }

    editForm(id : number, form : Form) : ServerResponse<Form> {
        return { error : null, object : null };
    }

    deleteForm(id : number) : ServerResponse<void> {
        return { error : null, object : null };
    }

    listForms() : ServerResponse<Form[]> {
        return { error : null, object : null };
    }

    submitForm(id : number) : ServerResponse<void> {
        return { error : null, object : null };
    }

    signForm(id : number, text : string) : ServerResponse<void> {
        return { error : null, object : null };
    }

    login(username : string, password : string) : ServerResponse<string> {
        return { error : null, object : null };
    }

    getLoggedInUser() : ServerResponse<User> {
        return { error : null, object : null };
    }

    temp_stepPayForm() : Form {
        return {
            summary : {
                id : 1,
                creator             : "Employee 1",
                creatorSAPNumber    : "123",
                employee            : "Employee 2",
                employeeSAPNumber   : "012",
                formType            : "step-pay",
                dateCreated         : "2018-01-01",
                formState : {
                    id              : "edit",
                    enabledRole     : "creator"
                }
            },
            formVersion : 1,
            sections    : [
                {
                    sectionType         : "employee_information",
                    sectionSubType      : null,
                    sectionVersion      : 1,
                    name                : "John Doe",
                    employeeSAPNumber   : "123456789",
                    department          : "Example Department",
                    title               : "Professional Employee",
                    division            : "Example division",
                    reportingPeriod     : "Qaurter 1",
                    reviewType          : "planning"
                },
                {
                    sectionType     : "responsibilities_and_goals",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    goals           : null
                },
                {
                    sectionType     : "core_values",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    ratings         : {
                        "teamwork"          : 1,
                        "integrity"         : 2,
                        "innovation"        : 3,
                        "professionalism"   : 1
                    }
                },
                {
                    sectionType     : "leadership_assessment",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    ratings         : {
                        "leadership_and_development"    : 1,
                        "strategic_thinking"            : 2,
                        "drives_excellence"             : 3,
                        "decision-making"               : 2,
                        "professional_development_plan" : 1
                    }
                },
                {
                    sectionType     : "professional_development_plan",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    goals           : null
                },
                {
                    sectionType     : "narrative_summary",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    summary         : "A summary of employee performance"
                },
                {
                    sectionType     : "comments",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    reviewerComments : "Comments from the reviewer",
                    employeeComments : "Comments from the employee"
                },
                {
                    sectionType     : "signatures",
                    sectionSubType  : null,
                    sectionVersion  : 1,
                    signatures      : null,
                    employeeAgrees  : false
                }
            ]
        } 
    }

    temp_appealForm() : Form {
        return {
            summary : {
                id : 1,
                creator             : "Employee 1",
                creatorSAPNumber    : "123",
                employee            : "Employee 2",
                employeeSAPNumber   : "012",
                formType            : "step-pay",
                dateCreated         : "2018-01-01",
                formState : {
                    id              : "edit",
                    enabledRole     : "creator"
                }
            },
            formVersion : 1,
            sections    : [
                {
                    sectionType         : "appeal_information",
                    sectionSubType      : null,
                    sectionVersion      : 1,
                    employeeName        : "John Doe",
                    employeeSAPNumber   : "1234567890",
                    department          : "Demo Department",
                    ratersName          : "Jane Doe",
                    ratersSAPNumber     : "0987654321"
                },
                {
                    sectionType         : "written_appeal",
                    sectionSubType      : null,
                    sectionVersion      : 1,
                    appealText          : "This is example written appeal text"
                }
            ]
        } 
    }
}
