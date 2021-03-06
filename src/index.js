'use strict';

var thermostat;

$(document).ready(function() {
  thermostat = new Thermostat();
  updateTemperature();

  $('#raiseTemp').on('click', function() {
      thermostat.up();
      updateTemperature();
  });

  $('#lowerTemp').on('click', function() {
      thermostat.down();
      updateTemperature();
  });

  $('#powerSave').on('click', function() {
      thermostat.powerSavingOn();
  });

  $('#powerSpend').on('click', function() {
      thermostat.powerSavingOff();
      updateTemperature();
  });

  $('#reset').on('click', function() {
      thermostat.reset();
      updateTemperature();
  });


  function updateTemperature() {
    $('#currentTemperature').text("Current setting: " + thermostat.setting());
    $('#currentTemperature').attr('class', thermostat.energyUsage());
  };

});
