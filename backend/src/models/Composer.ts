import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Musical_Period } from "../models/MusicalPeriod";

@Entity()
export class Composer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    city_birth: string;

    @Column()
    country_birth: string;

    @Column()
    date_birth: Date;

    @Column()
    date_death: Date;

    //aqui fica o periodo musical e nao o album ok ?
    @ManyToOne(() => Musical_Period, musical_period => musical_period.composer)
    musical_period: Musical_Period;
}
