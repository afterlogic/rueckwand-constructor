import { generateUUID } from '../utils/common'

function CPanel() {
  this.id = generateUUID()
  this.width = 0
  this.height = 0
  this.minSize = [10, 10]
  this.maxSize = [300, 150]
  this.active = false
}

CPanel.prototype.populate = function () {}

export default CPanel
