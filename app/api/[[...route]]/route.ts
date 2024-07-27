import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import authors from './author'
import books from './books'


const app = new Hono().basePath('/api')


const routes = app.route('/authors', authors).route('/books', books)
export const GET = handle(app)
export const POST = handle(app)

export type AppType = typeof routes