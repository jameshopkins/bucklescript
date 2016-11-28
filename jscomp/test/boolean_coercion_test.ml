let suites :  Mt.pair_suites ref  = ref []
let test_id = ref 0
let eq loc x y = 
  incr test_id ; 
  suites := 
    (loc ^" id " ^ (string_of_int !test_id), (fun _ -> Mt.Eq(x,y))) :: !suites



let ()  =
    eq __LOC__ true (Js.Boolean.unsafe_bool_of_any 3);
    eq __LOC__ Js.true_ (Js.Boolean.unsafe_boolean_of_any 3);
    eq __LOC__ Js.false_ (Js.Boolean.unsafe_boolean_of_any 0);
    eq __LOC__ false (Js.Boolean.unsafe_bool_of_any 0)


let () = 
  Mt.from_pair_suites __FILE__ !suites      



