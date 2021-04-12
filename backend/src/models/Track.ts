import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinTable} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Type_Composition } from "../models/TypeComposition";

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
    
    @ManyToOne(() => Type_Composition, typeComposition => typeComposition.id)
    type_composition: Type_Composition;

}
