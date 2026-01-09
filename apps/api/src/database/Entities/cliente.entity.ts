import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "@repo/shared";

@Entity('Users')
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    IdUtente: string;
    
    @Column()
    Nome: string;
    
    @Column()
    Cognome: string;
    
    @Column({ unique: true })
    Email: string;
    
    @Column({ nullable: true })
    Telefono?: string;
    
    @Column()
    PasswordHash: string;
    
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    @Column()
    CreatedAt: Date;

    @Column({default: false})
    Verified: boolean;
}