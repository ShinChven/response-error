import {Response} from "express";

export interface ErrorType {
    code: number;
    message?: number;
    data?: object;
}


export interface TypeFunction {
    (error: ErrorType | any): void
}

export interface ErrorSenderResponse extends Response {
    sendError: TypeFunction
}
