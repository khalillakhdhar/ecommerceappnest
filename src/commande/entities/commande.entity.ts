/* eslint-disable prettier/prettier */

import { IsNumber, Min } from "class-validator";
import { Client } from "src/client/entities/client.entity";
import { Produit } from "src/produit/entities/produit.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Commande {
    @PrimaryGeneratedColumn()
id:number;
@ManyToOne(()=>Client,(client)=>client.commandes)
    client:Client;
@ManyToMany(()=>Produit)
@JoinTable()
produits:Produit[];
@IsNumber()
@Min(1)
@Column()
quantite:number;
}
