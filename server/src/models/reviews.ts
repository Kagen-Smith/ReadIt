import { DataTypes, Sequelize, Model, Optional } from "sequelize"; // Import necessary Sequelize components

// Define the attributes for the Review model
interface ReviewAttributes {
  id: number; // Primary key
  title: string; // Title of the review
  content: string; // Content of the review
  rating: number; // Rating given in the review
  assignedUserId: number; // ID of the user who created the review
  assignedBookId: number; // ID of the book being reviewed
}

// Define creation attributes for the Review model, making 'id' optional
interface ReviewCreationAttributes extends Optional<ReviewAttributes, "id"> {}

// Define the Review model class
export class Review
  extends Model<ReviewAttributes, ReviewCreationAttributes>
  implements ReviewAttributes
{
  public id!: number; // Non-nullable property for the ID
  public title!: string; // Non-nullable property for the review title
  public content!: string; // Non-nullable property for the review content
  public rating!: number; // Non-nullable property for the review rating
  public assignedUserId!: number; // Non-nullable property for assigned user ID
  public assignedBookId!: number; // Non-nullable property for assigned book ID

  public readonly createdAt!: Date; // Readonly property for created timestamp
  public readonly updatedAt!: Date; // Readonly property for updated timestamp

  // Method to set the rating of the review
  public async setRating(rating: number) {
    this.rating = rating; // Update the rating
  }
}

// Factory function to initialize the Review model with the Sequelize instance
export function ReviewFactory(sequelize: Sequelize): typeof Review {
  Review.init(
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
      content: {
        type: DataTypes.STRING, // Data type for content
        allowNull: false, // Content cannot be null
      },
      rating: {
        type: DataTypes.INTEGER, // Data type for rating
        allowNull: false, // Rating cannot be null
      },
      assignedUserId: {
        type: DataTypes.INTEGER, // Data type for assigned user ID
        allowNull: false, // User ID cannot be null
      },
      assignedBookId: {
        type: DataTypes.INTEGER, // Data type for assigned book ID
        allowNull: false, // Book ID cannot be null
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      tableName: "reviews", // Specify the table name
      hooks: {
        beforeCreate: async (review: Review) => {
          await review.setRating(review.rating); // Hook to set rating before creation
        },
        beforeUpdate: async (review: Review) => {
          await review.setRating(review.rating); // Hook to set rating before update
        },
      },
    }
  );
  return Review; // Return the initialized Review model
}