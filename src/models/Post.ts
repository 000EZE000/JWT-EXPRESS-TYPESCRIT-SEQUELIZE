import { Table, Model, Column, DataType } from "sequelize-typescript";


@Table({
    timestamps: false,
    tableName: 'Post'
})

export  class Post extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string;
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    age!: string
}