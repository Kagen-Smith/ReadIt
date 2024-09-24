import { DataTypes, Sequelize, Model, Optional } from "sequelize"; // Import Sequelize types
// import bcrypt from 'bcrypt'; // Uncomment if password hashing functionality is needed in the future

// Define the attributes for the Book model
interface BookAttributes {
  id: number; // Primary key
  title: string; // Title of the book
  author: string; // Author of the book
  genre: string; // Genre of the book
}

// Define creation attributes for the Book model, making 'id' optional
interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

// Define the Book model class
export class Book
  extends Model<BookAttributes, BookCreationAttributes>
  implements BookAttributes
{
  public id!: number; // Non-nullable property for the ID
  public title!: string; // Non-nullable property for the title
  public author!: string; // Non-nullable property for the author
  public genre!: string; // Non-nullable property for the genre

  public readonly createdAt!: Date; // Readonly property for created timestamp
  public readonly updatedAt!: Date; // Readonly property for updated timestamp

  // Method to set the genre of the book
  public async setGenre(genre: string) {
    this.genre = genre; // Update the genre
  }
}

// Factory function to initialize the Book model with the Sequelize instance
export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER, // Data type for ID
        autoIncrement: true, // Automatically increment the ID
        primaryKey: true, // Set ID as primary key
      },
      title: {
        type: DataTypes.STRING, // Data type for title
        allowNull: false, // Title cannot be null
      },
      author: {
        type: DataTypes.STRING, // Data type for author
        allowNull: false, // Author cannot be null
      },
      genre: {
        type: DataTypes.STRING, // Data type for genre
        allowNull: false, // Genre cannot be null
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      tableName: "books", // Specify the table name
    }
  );
  return Book; // Return the initialized Book model
}