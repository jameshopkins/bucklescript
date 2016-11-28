

type t = Js.boolean 

let to_js_boolean b = if b then Js.true_ else Js.false_

let unsafe_bool_of_any  =
    (Obj.magic [%bs.raw{| function(x){ return !x ? 0 : 1} [@arity 1]|}] :'a -> bool) 
    
let unsafe_boolean_of_any (type u) (x : u) :   t = 
    [%bs.raw{| !! x|}]
    