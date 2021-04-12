import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Composer } from "../models/Composer"

@Entity()
export class Musical_Period {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    time_start: Date;

    @Column()
    time_end: Date;

    @OneToMany(() => Composer, composer => composer.musical_period)
    composer: Composer[];

}
