import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { TypeComposition } from "../models/TypeComposition";
import { Album } from "./Album";

@Entity()
export class Track {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    time_execution: number;

    @Column()
    type_recording: string;

    @Column()
    number_track: number;

    @Column()
    description: string;

    @Column()
    albumId: number;

    @ManyToOne(() => Album, album => album.track)
    album: Album
    
    @ManyToOne(() => TypeComposition, typeComposition => typeComposition.id)
    type_composition: TypeComposition;

}
