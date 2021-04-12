import "reflect-metadata"; 
import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Interpreter } from "../models/Interpreter";

export class InterpreterController {
    private interpreterRepository = getRepository(Interpreter)

    async all(req: Request, res: Response) {
        return this.interpreterRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.interpreterRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.interpreterRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const interpreterToRemove = await this.interpreterRepository.findOne(req.params.id)
        await this.interpreterRepository.remove(interpreterToRemove)
    }

}