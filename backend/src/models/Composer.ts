import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { MusicalPeriod } from "../models/MusicalPeriod";
import { Track } from "../models/Track";

@Entity()
export class Composer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    cityBirth: string;

    @Column()
    countryBirth: string;

    @Column()
    dateBirth: Date;

    @Column()
    dateDeath: Date;

    @Column()
    musicalPeriodId: number;

    //aqui fica o periodo musical e nao o album ok ?
    @ManyToOne(() => MusicalPeriod, musicalPeriod => musicalPeriod.composer)
    musicalPeriod: MusicalPeriod;

    @ManyToMany(() => Track)
    @JoinTable()
    track: Track[];
}
