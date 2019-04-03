describe("Thermostat", function(){
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("starts at default temperature", function(){
    expect(thermostat.temperature).toEqual(thermostat.DEFAULT_TEMP);
  });

  describe("user wants to increase temperature", function() {
    it("responds to up()", function() {
      expect(thermostat.up()).not.toBe(undefined);
    });

    it("increases the temperature by 1 degree", function() {
      expect(thermostat.up(1)).toEqual(thermostat.DEFAULT_TEMP + 1);
    });
  });

  it("decreases the temperature by 12 degrees", function() {
    expect(thermostat.down(12)).toEqual(thermostat.DEFAULT_TEMP - 12);
  });

  it("limits the minimum temperature to 10 degrees", function() {
    thermostat.down(11);
    expect(thermostat.setting()).toEqual(themostat.DEFAULT_MINIMUM);
  });
});
