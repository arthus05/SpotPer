import "reflect-metadata";
import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Track } from "../models/Track";

export class TrackController {
    private trackRepository = getRepository(Track)

    async all(req: Request, res: Response) {
        return this.trackRepository.find()
    }

    async one(req: Request, res: Response) {
        return this.trackRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.trackRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const trackToRemove = await this.trackRepository.findOne(req.params.id)
        await this.trackRepository.remove(trackToRemove)
    }

    async findByAlbum(album: number) {
        const tracks = await this.trackRepository.find({ where: { album } });
        return tracks;
    }
}