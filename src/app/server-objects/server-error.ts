

export interface ServerError {

    type            : String;
    message         : String;
    nextedErrors    : ServerError[]

}