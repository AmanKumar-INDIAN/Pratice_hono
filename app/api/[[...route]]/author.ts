// authors.ts
import prisma from '@/prisma/db/db'
import { Hono } from 'hono'

const app = new Hono()
  .get('/', async (c) => {

    const data= await prisma.user.findMany({})

    return c.json({data})
  })
  .post('/', (c) => c.json('create an author', 201))
  .get('/:id', (c) => c.json(`get ${c.req.param('id')}`))

export default app