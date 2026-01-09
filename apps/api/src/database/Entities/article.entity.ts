import { Units } from "@repo/shared";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Articles')
export class Article {
    @PrimaryGeneratedColumn("uuid")
    Id: string;

    @Column()
    Name: string;

    @Column({nullable: true})
    Description?: string;

    @Column("decimal", { precision: 10, scale: 2 })
    Price: number;

    @Column({
        type:'enum',
        enum: Units,
        default: Units.PZ
    })
    Unit: Units;

    @Column()
    CreatedAt: Date;

    @Column()
    CreatedBy: string;

    @Column()
    UpdatedAt: Date;

    @Column()
    UpdatedBy: string;

    @Column({default: true})
    IsActive: boolean;
}