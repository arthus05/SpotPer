import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { Request, Response } from 'express'
import { RecordCompany } from "../models/RecordCompany";

export class RecordCompanyController {
    private recordCompanyRepository = getRepository(RecordCompany)

    async all(req: Request, res: Response) {
        return this.recordCompanyRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.recordCompanyRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.recordCompanyRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const recordCompanyToRemove = await this.recordCompanyRepository.findOne(req.params.id)
        await this.recordCompanyRepository.remove(recordCompanyToRemove)
        return "RecordCompany deleted successfully"
    }

}


// @PrimaryGeneratedColumn()
// id: number;

// @Column()
// name: string;

// @Column()
// phone: string;

// @Column()
// address: string;

// @Column()
// addressNumber: number;

// @Column()
// homepage: string;

// @OneToMany(() => Album, album => album.recordCompany)
// album: Album[];