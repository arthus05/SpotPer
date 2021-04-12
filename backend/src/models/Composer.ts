import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { MusicalPeriod } from "../models/MusicalPeriod";

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
    dateBeath: Date;

    //aqui fica o periodo musical e nao o album ok ?
    @ManyToOne(() => MusicalPeriod, musicalPeriod => musicalPeriod.composer)
    musicalPeriod: MusicalPeriod;
}
