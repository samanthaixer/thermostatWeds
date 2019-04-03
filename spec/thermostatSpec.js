describe("Thermostat", function(){
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("starts at default temperature", function(){
    expect(thermostat.setting()).toEqual(thermostat.DEFAULT_TEMP);
  });

  describe("user wants to increase temperature", function() {

    it("increases the temperature by 1 degree", function() {
      thermostat.up(1);
      expect(thermostat.setting()).toEqual(thermostat.DEFAULT_TEMP + 1);
    });
  });

  it("decreases the temperature by 2 degrees", function() {
    expect(thermostat.down(2)).toEqual(thermostat.DEFAULT_TEMP - 2);
  });

  it("limits the minimum temperature to 10 degrees", function() {
    thermostat.down(11);
    expect(thermostat.setting()).toEqual(thermostat.DEFAULT_MINIMUM);
  });

  it("limits temperature to 25 degrees when power saving is on", function() {
    thermostat.powerSavingOn();
    thermostat.up(10);
    expect(thermostat.setting()).toEqual(25);
  });

  it("increases temperature beyond power saving max when power saving is off", function() {
    thermostat.powerSavingOff();
    thermostat.up(10);
    expect(thermostat.setting()).toEqual(thermostat.DEFAULT_TEMP + 10);
  });

  it("limits temperature to 32 when power saving is off", function(){
    thermostat.powerSavingOff();
    thermostat.up(15);
    expect(thermostat.setting()).toEqual(32);
  });

  it("resets temp to default", function() {
    thermostat.up(3);
    thermostat.reset();
    expect(thermostat.setting()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it("returns low-usage for temperature under 18", function(){
    thermostat.down(5);
    expect(thermostat.setting()).toEqual(thermostat.DEFAULT_TEMP - 5);
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("returns medium-usage for temperatures of 18", function() {
    thermostat.down(2);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("returns medium-usage for temperatures between 18 and 24", function(){
    thermostat.down(1);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
    thermostat.up(2);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
    thermostat.up(4);
    expect(thermostat.energyUsage()).not.toEqual("medium-usage");
  });

  it("returns high-usage for 25", function() {
    thermostat.up(5);
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
});
