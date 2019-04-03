describe("Thermostat", function(){
  it("starts at 20 degrees", function(){
    thermostat = new Thermostat;
    expect(thermostat.temperature).toEqual(20);

  });

  it("responds to an up function", function() {
    thermostat = new Thermostat;
    expect(thermostat.up()).not.toBe(undefined);
  });

});
