const {Sequelize, Op} = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const db = new Sequelize('postgres://postgres:root@localhost:5432/henrydatabase', {
  logging: false,
});

modelCharacter(db);
modelAbility(db);
modelRole(db);

const {Character, Ability, Role} = db.models;

Role.hasMany(Character);
Character.belongsTo(Role);

Character.belongsToMany(Ability, {through: 'character_ability'});
Ability.belongsToMany(Character, {through: 'character_ability'});

Role.belongsToMany(Ability, {through: 'role_ability'});
Ability.belongsToMany(Role, {through: 'role_ability'});

module.exports = {
  ...db.models,
  db,
  Op,
};
