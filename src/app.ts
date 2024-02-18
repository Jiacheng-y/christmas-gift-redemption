// boiler plate

import * as express from 'express'
import { RedemptionView } from './view/redemption-view'

class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      const view:RedemptionView = new RedemptionView()
      view.initialMessage()
    })
    this.express.use('/', router)
  }
}

export default new App().express