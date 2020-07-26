// Creating Idea model
const Moment = require("moment");

module.exports = function (sequelize, DataTypes) {
  const Idea = sequelize.define("idea", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "private",
      enum: ["public", "private"],
    },
  });
  Idea.associate = function (models) {
    Idea.belongsTo(models.user);
  };
  return Idea;
};
