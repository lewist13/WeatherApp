export default class CurrentLocation {
  constructor() {
    this.name = "Current Location"
    this._lat - null
    this._lon = null
    this.unit = "imperial"
  }

  getName() {
    return this._name
  }

  setName(name) {
    this._name = name
  }

  getLat() {
    return this._lat
  }

  setLat(lat) {
    this._lat = lat
  }

  getLon() {
    return this._lon
  }

  setLon(lon) {
    this._long = lon
  }

  getUnit() {
    return this._unit
  }

  setUnit(unit) {
    this._unit = unit
  }

  toggleUnit() {
    this._unit = this._unit === "imperial" ? "metric" : "imperial"
  }
}