import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'varchar',
        width: 100,
        unique: true,
    })
    username: string;

    @Column('text')
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    toResponseObject(showToken : boolean = true) {
        const {id, created, username, token } = this;
        const responseObject = { id, created, username, token};
        if (showToken) responseObject.token = token;

        return responseObject;
    }

    async comparePassword(password : string) {
        return await bcrypt.compare(password, this.password);
    }

    private get token() {
        const { id, username } = this;
        return jwt.sign({
            id, username
        }, 'test', {expiresIn: '7d'}
        )
    }

}