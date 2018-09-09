
import $ from 'jquery'
import _ from 'lodash'

console.log(_);

console.log($.fn.jquery);

const arr = [2, 34, 56, 7, 8]

let found = arr.find(x => x === 7)
console.log(found);

export default () => 'Welcome to mylib';
