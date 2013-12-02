if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
          return i;
        }
      }
      return -1;
    },

    sum : function(arr) {
      var total = arr.reduce(function(a,b) {
        return a + b;
      });
      return total;
    },

    remove : function(arr, item) {
      var newArray = []
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] != item)
          newArray.push(arr[i]);
      }
      return newArray;
    },

    removeWithoutCopy : function(arr, item) {
      for (var i = 0; i < arr.length;) {
        if (arr[i] == item) {
          arr.splice(i, 1);
        } else {
          i++;
        }
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.pop();
      return arr;
    },

    prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
    },

    curtail : function(arr) {
      arr.shift();
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var count = 0;
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] == item)
          count++;
      }
      return count;
    },

    duplicates : function(arr) {
      arr = arr.filter(function(e, i, arr) {
        return arr.lastIndexOf(e) != i;
      });
      arr = arr.filter(function(e, i, arr) {
        return arr.lastIndexOf(e) == i;
      });
      return arr;
    },

    square : function(arr) {
      return arr.map(function(x) { return x * x });
    },

    findAllOccurrences : function(arr, target) {
      var result = [];
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
          result.push(i);
        }
      }
      return result;
    }
  };
});
