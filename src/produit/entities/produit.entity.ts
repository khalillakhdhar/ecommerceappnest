/* eslint-disable prettier/prettier */

import { IsString, IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produit {
@PrimaryGeneratedColumn()
id:number;
@Column()
@IsString()
@IsNotEmpty()
titre:string;
@Column()

@IsNotEmpty()
description:string;
@Column()

@IsNotEmpty()
photo:string;
@Column('decimal',{precision:10,scale:2})
@IsNumber()
prix:number;


}
