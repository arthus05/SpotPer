import "reflect-metadata"; 
import { createConnection, getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Album } from "../models/Album";
// import { Record_Company } from "../models/RecordCompany"

export class AlbumController {
    private albumRepository = getRepository(Album)

    async all(req: Request, res: Response) {
        return this.albumRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.albumRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.albumRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const albumToRemove = await this.albumRepository.findOne(req.params.id)
        await this.albumRepository.remove(albumToRemove)
    }

}

// @PrimaryGeneratedColumn()
//     id: number;

//     @Column()
//     description: string;

//     @Column()
//     datePurchase: Date;

//     @Column()
//     typePurchase: string;

//     @Column()
//     dateRecording: Date;

//     @Column()
//     costPurchase: number;

//     @ManyToOne(() => RecordCompany, recordCompany => recordCompany.album)
//     recordCompany: RecordCompany;