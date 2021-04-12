import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Album } from "../models/Album";

@Entity()
export class Record_Company {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    address_number: number;

    @Column()
    homepage: string;

    @OneToMany(() => Album, album => album.record_company)
    album: Album[];
}
