import { ServerError } from './server-error' 

export interface ServerResponse {
    object  : any;
    error   : ServerError;
}