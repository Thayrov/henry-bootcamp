const {DataTypes} = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'Ability',
    {
      name: {type: DataTypes.STRING, notNull: true},
      description: {type: DataTypes.TEXT},
      mana_cost: {type: DataTypes.FLOAT, notNull: true},
    },
    {indexes: [{name: 'compositeIndex', fields: ['name', 'mana_cost'], unique: true}]},
  );
};
