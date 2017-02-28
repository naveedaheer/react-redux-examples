// Update in Counter 8 -- Separate action file as class
export default class CounterActionTypes {

    // static properties to be used in reducer for switch cases
    static INCREMENT = "INC";
    static DECREMENT = "DEC";
    static INCREMENT_WITH_VALUE = "PLUS_WITH_VALUE";
    static DECREMENT_WITH_VALUE = "MINUS_WITH_VALUE";

    // static functions to be mapped with dispatch in component
    static increment(){
        return { 
            type: 'INC'
        }
    }

    static decrement(){
        return { 
            type: 'DEC' 
        }
    }

    static incrementWithValue(value){
        return { 
            type: 'PLUS_WITH_VALUE',
            val: value
        }
    }

    static decrementWithValue(value){
        return { 
            type: 'MINUS_WITH_VALUE',
            val: value
        }
    }
}