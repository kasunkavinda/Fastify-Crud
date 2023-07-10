const fastify = require('fastify')({ logger: true })
const PORT = 5000

fastify.get('/', (request, reply) => {
    reply.send({ message: 'Hello, world!' });
});


fastify.register(require('./routes/routes'))


const start = async () => {
    try {
        await fastify.listen(PORT)
    } catch (error) {
        console.log('kasun', error)
        fastify.log.error(error)
        process.exit(1)
    }
}

start()