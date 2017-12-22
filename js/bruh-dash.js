var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, elem) {
    return arr.indexOf(elem);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, elem) {
    return arr.lastIndexOf(elem);
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      if (i < arr.length - 1){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i]){
        newArray.push(arr[i]);
      }
    }
    return newArray;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start) {
    return arr.slice(start, arr.length - 1);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (n === 0){
      return arr;
    }else if (n){
      arr.splice(0, n);
      return arr;
    }else{
      arr.shift();
      return arr;
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    newArray = [];
    if (n === 0){
      return arr;
    }else if (n){
      for (var i = 0; i < arr.length - n; i++){
        newArray.push(arr[i]);
      }
      return newArray;
    }else{
      arr.pop();
      return arr;
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    newArray = [];
    if (n === 0){
      return newArray;
    }else if (n > arr.length){
      return arr;
    }else if (n){
      for (var i = 0; i < n; i++){
        newArray.push(arr[i]);
      }
      return newArray;
    }else{
      newArray.push(arr.shift());
      return newArray;
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    newArray = [];
    if (n){
      arr.splice(0, arr.length - n);
      return arr;
    }else if (n === 0){
      return newArray;
    }else if (n > arr.length){
      return arr;
    }else{
      newArray.push(arr.pop());
      return newArray;
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
   for (var i = 0; i < arr.length; i++){
     if (i >= start && i < end){
       arr.splice(i, 1, value);
     }else if (start === undefined && end === undefined){
       arr.splice(i, 1, value);
     }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function (arr, ...values) {
    for (var i = 0; i < arr.length; i++){
      for (var value of values){
        if (arr[i] === value){
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, ...indices) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++){
      for (var index of indices){
        if(arr.indexOf(index)){
          newArray.push(arr.splice(i, 1));
        }
      }
    }
    var flattenedArray = [].concat.apply([], newArray);
    return flattenedArray;
  },

  // creates an array excluding all the specified values
  without: function(arr, values) {
    var newArray = [];
    arr.forEach(function(index){
      if (values.indexOf(index) === -1){
        newArray.push(index);
      }
    })
    return newArray;
  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
