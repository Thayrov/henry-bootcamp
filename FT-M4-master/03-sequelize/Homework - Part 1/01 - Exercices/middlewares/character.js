const {Router} = require('express');
const {Op, Character, Role} = require('../db');
const router = Router();

router.post('/', async (req, res) => {
  const {code, name, hp, mana, age, race} = req.body;

  if (!code && !name && !hp && !mana && !age && !race) {
    return res.status(404).send('Falta enviar datos obligatorios');
  }
  if (!code || !name || !hp || !mana || !age || !race) {
    return res.status(404).send('Error en alguno de los datos provistos');
  }

  try {
    const character = await Character.create({
      code,
      name,
      hp,
      mana,
      age,
      race,
    });

    return res.status(201).send(character);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.get('/', async (req, res) => {
  const {race, age} = req.query;
  try {
    let whereObj = {};
    if (age && race) {
      whereObj.race = race;
      whereObj.age = age;
    }
    if (race) {
      whereObj.race = race;
    }
    if (age) {
      whereObj.age = age;
    }
    let characters = await Character.findAll({where: whereObj});
    return res.status(200).send(characters);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.get('/:code', async (req, res) => {
  const {code} = req.params;
  try {
    const character = await Character.findOne({where: {code}});
    if (!character) {
      return res.status(404).send(`El código ${code} no corresponde a un personaje existente`);
    }
    return res.status(200).send(character);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.put('/:attribute', async (req, res) => {
  const {value} = req.query;
  const {attribute} = req.params;

  try {
    await Character.update({[attribute]: value}, {where: {[attribute]: null}});
    return res.status(200).send('Personajes actualizados');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.put('/addAbilities', async (req, res) => {
  const {codeCharacter, abilities} = req.body;
  try {
    await Character.update({abilities}, {where: {code: codeCharacter}});
    const updatedCharacter = await Character.findOne({where: {code: codeCharacter}});
    return res.status(200).send(updatedCharacter);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.get('/roles', async (req, res) => {
  const {code} = req.params;
  try {
    const character = await Character.findOne({where: {code}});
    const roles = await Role.findAll({where: {CharacterCode: code}});
    const characterWithRoles = {
      ...character,
      Roles: roles,
    };
    return res.status(200).send(characterWithRoles);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
