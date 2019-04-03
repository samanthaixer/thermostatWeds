function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.up = function(change) {
  return this.temperature += change;
}

Thermostat.prototype.down = function(change) {
  return this.temperature -= change;
}
