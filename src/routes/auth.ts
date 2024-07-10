import { Router } from 'express'

const router = Router()

const methods01 = (req: any, res: any, next: any) => {
  console.log('hello')
  next()
}

const methods02 = (req: any, res: any, next: any) => {
  console.log('world')
  res.json({ word: 'Hello Shinp!!!' })
  next()
}

router.get('/', methods01, methods02)

export default router
