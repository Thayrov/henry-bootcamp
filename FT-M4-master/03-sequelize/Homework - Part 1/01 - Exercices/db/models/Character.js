const {DataTypes} = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'Character',
    {
      code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        validate: {
          notHenry(value) {
            if (value.toLowerCase() === 'henry') {
              throw new Error('code: cannot be "HENRY"');
            }
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notIn: [['Henry', 'SoyHenry', 'Soy Henry']],
        },
      },
      age: {
        type: DataTypes.INTEGER,
        get() {
          const rawValue = this.getDataValue('age');
          return rawValue && (rawValue = `${rawValue} years old`);
        },
      },
      race: {
        type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
        defaultValue: 'Other',
      },
      hp: {type: DataTypes.FLOAT, allowNull: false},
      mana: {type: DataTypes.FLOAT, allowNull: false},
    },
    {timestamps: false},
  );
};
