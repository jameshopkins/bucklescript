'use strict';


function to_js_boolean(b) {
  if (b) {
    return true;
  }
  else {
    return false;
  }
}

var unsafe_bool_of_any = ( function(x){ return !x ? 0 : 1} );

function unsafe_boolean_of_any() {
  return ( !! x);
}

exports.to_js_boolean         = to_js_boolean;
exports.unsafe_bool_of_any    = unsafe_bool_of_any;
exports.unsafe_boolean_of_any = unsafe_boolean_of_any;
/* unsafe_bool_of_any Not a pure module */
