const {DataTypes} = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'Ability',
    {
      name: {type: DataTypes.STRING, allowNull: false},
      description: {type: DataTypes.TEXT},
      mana_cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {min: 10.0, max: 250.0},
      },
      summary: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.name} (${this.mana_cost} points of mana) - Description: ${this.description}`;
        },
        set(value) {
          throw new Error('Do not try to set the `summary` value!');
        },
      },
    },
    {indexes: [{name: 'compositeIndex', fields: ['name', 'mana_cost'], unique: true}]},
  );
};
