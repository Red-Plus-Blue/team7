import { Injectable }       from '@angular/core';
import { Form }             from './server-objects/form';
import { FormSummary }      from './server-objects/form-summary';
import { FormState }        from './server-objects/form-state';
import { ServerResponse }   from './server-objects/server-response';
import { User }             from './server-objects/user';
import { HttpClient, HttpHeaders }       from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServerApiService {

    protected port : string = "8001";
    protected url : string = "http://localhost:" + this.port;

    protected authenticationEndpoint    : string = this.url + "/authentication";
    protected userMeEndpoint            : string = this.url + "/user/me";
    protected formListEndpoint          : string = this.url + "/form/list";
    protected formEndpoint              : string = this.url + "/form";

    protected token: string;
    protected user: User;
    protected form: Form;

    constructor(private http: HttpClient) { }

    setForm(form: Form) { this.form = form; }
    getForm() : Form { return this.form; }

    setToken(token: string) { this.token = token; }

    setUser(user: User) { this.user = user; }
    getUser() { return this.user; }

    getDepartmentList() : ServerResponse {
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

    createForm(formSummary : FormSummary) : ServerResponse {
        return { error : null, object : null };
    }

    readForm(id : number) : Observable<Object> {
        let headers = new HttpHeaders({
            'Authorization': 'Token ' + this.token
        });

        return this.http.get(this.formEndpoint + "?id=" + id, {
            headers: headers
        });
    }

    editForm(id : number, form : Form) : ServerResponse {
        return { error : null, object : null };
    }

    deleteForm(id : number) : ServerResponse {
        return { error : null, object : null };
    }

    listForms(filter: string) : Observable<Object> {
        let headers = new HttpHeaders({
            'Authorization': 'Token ' + this.token
        });

        return this.http.get(this.formListEndpoint + "?filter=" + filter, {
            headers: headers
        });
    }

    submitForm(id : number) : ServerResponse {
        return { error : null, object : null };
    }

    signForm(id : number, text : string) : ServerResponse {
        return { error : null, object : null };
    }

    login(username : string, password : string) : Observable<Object> {

        let headers = new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic ' + username + ':' + password
        });

        return this.http.get(this.authenticationEndpoint, {
            headers: headers
        });
    }

    getLoggedInUser() : Observable<Object> {

        let headers = new HttpHeaders({
            'Authorization': 'Token ' + this.token
        });

        return this.http.get(this.userMeEndpoint, {
            headers: headers
        });
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