// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
import * as functions from '../code-to-unit-test/unit-test-me';

// ---------------- isPhoneNumber ----------------
test('isPhoneNumber: "123-456-7890" is a valid phone number', () => {
  expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber: "(123) 456-7890" is a valid phone number', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber: "hello world" is NOT a valid phone number', () => {
  expect(functions.isPhoneNumber('hello world')).toBe(false);
});

test('isPhoneNumber: "12-34-5678" is NOT a valid phone number', () => {
  expect(functions.isPhoneNumber('12-34-5678')).toBe(false);
});

// ---------------- isEmail ----------------
test('isEmail: "hello@gmail.com" is a valid email', () => {
  expect(functions.isEmail('hello@gmail.com')).toBe(true);
});

test('isEmail: "test_user@ucsd.edu" is a valid email', () => {
  expect(functions.isEmail('test_user@ucsd.edu')).toBe(true);
});

test('isEmail: "not-an-email" is NOT a valid email', () => {
  expect(functions.isEmail('not-an-email')).toBe(false);
});

test('isEmail: "missing@domain" is NOT a valid email', () => {
  expect(functions.isEmail('missing@domain')).toBe(false);
});

// ---------------- isStrongPassword ----------------
test('isStrongPassword: "Abcd1" is a strong password', () => {
  expect(functions.isStrongPassword('Abcd1')).toBe(true);
});

test('isStrongPassword: "password_123" is a strong password', () => {
  expect(functions.isStrongPassword('password_123')).toBe(true);
});

test('isStrongPassword: "1abcd" is NOT a strong password (starts with number)', () => {
  expect(functions.isStrongPassword('1abcd')).toBe(false);
});

test('isStrongPassword: "ab" is NOT a strong password (too short)', () => {
  expect(functions.isStrongPassword('ab')).toBe(false);
});

// ---------------- isDate ----------------
test('isDate: "12/25/2024" is a valid date', () => {
  expect(functions.isDate('12/25/2024')).toBe(true);
});

test('isDate: "1/1/1999" is a valid date', () => {
  expect(functions.isDate('1/1/1999')).toBe(true);
});

test('isDate: "12-25-2024" is NOT a valid date (dashes instead of slashes)', () => {
  expect(functions.isDate('12-25-2024')).toBe(false);
});

test('isDate: "12/25/24" is NOT a valid date (year only 2 digits)', () => {
  expect(functions.isDate('12/25/24')).toBe(false);
});

// ---------------- isHexColor ----------------
test('isHexColor: "#FFF" is a valid hex color', () => {
  expect(functions.isHexColor('#FFF')).toBe(true);
});

test('isHexColor: "#a1b2c3" is a valid hex color', () => {
  expect(functions.isHexColor('#a1b2c3')).toBe(true);
});

test('isHexColor: "#GGGGGG" is NOT a valid hex color (G not in hex)', () => {
  expect(functions.isHexColor('#GGGGGG')).toBe(false);
});

test('isHexColor: "#12345" is NOT a valid hex color (5 chars, not 3 or 6)', () => {
  expect(functions.isHexColor('#12345')).toBe(false);
});