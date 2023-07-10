let { dogs } = require('../Items')
const { v4: uuidv4 } = require('uuid')

const getAllItems = (req, reply) => {
    reply.send(dogs)
}

const getSingleItem = (req, reply) => {
    const { id } = req.params
    const newArr = dogs.find((item) => item.id === id)
    reply.send(newArr)
}

const postSingleItem = (req, reply) => {
    const { name } = req.body
    const newDogList = [...dogs, { id: uuidv4(), name }]
    console.log('kasun', newDogList)
    reply.code(201).send(newDogList)
}

const putSingleItem = (req, reply) => {
    const { id } = req.params
    const { name } = req.body

    const newDog = dogs.filter((item) => item.id === id);
    newDog.name = name
    newDog.id = id

    const newDogWithoutId = dogs.filter((item) => item.id !== id);

    const newDogArr = [...newDogWithoutId, newDog]
    console.log('kasun', newDogArr)
    reply.code(200).send(newDogArr)
}

const deleteSingleItem = (req, reply) => {
    const { id } = req.params;

    const newDogArr = dogs.filter((item) => item.id !== id)
    reply.code(200).send(newDogArr);

}


module.exports = { getAllItems, getSingleItem, postSingleItem, putSingleItem, deleteSingleItem }