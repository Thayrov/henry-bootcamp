const {Router} = require('express');
const {Ability} = require('../db');
const router = Router();

router.post('/', async (req, res) => {
  const {name, description, mana_cost} = req.body;

  if (!name || !description || !mana_cost) {
    return res.status(404).send('Falta enviar datos obligatorios');
  }
  try {
    const ability = await Ability.create({
      name,
      description,
      mana_cost,
    });
    return res.status(201).send(ability);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

router.put('/setCharacter', async (req, res) => {
  const {idAbility, codeCharacter} = req.body;

  try {
    // Primero, actualizamos la habilidad con el nuevo código de personaje
    const [updateCount] = await Ability.update(
      {CharacterCode: codeCharacter},
      {where: {id: idAbility}},
    );
    // Si no se actualizó ninguna fila, entonces la habilidad no existe o el id es incorrecto
    if (updateCount === 0) {
      return res.status(404).send('Habilidad no encontrada con el id proporcionado');
    }
    // recuperamos la habilidad actualizada para obtener los detalles solicitados
    const updatedAbility = await Ability.findOne({
      where: {id: idAbility},
      attributes: ['name', 'description', 'mana_cost', 'CharacterCode'],
    });

    // Si no se encuentra la habilidad actualizada, retornamos un error
    if (!updatedAbility) {
      return res.status(404).send('No se pudo recuperar la habilidad actualizada');
    }

    // Finalmente, devolvemos la habilidad actualizada con los campos solicitados
    return res.status(200).send(updatedAbility);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error interno del servidor');
  }
});

module.exports = router;
