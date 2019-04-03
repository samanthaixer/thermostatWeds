describe("Thermostat", function(){
  beforeEach(function() {
    thermostat = new Thermostat;
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("responds to an up function", function() {
    expect(thermostat.up()).not.toBe(undefined);
  });

  it("increases the temperature by 1 degree", function() {
    expect(thermostat.up(1)).toEqual(21);
  })

});
