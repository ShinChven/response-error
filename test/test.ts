import express, {NextFunction, Request, Response} from 'express';
import sendMiddleware from '../src';
import {ErrorSenderResponse} from "../src/declarations";

const app = express();

app.use(sendMiddleware());
app.use('/hello', function (res: Request, resp: Response, next: NextFunction) {
    (resp as ErrorSenderResponse).sendError({code: 404, message: 'not found'});
})

app.listen(3000);
