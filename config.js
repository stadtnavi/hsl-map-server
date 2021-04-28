const sourcesUrl = "hsl-map-server:8080/map/v1/";
const glyphsUrl = `file://${process.env.WORK}/node_modules/hsl-map-style/`;

module.exports = {
  "/map/v1/hb-parking-map": {
    "source": `hbparking://`,
    "headers": {
      "Cache-Control": "public,max-age=120"
    }
  },
  "/map/v1/cifs": {
    "source": `cifs://`,
    "headers": {
      "Cache-Control": "public,max-age=300"
    }
  },
  "/map/v1/regiorad-map": {
    "source": `otpcitybikes://`,
    "headers": {
      "Cache-Control": "public,max-age=600"
    }
  },
  "/map/v1/weather-stations": {
    "source": `weatherstations://`,
    "headers": {
      "Cache-Control": "public,max-age=120"
    }
  },
  "/map/v1/charging-stations": {
    "source": `chargingstations://`,
    "headers": {
      "Cache-Control": "public,max-age=120"
    }
  },
  "/map/v1/bike-parks": {
    "source": `bikeparks://${process.env.OTP_URL}`,
    "headers": {
      "Cache-Control": "public,max-age=3600"
    }
  },
}
