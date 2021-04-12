import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Composer } from "../models/Composer"

@Entity()
export class MusicalPeriod {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    timeStart: Date;

    @Column()
    timeEnd: Date;

    @OneToMany(() => Composer, composer => composer.musicalPeriod)
    composer: Composer[];

}
