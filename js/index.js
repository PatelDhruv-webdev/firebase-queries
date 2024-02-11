$(document).ready(function() {
  
    // Attach event listeners to buttons using jQuery
    $('#btnQuestion1').on('click', function() {  vehicleOperations.highestPriceModel(); });
    $('#btnQuestion2').on('click', function() { vehicleOperations.modelMileageLookup('pilot'); });
    $('#btnQuestion3').on('click', function() {  vehicleOperations.lastVehicleEntry(); });
    $('#btnQuestion4').on('click', function() {  vehicleOperations.vehicleCountInRange(200000, 300000); });
    $('#btnQuestion5').on('click', function() {  vehicleOperations.manufacturerLookupByModel('civic'); });
});
