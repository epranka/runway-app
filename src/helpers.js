export const toRad = (degrees) => {
  var pi = Math.PI;
  return degrees * (pi / 180);
};

const EARTH_RADIUS = 6371; //km
const KM_TO_FT = 3280.8399;

export const latLngToFt = (lat, lng) => {
  const yKm = 2 * Math.PI * EARTH_RADIUS * (lat / 360);
  const xKm = 2 * Math.PI * EARTH_RADIUS * (lng / 360);
  const xFt = xKm * KM_TO_FT;
  const yFt = yKm * KM_TO_FT;
  return { x: xFt, y: -yFt };
};

export const fitRectIntoBounds = (rect, bounds) => {
  var rectRatio = rect.width / rect.height;
  var boundsRatio = bounds.width / bounds.height;

  var newDimensions = {};

  // Rect is more landscape than bounds - fit to width
  if (rectRatio > boundsRatio) {
    newDimensions.width = bounds.width;
    newDimensions.height = rect.height * (bounds.width / rect.width);
  }
  // Rect is more portrait than bounds - fit to height
  else {
    newDimensions.width = rect.width * (bounds.height / rect.height);
    newDimensions.height = bounds.height;
  }

  return newDimensions;
};

export const ucfirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
