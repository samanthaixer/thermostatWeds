function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_MINIMUM = 10;
  this.temperature = this.DEFAULT_TEMP;
}

Thermostat.prototype.up = function(change) {
  return this.temperature += change;
}

Thermostat.prototype.down = function(change) {
  this.temperature -= change;
  if (this.temperature < this.DEFAULT_MINIMUM) {
    return this.temperature = this.DEFAULT_MINIMUM;
  } else {
    return this.temperature;
  }
}

Thermostat.prototype.setting = function() {
  return this.temperature;
}