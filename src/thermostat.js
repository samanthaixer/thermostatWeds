function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.DEFAULT_MINIMUM = 10;
  this.DEFAULT_MAXIMUM = 32;
  this.POWER_SAVING_MAX = 25;
  this._temperature = this.DEFAULT_TEMP;
  this.powerSavingMode = true;
}

Thermostat.prototype = {
  constructor: Thermostat,

  up: function(change) {
    if(this.powerSavingMode){
      this._temperature + change > this.POWER_SAVING_MAX
        ? this._temperature = this.POWER_SAVING_MAX
        : this._temperature += change;
    } else {
      this._temperature + change > this.DEFAULT_MAXIMUM
        ? this._temperature = this.DEFAULT_MAXIMUM
        : this._temperature += change;
    }
  },

  down: function(change) {
    this._temperature -= change;
    if (this._temperature < this.DEFAULT_MINIMUM) return this._temperature = this.DEFAULT_MINIMUM;
    return this._temperature;
  },

  setting: function() {
    return this._temperature;
  },

  powerSavingOn: function () {
    this.powerSavingMode = true;
  },

  powerSavingOff: function() {
    this.powerSavingMode = false;
  },

  reset: function() {
    this._temperature = this.DEFAULT_TEMP;
  },

  energyUsage: function() {
    if (this._temperature < 18) {
      return "low-usage";
    }
  }

}
