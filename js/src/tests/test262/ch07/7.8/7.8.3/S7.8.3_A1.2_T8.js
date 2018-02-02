// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * DecimalLiteral :: DecimalIntegerLiteral ExponentPart
 *
 * @path ch07/7.8/7.8.3/S7.8.3_A1.2_T8.js
 * @description ExponentPart :: E 0
 */

//CHECK#0
if (0E0 !== 0) {
  $ERROR('#0: 0E0 === 0');
}

//CHECK#1
if (1E0 !== 1) {
  $ERROR('#1: 1E0 === 1');
}

//CHECK#2
if (2E0 !== 2) {
  $ERROR('#2: 2E0 === 2');
}

//CHECK#3
if (3E0 !== 3) {
  $ERROR('#3: 3E0 === 3');
}

//CHECK#4
if (4E0 !== 4) {
  $ERROR('#4: 4E0 === 4');
}

//CHECK#5
if (5E0 !== 5) {
  $ERROR('#5: 5E0 === 5');
}

//CHECK#6
if (6E0 !== 6) {
  $ERROR('#6: 6E0 === 6');
}

//CHECK#7
if (7E0 !== 7) {
  $ERROR('#7: 7E0 === 7');
}

//CHECK#8
if (8E0 !== 8) {
  $ERROR('#8: 8E0 === 8');
}

//CHECK#9
if (9E0 !== 9) {
  $ERROR('#9: 9E0 === 9');
}
