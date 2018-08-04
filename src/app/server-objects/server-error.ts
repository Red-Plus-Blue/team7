

export interface ServerError {
    errorMessage    : string;
    nestedError     : ServerError;
}