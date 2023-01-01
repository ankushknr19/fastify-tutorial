import fastify from 'fastify'

const server = fastify()

server.get('/', async (_req, _res) => {
	return 'hello world'
})

server.listen({ port: 8000 }, (err, address) => {
	if (err) {
		console.log(err)
		process.exit(1)
	}
	console.log(`server is listening at ${address}`)
})
