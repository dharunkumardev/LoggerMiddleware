import { NextFunction, Request, Response } from 'express'

class Controller {
    Logger = async (req: Request, res: Response, next: NextFunction) => {
        let currentdate = new Date()
        let formatted_date = currentdate.getFullYear() + "-" +
            (currentdate.getMonth() + 1) + '-' + currentdate.getDate() +
            ' ' + currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds() +
            ':' + currentdate.getMilliseconds()
        let method = req.method;
        let url = req.url
        let status = res.statusCode
        let logger = `[${formatted_date}] ${method}: ${url} ${status}`;
        console.log(logger);
        next()
    }
}
const controller = new Controller();
export default controller
const Logger = controller.Logger
export { Logger }
