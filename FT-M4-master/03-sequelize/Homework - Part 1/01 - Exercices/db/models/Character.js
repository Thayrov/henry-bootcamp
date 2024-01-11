const {DataTypes} = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'Character',
    {
      code: {type: DataTypes.STRING(5), primaryKey: true},
      name: {type: DataTypes.STRING, unique: true},
      age: {type: DataTypes.INTEGER},
      race: {
        type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
        defaultValue: 'Other',
      },
      hp: {type: DataTypes.FLOAT, notNull: true},
      mana: {type: DataTypes.FLOAT, notNull: true},
    },
    {timestamps: false},
  );
};
