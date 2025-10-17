import { DataTypes } from "sequelize";
import { sequelize } from "../database/index.js";

export const Project = sequelize.define("Project", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: true
});
