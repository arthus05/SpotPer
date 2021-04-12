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
    date_creation: string;

    @Column()
    time_execution: number;

    @Column()
    number_executions: number;

    @Column()
    date_last_execution: Date;

    @ManyToMany(() => Track)
    @JoinTable()
    track: Track[];
}

