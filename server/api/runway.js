const downloadFile = require("../helpers/downloadData.js");
const metarParser = require('aewx-metar-parser');

const createMetarUrl = (icao) => `https://aviationweather.gov/cgi-bin/data/metar.php?ids=${icao}`;

const createAirportUrl = (icao) =>
  `https://airportdb.io/api/v1/airport/${icao}?apiToken=${process.env.AIRPORTDB_API_TOKEN}`;

const isNumber = (value) => {
  return typeof value === "number" && !isNaN(value);
};

const isString = (value) => {
  return typeof value === "string" && value.length;
};

const runwayAPI = async (req, res) => {
  try {
    const { icao } = req.params;

    const airportUrl = createAirportUrl(icao);
    const airportDataRaw = await downloadFile(airportUrl);
    const airportData = JSON.parse(airportDataRaw);

    if (!airportData.ident) {
      return res.json({
        code: 2,
        error: `Can't find airport ${icao.toUpperCase()} data. Try to search a nearest bigger airport`,
      });
    }
    if (!airportData.runways || !airportData.runways.length) {
      return res.json({
        code: 3,
        error: `We have an invalid airport runways data, so can't display it. Sorry. Try other nearest airport`,
      });
    }

    let station = {
      icao_code: airportData.icao_code,
      distance: 0,
    };
    if (
      airportData.station &&
      airportData.station.icao_code !== airportData.icao_code
    ) {
      station = airportData.station;
    }

    const runways = airportData.runways.map((runway) => {
      return {
        width_ft: parseFloat(runway.width_ft),
        length_ft: parseFloat(runway.length_ft),
        le_ident: runway.le_ident,
        he_ident: runway.he_ident,
        he_latitude_deg: parseFloat(runway.he_latitude_deg),
        he_longitude_deg: parseFloat(runway.he_longitude_deg),
        he_heading_degT: parseFloat(runway.he_heading_degT),
        le_ils: runway.le_ils,
        he_ils: runway.he_ils,
      };
    });

    const validRunways = runways.filter((runway) => {
      return (
        isNumber(runway.width_ft) &&
        runway.width_ft > 0 &&
        isNumber(runway.length_ft) &&
        runway.length_ft > 0 &&
        isString(runway.le_ident) &&
        isString(runway.he_ident) &&
        isNumber(runway.he_latitude_deg) &&
        isNumber(runway.he_longitude_deg) &&
        isNumber(runway.he_heading_degT)
      );
    });

    if (!validRunways.length) {
      return res.json({
        code: 4,
        error: `We have an invalid airport runways data, so can't display it. Sorry. Try other nearest airport`,
      });
    }

    const metarUrl = createMetarUrl(station.icao_code);

    const metar = await downloadFile(metarUrl);

    if (!metar.trim()) {
      return res.json({
        code: 1,
        error: `Can't find airport ${icao.toUpperCase()} metar data. Try to search nearest a bigger airport`,
      });
    }

    const metarData = metarParser(metar.trim());

    const rawMetar = metar;
    const wind_direction = metarData.wind.degrees_from === 0 && metarData.wind.degrees_to === 359 ? 'VRB' : metarData.wind.degrees;
    const wind_speed = metarData.wind.speed_kts;
    const time = metarData.observed;

    res.json({
      name: airportData.name,
      metar: rawMetar,
      runways: validRunways,
      wind_direction,
      wind_speed,
      icao: icao.toUpperCase(),
      station,
      time,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal server error");
  }
};

module.exports = runwayAPI;
