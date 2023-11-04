/* eslint-disable prettier/prettier */

import {  IsNotEmpty } from "class-validator";
import { Client } from "src/client/entities/client.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reclamation {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    @IsNotEmpty()
    titre:string;
    @Column()
    @IsNotEmpty()
    text:string;
    @ManyToOne(()=>Client,(client)=>client.reclamations)
    emetteur:Client;
}
