// [General]
// Barebones Pub/Sub pattern
// var events = {
//   events: {},
//   on: function (eventName, fn) {
//     this.events[eventName] = this.events[eventName] || [];
//     this.events[eventName].push(fn);
//   },
//   off: function(eventName, fn) {
//     if (this.events[eventName]) {
//       for (var i = 0; i < this.events[eventName].length; i++) {
//         if (this.events[eventName][i] === fn) {
//           this.events[eventName].splice(i, 1);
//           break;
//         }
//       }
//     }
//   },
//   emit: function (eventName, data) {
//     if (this.events[eventName]) {
//       this.events[eventName].forEach(function(fn) {
//         fn(data);
//       });
//     }
//   }
// };


// [Classical Inheritance]
// Inherit function stolen from Node
// https://github.com/nodejs/node-v0.x-archive/tree/master/lib
// exports.inherits = function(ctor, superCtor) {
//   ctor.super_ = superCtor;
//   ctor.prototype = Object.create(superCtor.prototype, {
//     constructor: {
//       value: ctor,
//       enumerable: false,
//       writable: true,
//       configurable: true
//     }
//   });
// };


// [Prototypal Inheritance]
// Polyfil for Object.create();
// if ( typeof Object.create !== 'function' ) {
//     Object.create = function(o, props) {
//         function F() {}
//         F.prototype = o;
//         result = new F();

//         if ( typeof(props) === "object" ) {
//             for (prop in props) {
//                 if (props.hasOwnProperty((prop))) {
//                     result[prop] = props[prop].value;
//                 }
//             }
//         }
    
//     return result;
//     };
// }﻿;

