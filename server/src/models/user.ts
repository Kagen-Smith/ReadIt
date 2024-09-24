import { DataTypes, Sequelize, Model, Optional } from "sequelize"; // Import necessary Sequelize components
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

// Define the attributes for the User model
interface UserAttributes {
  id: number; // Primary key
  username: string; // User's username
  email: string; // User's email
  password: string; // User's hashed password
}

// Define creation attributes for the User model, making 'id' optional
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// Define the User model class
export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number; // Non-nullable property for the ID
  public username!: string; // Non-nullable property for the username
  public email!: string; // Non-nullable property for the email
  public password!: string; // Non-nullable property for the password

  public readonly createdAt!: Date; // Readonly property for created timestamp
  public readonly updatedAt!: Date; // Readonly property for updated timestamp

  // Method to set the password by hashing it
  public async setPasswort(password: string) {
    const saltRounds = 10; // Number of salt rounds for hashing
    this.password = await bcrypt.hash(password, saltRounds); // Hash the password
  }
}

// Factory function to initialize the User model with the Sequelize instance
export function UserFactory(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER, // Data type for ID
        autoIncrement: true, // Automatically increment the ID
        primaryKey: true, // Set ID as primary key
      },
      username: {
        type: DataTypes.STRING, // Data type for username
        allowNull: false, // Username cannot be null
      },
      email: {
        type: DataTypes.STRING, // Data type for email
        allowNull: false, // Email cannot be null
      },
      password: {
        type: DataTypes.STRING, // Data type for password
        allowNull: false, // Password cannot be null
      },
    },
    {
      sequelize, // Pass the Sequelize instance
      tableName: "users", // Specify the table name
      hooks: {
        beforeCreate: async (user: User) => {
          await user.setPasswort(user.password); // Hash password before creating a user
        },
        beforeUpdate: async (user: User) => {
          await user.setPasswort(user.password); // Hash password before updating a user
        },
      },
    }
  );
  return User; // Return the initialized User model
}