import { DataTypes, Sequelize, Model, Optional } from "sequelize";
// import bcrypt from 'bcrypt';

interface BookAttributes {
  id: number;
  title: string;
  author: string;
  genre: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

export class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number;
  public title!: string;
  public author!: string;
  public genre!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async setGenre(genre: string) {
    this.genre = genre;
  }
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
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
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "books",
    }
  );
  return Book;
}
