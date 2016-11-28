'use strict';

var Mt    = require("./mt");
var Block = require("../../lib/js/block");

var suites = [/* [] */0];

var test_id = [0];

function eq(loc, x, y) {
  test_id[0] = test_id[0] + 1 | 0;
  suites[0] = /* :: */[
    /* tuple */[
      loc + (" id " + test_id[0]),
      function () {
        return /* Eq */Block.__(0, [
                  x,
                  y
                ]);
      }
    ],
    suites[0]
  ];
  return /* () */0;
}

eq('File "boolean_coercion_test.ml", line 11, characters 7-14', /* true */1, ( !x ? 0 : 1 ));

eq('File "boolean_coercion_test.ml", line 12, characters 7-14', true, ( !! x));

eq('File "boolean_coercion_test.ml", line 13, characters 7-14', false, ( !! x));

eq('File "boolean_coercion_test.ml", line 14, characters 7-14', /* false */0, ( !x ? 0 : 1 ));

Mt.from_pair_suites("boolean_coercion_test.ml", suites[0]);

exports.suites  = suites;
exports.test_id = test_id;
exports.eq      = eq;
/*  Not a pure module */
