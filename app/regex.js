if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return /\d/.test(str);
    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {
      return /[aeiouAEIOU]$/.test(str);
    },

    captureThreeNumbers : function(str) {
      for(var i = 0; i < str.length; i++) {
        var testStr = str.substring(i, i+3);
        if (/\d\d\d/.test(testStr))
          return testStr;
      }
      return false;
    },

    matchesPattern : function(str) {
      return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },
    isUSD : function(str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d\d)?$/.test(str);
    }
  };
});
