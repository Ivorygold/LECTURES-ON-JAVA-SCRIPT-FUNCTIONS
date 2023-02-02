'use strict';

const bookings = [];
const creatBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LH345');
creatBooking('LH345', 2, 800);
creatBooking('LH345', 5);

//FUNCTION ACCEPTING OTHER FUNCTION
const oneWord = function (str) {
  return str.replace(/ /g, '').tolowerCase();
};

const upperFirstWord = function (str) {};
