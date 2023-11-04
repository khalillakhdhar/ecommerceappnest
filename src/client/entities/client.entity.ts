/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
//import { Commande } from '../../commande/entities/commande.entity';
//import { Reclamation } from '../../reclamation/entities/reclamation.entity';
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { Reclamation } from 'src/reclamation/entities/reclamation.entity';
import { Commande } from 'src/commande/entities/commande.entity';

@Entity()
export class Client {
@PrimaryGeneratedColumn()
id:number;
@Column()
@IsString()
@IsNotEmpty()
nom:string;
@Column()
@IsString()
@IsNotEmpty()
prenom:string;
@Column()
@IsString()
@IsNotEmpty()
adresses:string;
@Column()
@IsEmail()
@IsNotEmpty()
email:string;
@Column()
@IsString()
@IsNotEmpty()
mdp:string;
@Column()
@IsPhoneNumber('FR',{message:"Veuillez saisir un numéro valide"})
tel:string;
//OneToMany
//commandes:Commande[];
@OneToMany(() => Reclamation,(reclamation)=>reclamation.emetteur)
reclamations:Reclamation[];
@OneToMany(() => Commande,(commande)=>commande.client)
commandes:Commande[];
}
