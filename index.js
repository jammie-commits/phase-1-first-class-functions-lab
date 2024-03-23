// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectionFunction) {
  return selectionFunction(drivers);
}
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const firstTwo = returnFirstTwoDrivers(drivers); 
const lastTwo = returnLastTwoDrivers(drivers); 

const doubledFare = fareDoubler(10); 
const tripledFare = fareTripler(10); 

const firstTwoSelected = selectDifferentDrivers(drivers, selectingDrivers[0]); 
const lastTwoSelected = selectDifferentDrivers(drivers, selectingDrivers[1]); 
