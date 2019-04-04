'use strict';

$(document).ready(function() {
var thermostat = new Thermostat();
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
      updateTemperature();
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
  };

});
