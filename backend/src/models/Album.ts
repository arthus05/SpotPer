import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Record_Company } from "../models/RecordCompany";

@Entity()
export class Album {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @Column()
    date_purchase: Date;

    @Column()
    type_purchase: string;

    @Column()
    date_recording: Date;

    @Column()
    cost_purchase: number;

    @ManyToOne(() => Record_Company, record_company => record_company.album)
    record_company: Record_Company;
    
}