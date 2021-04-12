import "reflect-metadata"; 
import { getRepository } from "typeorm";
import { Request, Response } from 'express';
import { Playlist } from "../models/Playlist";

export class PlaylistController {
    private playlistRepository = getRepository(Playlist)

    async all(req: Request, res: Response) {
        return this.playlistRepository.find()
    }
    
    async one(req: Request, res: Response) {
        return this.playlistRepository.findOne(req.params.id)
    }

    async save(req: Request, res: Response) {
        return this.playlistRepository.save(req.body)
    }

    async remove(req: Request, res: Response) {
        const playlistToRemove = await this.playlistRepository.findOne(req.params.id)
        await this.playlistRepository.remove(playlistToRemove)
    }

}