// A Simple Counter //
// counter that can: Increment, Return the current value, Keep its internal value private //

function createCounter() {
    let count = 0; // Private variable

    return {
        increment: function () {
            count++;
            return count;
        },
        getValue: function () {
            return count;
        }
    };
}

const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.getValue());

const counter2 = createCounter();  // A separate counter
console.log(counter2.increment());

//Encapsulation: count is not accessible from the outside.
// State persistence: Each counter maintains its own state.
//Avoids global variables: Clean and modular design.