import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";
import { Album } from "../models/Album";

@Entity()
export class RecordCompany {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    addressNumber: number;

    @Column()
    homepage: string;

    @OneToMany(() => Album, album => album.recordCompany)
    album: Album[];
}
