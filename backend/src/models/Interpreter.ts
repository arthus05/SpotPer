import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Track } from "../models/Track";

@Entity()
export class Interpreter {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @ManyToMany(() => Track)
    @JoinTable()
    track: Track[];
}
