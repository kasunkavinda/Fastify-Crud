const { dogs } = require('../Items')

// Item schema
const CommonItemProp = {
    type: 'object',
    properties: {
        id: { type: 'string' },
        name: { type: 'string' }
    }
}

// Options for get all items
const getItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: CommonItemProp
            }
        }
    }
}

// Options for get single item
const getSingleItemOpts = {
    schema: {
        response: {
            200: CommonItemProp
        }
    }
}

const itemRouter = (fastify, options, done) => {

    // Get single item
    fastify.get('/items/:id', getSingleItemOpts, (req, reply) => {
        console.log('kasun inside method')
        const { id } = req.params

        const newArr = dogs.find((item) => item.id === id)
        console.log('kasun', newArr)
        reply.send(newArr)
    })

    // Get all items
    fastify.get('/items', getItemOpts, (req, reply) => {
        console.log('first', dogs)
        reply.send(dogs)
    })

    done()

}

module.exports = itemRouter