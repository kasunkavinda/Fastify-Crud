const { getAllItems, getSingleItem, postSingleItem, putSingleItem, deleteSingleItem } = require('../controllers/items')

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
    },
    handler: getAllItems
}

// Options for get single item
const getSingleItemOpts = {
    schema: {
        response: {
            200: CommonItemProp
        }
    },
    handler: getSingleItem
}

// Options for post single item
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: ['name'],
            properties: {
                name: { type: 'string' }
            }
        },
        response: {
            201: {
                type: 'array',
                items: CommonItemProp
            }
        }
    },
    handler: postSingleItem
}

// Options for put single item
const putItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: CommonItemProp
            }
        }
    },
    handler: putSingleItem
}

// Options for delete single item
const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                item: CommonItemProp
            }
        }
    },
    handler: deleteSingleItem
}

const itemRouter = (fastify, options, done) => {

    // Get single item
    fastify.get('/items/:id', getSingleItemOpts)

    // Get all items
    fastify.get('/items', getItemOpts)

    // Post single item
    fastify.post('/item', postItemOpts)

    // Put single item
    fastify.put('/item/:id', putItemOpts)

    // Delete single item
    fastify.delete('/item/:id', deleteItemOpts)

    done()

}

module.exports = itemRouter