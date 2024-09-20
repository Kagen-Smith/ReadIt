import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import bcrypt from "bcrypt";

interface ReviewAttributes {
    id: number;
    title: string;
    content: string;
    rating: number;
    assignedUserId: number;
    assignedBookId: number;
}

interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

export class Review extends Model<ReviewAttributes, ReviewCreationAttributes> implements ReviewAttributes {
    public id!: number;
    public title!: string;
    public content!: string;
    public rating!: number;
    public assignedUserId!: number;
    public assignedBookId!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    public async setRating(rating: number) {
        this.rating = rating;
    }
}

export function ReviewFactory(sequelize: Sequelize): typeof Review {
    Review.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            assignedUserId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            assignedBookId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            tableName: "reviews",
            hooks: {
                beforeCreate: async (review: Review) => {
                    await review.setRating(review.rating);
                },
                beforeUpdate: async (review: Review) => {
                    await review.setRating(review.rating);
                },
            },
        }
    );
    return Review;
}