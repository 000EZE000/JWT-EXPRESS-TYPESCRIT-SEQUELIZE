import { Table, Model, Column, DataType, BeforeCreate, BeforeUpdate } from "sequelize-typescript";
import { newUser } from "../../type";
import bcryptjs from 'bcryptjs';

@Table({
    timestamps: false,
    tableName: 'User'
})

export class User extends Model<newUser> {

    @Column({
        type: DataType.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataType.UUIDV4
    })
    id!: number;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    email!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password!: string;

    async encryptPassword(password: string): Promise<string> {
        const salt = await bcryptjs.genSalt(10)
        return bcryptjs.hash(password, salt)
    }
    async validatePassword(password: string): Promise<boolean> {
        return await bcryptjs.compare(password, this.password)
    }
}
