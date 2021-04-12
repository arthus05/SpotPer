import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { RecordCompany } from "../models/RecordCompany";
import { Track } from "../models/Track";

@Entity()
export class Album {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @Column()
    datePurchase: Date;
    
    @Column()
    typePurchase: string;
    
    @Column()
    dateRecording: Date;
    
    @Column()
    costPurchase: number;

    @OneToMany(() => Track, track => track.album, {onDelete: "CASCADE"})
    track: Track[];

    @ManyToOne(() => RecordCompany, recordCompany => recordCompany.album)
    recordCompany: RecordCompany;
    
}