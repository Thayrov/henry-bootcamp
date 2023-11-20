const {
  checkSeatStatus,
  getRowNumber,
  book,
  getSeatNumber,
  layout,
  totalSeats,
  bookedSeats,
  availableSeats,
  totalRevenue,
} = require('../homework');

describe('check Test environment', () => {
  it('Jest running', () => {
    expect(true).toBe(true);
  });
});

describe('checkSeatStatus Tests', () => {
  it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
  });

  it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
  });
  it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('', '')).toThrow(
      new TypeError('Second parameter is not a number'),
    );
  });
});

describe('getRowNumber Tests', () => {
  it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
  });
  it('should return 2 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
  });
  it('should throw a TypeError if parameter is not a string or its length is not 1', () => {
    expect(() => getRowNumber(4)).toThrow(new TypeError('Parameter is not a string'));
    expect(() => getRowNumber('')).toThrow(new TypeError('Parameter length is not 1'));
    expect(() => getRowNumber('Hi')).toThrow(new TypeError('Parameter length is not 1'));
  });
  it('should inform the user that that row is not defined in the layout', () => {
    expect(() => getRowNumber('Z')).toThrow(
      new TypeError('Row is not defined in the layout, please enter a valid row between A and E'),
    );
  });
});

describe('Seats availability tests', () => {
  it('should return true if the seat is booked', () => {
    expect(checkSeatStatus('A', 2)).toBe(true);
  });
  it('should return false if the seat is available', () => {
    expect(checkSeatStatus('E', 4)).toBe(false);
  });
  it('should throw a TypeError', () => {
    expect(() => getSeatNumber('A', 7)).toThrow(new TypeError('This column only have 4 seats'));
  });
});

describe('Layout analysis tests', () => {
  it('should show total seats', () => {
    expect(totalSeats(layout)).toBe(20);
  });
  it('should show booked seats', () => {
    expect(bookedSeats(layout)).toBe(9);
  });
  it('should show available seats', () => {
    expect(availableSeats(layout)).toBe(11);
  });
  it('should show total revenue', () => {
    expect(totalRevenue(layout)).toBe(4200);
  });
});

describe('Buying the seats tests', () => {
  it('should confirm if the seat was successfully booked', () => {
    expect(checkSeatStatus('E', 4)).toBe(false);
    expect(book('E', 4)).toBe('Seat in E4 successfully booked');
    expect(checkSeatStatus('E', 4)).toBe(true);
  });
  it('should inform that the seat was already booked', () => {
    expect(book('A', 2)).toBe('Seat in A2 is already booked');
  });
});

// describe('', () => {})
// it('',() => {expect().toThrow()})
// it('',() => {expect().toBe()})
