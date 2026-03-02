import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tenants')
export class Tenant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  issuer: string;

  @Column()
  name: string;

  @Column({ default: 'active' })
  status: 'active' | 'disabled';
}