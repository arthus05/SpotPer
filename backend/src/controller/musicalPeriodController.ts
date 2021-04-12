import "reflect-metadata"; 
import { createConnection, getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Musical_Period } from "../models/MusicalPeriod";

export class MusicalPeriodController {
    private musicalPeriodRepository = getRepository(Musical_Period)

    async all(req: Request, res: Response) {
        return this.musicalPeriodRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.musicalPeriodRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.musicalPeriodRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const musicalPeriodToRemove = await this.musicalPeriodRepository.findOne(req.params.id)
        await this.musicalPeriodRepository.remove(musicalPeriodToRemove)
    }

}