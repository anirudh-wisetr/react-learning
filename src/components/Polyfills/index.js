/* eslint-disable no-extend-native */

// FOR EACH
Array.prototype.myForEach = function (callback) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i], i, arr);
  }
};

// MAP
Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; ++i) {
    const response = callback(arr[i], i, arr);
    result.push(response);
  }
  return result;
};

// Filter
Array.prototype.myFilter = function (callback) {
  if (typeof callback != "function") throw Error("Undefined Error");

  const arr = this;
  const newArray = [];
  for (let i = 0; i < arr.length; ++i) {
    const result = callback(arr[i], i, arr);
    if (result) {
      // result.push(result); YE GALAT HO JAATA KYUKI YE RETURN MEI TRUE YA FALSE BHEJTA NA
      newArray.push(arr[i]);
    }
  }

  return newArray;
};

// Find
Array.prototype.myFind = function (callback) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  for (var i = 0; i < arr.length; ++i) {
    const result = callback(arr[i], i, arr);
    if (result) {
      // result  I was returning result and didn't check ki bhyi true aara hei to value return kar
      return arr[i];
    }
  }
};

// Some
Array.prototype.MySOme = function (callback) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  for (let i = 0; i < arr.length; ++i) {
    const result = callback(arr[i], i, arr);
    if (result) {
      return true;
    }
    return false;
  }
};

// Every
Array.prototype.MyEvery = function (callback) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  for (let i = 0; i < arr.length; ++i) {
    const result = callback(arr[i], i, arr);
    if (!result) {
      return false;
    }
    return result;
  }
};

// Reduce
[1, 2, 3, 4].myReduce((acc, currentVal) => (acc += currentVal), 0);

Array.prototype.myReduce = function (callback, initialValue = 0) {
  if (typeof callback !== "function") throw Error("Undefined Error");

  const arr = this;
  for (let i = 0; i < arr.length; ++i) {
    const result = callback(initialValue, arr[i], i, arr);
    initialValue = result;
  }
  return initialValue;
};

// call()
const bio = {
  fName: "ANirudh",
  lName: "Tiwari",
};

function printName(state, country) {
  console.log(
    `Full Name is ${this.fName} ${this.lName} lives in ${state},${country}`
  );
}

printName.call(bio, "delhi", "INDIA");

// Prototype
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not a function`);
  }
  context.refFunc = this;
  const result = context.refFunc(...args);
  delete context.refFunc;
  return result;
};

// apply()
const bio2 = {
  fName: "Anirudh",
  lName: "Anirudh",
};

function printName2(state, country) {
  console.log(
    `Full name is ${this.fName} ${this.lName} who lives in in ${state},${country}`
  );
}

printName2.apply(bio2, ["Delhi", "INDIA"]);

// Prototype
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw Error(`${this} is not a function`);
  }
  if (!Array.isArray(args)) {
    throw Error("CreateListFromArrayLike called on non-object");
  }
  context.refFunc = this;
  const result = context.refFunc(...args);
  delete context.refFunc;
  return result;
};

// bind()
const bio3 = {
  fName: "Anirudh",
  lName: "Tiwari",
};

function printBio3(state, country) {
  return `Full name is ${this.fName} ${this.lName} who lives in ${state} ${country}`;
}

const bio3Func = printBio3.bind(bio3, "delhi", "INDIA");

bio3Func("Thank you");

// Prototype
Function.prototype.myBind = function (context, ...args) {
  context.refFunc = this;
  return function (...otherArgs) {
    const result = context.refFunc(...args, ...otherArgs);
    delete context.refFunc;
    return result;
  };
};

// NOTE:
// 1. MAKE SURE, PROMISE POLYFILL MEI prototype nhi lagayiyo
// 2. Dikhate time, end mei seedha chalake dikhyiyo. Nhi to fass jyga

// Promise.all
Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject("Undefine Array");
      return;
    }

    let promiseLength = promises.length;
    let completed = 0;
    const result = [];

    if (promiseLength === 0) {
      resolve(promises);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          completed++;
          result[index] = response;
          if (completed === promiseLength) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// NOTE: Whenever u r showing functionality. Makesure, to show all promises along with Promise.all.   

const p1 = new Promise((resolve, reject) => {
  setTimeout(()=>{
      resolve(`P1 Resolved`);
  }, 1000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
      resolve(`P2 Resolved`);
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(()=>{
      resolve(`P3 Resolved`);
  }, 5000)
})

Promise.myAll([p1, p2, p3]).then((response)=>{
 console.log(response);
}).catch((error)=>{
  throw Error(error)
})

// ALL Settled
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject("Undefine Array");
      return;
    }

    let promiseLength = promises.length;
    let completed = 0;
    const result = [];

    if (promiseLength === 0) {
      resolve(promises);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          completed++;
          result[index] = { status: "Fulfilled", value: response };
          if (completed === promiseLength) {
            resolve(result);
          }
        })
        .catch((error) => {
          completed++;
          result[index] = { status: "Rejected", reason: error };
          if (completed === promiseLength) {
            resolve(result);
          }
        });
    });
  });
};

// Race
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject("Undefine Array");
      return;
    }

    let promiseLength = promises.length;

    if (promiseLength === 0) {
      resolve(promises);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          resolve(error);
        });
    });
  });
};

// Any
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject("Undefine Array");
      return;
    }

    let promiseLength = promises.length;
    let completed = 0;
    let result = [];

    if (promiseLength === 0) {
      resolve(promises);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          completed++;
          result[index] = error;
          if(completed === promiseLength){
            resolve(result);
          }
        });
    });
  });
};

// getElementsByClassName
document.myGetElementsByClassName = function (parameter) {
  return document.querySelectorAll("." + parameter);
};

// getElementByID
document.getElementById = function (id) {
  var elements = document.all || document.layers;
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].id === id) return elements[i];
  }
  return null;
};

// querySelector
document.myQuerySelector = function (selector) {
  var elements = document.querySelectorAll(selector);
  return elements.length ? elements[0] : null;
};

document.getElementByIDs = function (selector) {
  let element = document.all || document.layers;
  for (let i = 0; i < element; ++i) {
    if (element[i].id === selector) {
      return element[i];
    }
  }
  return null;
};

// Flat 
function flattenArray(arr) {
  let result = [];

  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursively flatten the array
    } else {
      result.push(item); // Add non-array elements to the result
    }
  });

  return result;
}

// Example usage
const inputArray = [1, [2, 3, [4, 5, 6]]];
const flattenedArray = flattenArray(inputArray);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
