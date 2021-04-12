import "reflect-metadata"; 
import { createConnection, getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Composer } from "../models/Composer"

export class ComposerController {
    private composerRepository = getRepository(Composer)

    async all(req: Request, res: Response) {
        return this.composerRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.composerRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.composerRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const composerToRemove = await this.composerRepository.findOne(req.params.id)
        await this.composerRepository.remove(composerToRemove)
    }

}