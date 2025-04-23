"use strict";
// Strings

// Task 1
let name = 'Mary '
let activity = 'drink tea'
let bio = 'Our guest ' + name + activity + '.'
console.log(bio.length);

// Task 2
const str1 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
const ch1 = prompt(`Enter index:`)
alert(str1[ch1])

// Task 3
const str2 = prompt(`Enter a string:`)
alert(`${str2[0]} , ${str2[str2.length-1]}`)

// Task 4
const str3 = `abcde`
let str4 = ``
for(let i = str3.length-1; i >= 0; i--)
  str4 += str3[i]
alert(str4)

// Task 5
let str5 = `js`
alert(str5.toUpperCase())

// Task 6
const str6 = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
alert(str6.includes(prompt(`Enter a word to see if it appears in the string:`)))

// Task 7
let str7 = `1-2-3-4-5`
while(str7.includes('-')){
  str7 = str7.replace('-','.')
}
alert(str7)

// Task 8
let str8 = `1-2-3-4-5-6`
str8 = str8.replaceAll('-','.')
alert(str8)

// Task 9
const str9 = 'sdfwe'
console.log(str.substring(4, 2) ); // fw

// Task 10
const str10 = "I'm learning javascript!";
alert(`${str10.slice(4, 12)} ${str10.slice(13, 23)}`)
alert(`${str10.substr(4, 8)} ${str10.substr(13, 10)}`)
alert(`${str10.substring(4, 12)} ${str10.substring(13, 23)}`)

// Task 11
const str11 = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'
alert(str11.indexOf(`http://`) === 0 ? `YES` : `NO`)

// Task 12
const str12 = 'https://www.notion.html'
alert(str12.indexOf(`.html`, str12.length-5) != -1  ? `YES` : `NO`)

// Task 13
const str13 = 'ab cd cd cd ef';
console.log(str13.lastIndexOf('cd')); // 9
console.log(str13.lastIndexOf('cd', 8)); // 6

// Task 14
const str14 = 'abcde';
console.log(str14.startsWith('abc')); // true
console.log(str14.startsWith('xxx')); // false
console.log(str14.startsWith('bc', 1)); // true

// Task 15
const str15 = 'abcde';
console.log(str15.endsWith('cde')); // true
console.log(str15.endsWith('xxx')); // false
console.log(str15.endsWith('bc', 3)); // true

// Task 16
let str17 = 'ab-cd-ef';
console.log(str17.split('-')); // {ab, cd, ef}
console.log(str17.split('-', 2)); // {ab, cd}
console.log(str17.split('')); // {a, b, -, c, d, -, e, f}
console.log(str17.split('', 3)); // {a, b, -}
let str18 = '12345';
console.log(str18.split('')); // {1, 2, 3, 4, 5}