export function generateUUID () {
  if (window.crypto && window.crypto.getRandomValues) {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

export function get2xImageData (imageElement) {
  const canvas = document.createElement("canvas")
  const ctx = canvas.getContext("2d")
  
  if (imageElement instanceof HTMLImageElement) {
    canvas.width = imageElement.width * 2
    canvas.height = imageElement.height
    ctx.drawImage(imageElement, 0, 0)
    ctx.scale(-1, 1)
    // ctx.save()
    ctx.drawImage(imageElement, -canvas.width, 0)
    // ctx.restore()
  }

  return canvas.toDataURL()
}