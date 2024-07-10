
import { Express, Request, Response, Router } from 'express'
import commonRes from '../utils/commonRes'
import silentHandle from '../utils/silentHandle'

import userRouter from './user'
import authRouter from './auth'






// 路由配置接口
interface RouterConf {
  path: string,
  router: Router,
  meta?: unknown
}

// 路由配置
const routerConf: Array<RouterConf> = [{path: "/user", router: userRouter},{path: "/auth", router: authRouter}];

const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > .5 ? resolve('info...') : reject('error...')
    }, 500)
  })
}

function routes(app: Express) {
  // 根目录
  app.get('/', async (req: Request, res: Response) => {
    // commonRes(res, { word: 'Hello Shinp!!!' }, { type: 'success', message: '请求成功' }) 成功
    // commonRes.denied(res, null) 无权限
    // commonRes.error(res, null) 错误
    // const [e, result] = await silentHandle(getInfo)
    // e ? commonRes.error(res, null) : commonRes(res, { result })
    commonRes(res, { word: 'Hello Shinp!!!' }) // 成功
  })

  routerConf.forEach((conf) => app.use(conf.path, conf.router))
}




export default routes
