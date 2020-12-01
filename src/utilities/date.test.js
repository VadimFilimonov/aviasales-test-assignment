import { convertToTime, convertToDuration } from './date';

test('Convert to time', () => {
  expect(convertToTime(new Date('1995-12-17T03:24:00'))).toEqual('03:24');
  expect(convertToTime(new Date('2020-01-01T12:30:55'))).toEqual('12:30');
});

test('Convert to duration', () => {
  expect(convertToDuration(50)).toEqual('50м');
  expect(convertToDuration(60)).toEqual('1ч');
  expect(convertToDuration(90)).toEqual('1ч 30м');
});
