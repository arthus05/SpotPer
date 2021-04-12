import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Track } from "../models/Track";

@Entity()
export class Playlist {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    dateCreation: string;

    @Column()
    timeExecution: number;

    @Column()
    numberExecutions: number;

    @Column()
    dateLastExecution: Date;

    @ManyToMany(() => Track)
    @JoinTable()
    track: Track[];
}

