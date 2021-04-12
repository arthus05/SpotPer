import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Track } from "../models/Track"

@Entity()
export class Type_Composition {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @OneToMany(() => Track, track => track.type_composition)
    type_composition: Track[];

}