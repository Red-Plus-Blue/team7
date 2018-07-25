import { ServerError } from './server-error' 

export interface ServerResponse<T> {
    object  : T;
    error   : ServerError;
}