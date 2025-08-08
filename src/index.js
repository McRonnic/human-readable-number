module.exports = function toReadable(number) {
  const snumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const bnumbers = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let res;
  let sec;
  let num;
  if (number < 1000 && number >= 100) {
    const inter = number.toString().split('');
    res = `${snumbers[inter[0]]} hundred`;
    num = number % 100;
  } else {
    num = number;
  }
  if (num < 20) {
    sec = snumbers[num];
  } else if (num < 100 && num >= 20) {
    const inter = num.toString().split('');
    if (inter[1] === '0') {
      sec = bnumbers[inter[0] - 2];
    }
    if (inter[1] !== '0') {
      sec = [bnumbers[inter[0] - 2], snumbers[inter[1]]].join(' ');
    }
  }

  res = `${res} ${sec}`;
  res = res.replace(/undefined /g, '');
  if (number !== 0) {
    res = res.replace(/ zero/g, '');
  }
  return res;
};
