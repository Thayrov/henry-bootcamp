const layout = [
  [
    {type: 'VIP', booked: false},
    {type: 'VIP', booked: true},
    {type: 'VIP', booked: true},
    {type: 'VIP', booked: false},
  ],
  [
    {type: 'NORMAL', booked: false},
    {type: 'VIP', booked: true},
    {type: 'VIP', booked: false},
    {type: 'NORMAL', booked: false},
  ],
  [
    {type: 'NORMAL', booked: false},
    {type: 'NORMAL', booked: true},
    {type: 'NORMAL', booked: true},
    {type: 'NORMAL', booked: false},
  ],
  [
    {type: 'ECONOMIC', booked: true},
    {type: 'NORMAL', booked: true},
    {type: 'NORMAL', booked: true},
    {type: 'ECONOMIC', booked: false},
  ],
  [
    {type: 'ECONOMIC', booked: false},
    {type: 'ECONOMIC', booked: true},
    {type: 'ECONOMIC', booked: false},
    {type: 'ECONOMIC', booked: false},
  ],
];

const getRowNumber = str => {
  if (typeof str !== 'string') throw new TypeError('Parameter is not a string');
  if (str.length !== 1) throw new TypeError('Parameter length is not 1');
  let number = str.toUpperCase().charCodeAt(0) - 65;
  if (number > layout.length) {
    throw new TypeError(
      `Row is not defined in the layout, please enter a valid row between A and ${String.fromCharCode(
        64 + layout.length,
      )}`,
    );
  }
  return number;
};

const getSeatNumber = (str, num) => {
  let row = getRowNumber(str);
  let column = num - 1;
  let rowSize = layout[row].length;
  if (rowSize < column) throw new TypeError(`This column only have ${rowSize} seats`);

  return layout[row][column];
};
const checkSeatStatus = (str, num) => {
  if (typeof str !== 'string') throw new TypeError('First parameter is not a string');
  if (typeof num !== 'number') throw new TypeError('Second parameter is not a number');

  const seat = getSeatNumber(str, num);
  return seat.booked;
};

const book = (str, num) => {
  if (checkSeatStatus(str, num)) {
    return `Seat in ${str}${num} is already booked`;
  } else {
    const seat = getSeatNumber(str, num);
    seat.booked = true;
    return `Seat in ${str}${num} successfully booked`;
  }
};

/* const iterateLayout = (layout, fn) => {
  return layout.reduce((acc, row) => {
    return acc + row.reduce((rowAcc, seat) => rowAcc + fn(seat), 0);
  }, 0);
};
*/

const iterateLayout = (layout, cb) => {
  let acc = 0;
  for (let i = 0; i < layout.length; i++) {
    for (let j = 0; j < layout[i].length; j++) {
      acc += cb(layout[i][j]);
    }
  }
  return acc;
};
const priceMap = {VIP: 600, NORMAL: 450, ECONOMIC: 300};

const totalSeats = layout => iterateLayout(layout, seat => (seat ? 1 : 0));

const bookedSeats = layout => iterateLayout(layout, seat => (seat.booked ? 1 : 0));

const availableSeats = layout => iterateLayout(layout, seat => (!seat.booked ? 1 : 0));

const totalRevenue = layout =>
  iterateLayout(layout, seat => (seat.booked ? priceMap[seat.type] : 0));

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeatNumber,
  layout,
  totalSeats,
  bookedSeats,
  availableSeats,
  totalRevenue,
};
