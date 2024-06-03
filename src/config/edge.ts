import { Edge } from 'edge.js'

const edge = Edge.create({
	cache: process.env.NODE_ENV === 'production'
})

edge.mount(new URL('../views/', import.meta.url))

export default edge
