
import { RedemptionView } from './view/redemption-view'

class App {
  view:RedemptionView

  constructor () {
    this.view = new RedemptionView()
    this.view.initialMessage()
  }
}

export default new App()