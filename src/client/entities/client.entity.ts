/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
//import { Commande } from '../../commande/entities/commande.entity';
//import { Reclamation } from '../../reclamation/entities/reclamation.entity';
import { Reclamation } from 'src/reclamation/entities/reclamation.entity';
import { Commande } from 'src/commande/entities/commande.entity';

@Entity()
export class Client {
@PrimaryGeneratedColumn()
id:number;
@Column()

nom:string;
@Column()

prenom:string;
@Column()

adresses:string;
@Column()

email:string;
@Column()

mdp:string;
@Column()
tel:string;
//OneToMany
//commandes:Commande[];
@OneToMany(() => Reclamation,(reclamation)=>reclamation.emetteur)
reclamations:Reclamation[];
@OneToMany(() => Commande,(commande)=>commande.client)
commandes:Commande[];
}
