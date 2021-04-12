import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { TypeComposition } from "../models/TypeComposition";
import { Album } from "./Album";

@Entity()
export class Track {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    timeExecution: number;

    @Column()
    typeRecording: string;

    @Column()
    numberTrack: number;

    @Column()
    description: string;

    @ManyToOne(() => Album, album => album.track)
    album: Album;
    
    @ManyToOne(() => TypeComposition, typeComposition => typeComposition.id)
    typeComposition: TypeComposition;

}
