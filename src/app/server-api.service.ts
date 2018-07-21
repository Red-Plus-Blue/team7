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

    createForm(formSummary : FormSummary) : ServerResponse<FormSummary> {
        return { error : null, object : null };
    }

    readForm(id : number) : ServerResponse<Form> {
        return { error : null, object : null };
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
}
