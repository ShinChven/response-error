import {NextFunction, Request, Response} from "express";
import {ErrorSenderResponse, ErrorType} from "./declarations";

export default function () {
    return function (request: Request, response: Response, next: NextFunction) {
        /**
         * Response an error with it's http status.
         * @param error
         */
        (response as ErrorSenderResponse).sendError = function (error: ErrorType) {
            response.status(error.code).send(error);
        };
        next()
    }
}
