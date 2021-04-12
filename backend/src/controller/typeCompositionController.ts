import "reflect-metadata"; 
import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { TypeComposition } from "../models/TypeComposition";

export class TypeCompositionController {
    private typeCompositionRepository = getRepository(TypeComposition)

    async all(req: Request, res: Response) {
        return this.typeCompositionRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.typeCompositionRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.typeCompositionRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const typeCompositionToRemove = await this.typeCompositionRepository.findOne(req.params.id)
        await this.typeCompositionRepository.remove(typeCompositionToRemove)
    }

}