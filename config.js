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
      "Cache-Control": "public,max-age=120"
    }
  },
  "/map/v1/roadworks-bw-map": {
    "source": `roadworksbw://`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
  "/map/v1/regiorad-map": {
    "source": `otpcitybikes://${process.env.OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=43200"
    }
  }
}
