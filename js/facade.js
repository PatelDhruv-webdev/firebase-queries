// Define an object to hold various operations related to vehicle data.
const vehicleOperations = {
  
    highestPriceModel: function() {
       
        let vehicleDataRef = firebase.database().ref('vehicles');
       
        vehicleDataRef.orderByChild('price').limitToLast(1).once('value', data => {
            // Iterate through the returned snapshot.
            data.forEach((dataChild) => {
            
                console.log(`Top-priced model: ${dataChild.key}, Amount: ${dataChild.val().price}`);
            });
        });
    },

    // Function to find the mileage for a specific model.
    modelMileageLookup: function(modelIdentifier) {
        // Query the database for vehicles with a specific model ID.
        let vehicleDataRef = firebase.database().ref('vehicles').orderByChild('model_id').equalTo(modelIdentifier);
        
        vehicleDataRef.once('value', data => {
            // Iterate through the vehicles that match the model ID.
            data.forEach((dataChild) => {

                console.log(`Mileage for the ${modelIdentifier} model: ${dataChild.val().mileage}`);
            });
        });
    },

    // Function to find the last vehicle entry in the database.
    lastVehicleEntry: function() {

        let vehicleDataRef = firebase.database().ref('vehicles');
        // Retrieve the last vehicle entry.
        vehicleDataRef.limitToLast(1).once('value', data => {
            // Iterate through the returned snapshot (should be only one).
            data.forEach((dataChild) => {

                console.log(`Vehicle at the end: ${dataChild.key}`);
            });
        });
    },

    // Function to count the number of vehicles within a certain mileage range.
    vehicleCountInRange: function(lowerMileage, upperMileage) {

        let vehicleDataRef = firebase.database().ref('vehicles');
        // Query for vehicles with mileage within the specified range.
        vehicleDataRef.orderByChild('mileage').startAt(lowerMileage).endAt(upperMileage).once('value', data => {

            console.log(`Count of vehicles with mileage from ${lowerMileage} to ${upperMileage}: ${data.numChildren()}`);
        });
    },

    // Function to find the manufacturer ID for a given model.
    manufacturerLookupByModel: function(modelIdentifier) {

        let vehicleDataRef = firebase.database().ref('vehicles').orderByChild('model_id').equalTo(modelIdentifier);
        // Retrieve the data once without listening for changes.
        vehicleDataRef.once('value', data => {

            data.forEach((dataChild) => {

                console.log(`Maker ID for the ${modelIdentifier} model: ${dataChild.val().manufacturer_id}`);
            });
        });
    }
};
