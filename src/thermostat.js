function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_MINIMUM = 10;
  this.DEFAULT_MAXIMUM = 32;
  this.POWER_SAVING_MAX = 25;
  this._temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype.up = function(change) {
  this._temperature += change;
  if(this.powerSavingMode){
    if(this._temperature > this.POWER_SAVING_MAX) return this._temperature = this.POWER_SAVING_MAX;
    return this._temperature;
  } else {
    if (this._temperature > this.DEFAULT_MAXIMUM) {
      return this._temperature = this.DEFAULT_MAXIMUM;
    } else {
      return this._temperature;
    }
  }
}

Thermostat.prototype.down = function(change) {
  this._temperature -= change;
  if (this._temperature < this.DEFAULT_MINIMUM) return this._temperature = this.DEFAULT_MINIMUM;
  return this._temperature;
}

Thermostat.prototype.setting = function() {
  return this._temperature;
}

Thermostat.prototype.powerSavingOn = function () {
  this.powerSavingMode = true;
}

Thermostat.prototype.powerSavingOff = function() {
  this.powerSavingMode = false
}