import { Request, Response } from 'express'


class Controller {
    find = async (req: Request, res: Response, next: any) => {
        res.json({
            status: true,
            message: "Successful"
        })
    }
    post = async (req: Request, res: Response, next: any) => {
        res.json({
            status: true,
            message: "Successful Created"
        })
    }
}

export default new Controller();