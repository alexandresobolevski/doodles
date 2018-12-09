const QRCode = require('qrcode')

// With async/await
const generateQR = async text => {
  try {
    const url = await QRCode.toDataURL(text)
    return url
  } catch (err) {
    console.error(err)

  }
}

const url = generateQR('this is a test');
