module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define(
    "todo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return todo;
};
