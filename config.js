const sourcesUrl = "hsl-map-server:8080/map/v1/";
const glyphsUrl = `file://${process.env.WORK}/node_modules/hsl-map-style/`;

module.exports = {
  "/map/v1/stop-map": {
    "source": `otpstops://${process.env.OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  },
  "/map/v1/hb-parking-map": {
    "source": `hbparking://`,
    "headers": {
      "Cache-Control": "public,max-age=180"
    }
  },
  "/map/v1/roadworks-bw-map": {
    "source": `roadworksbw://`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  }
}
