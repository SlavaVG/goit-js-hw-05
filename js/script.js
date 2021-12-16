// {
    // Колбэк-функция
//     function greet(name) {
//         console.log(`Добро пожаловать ${name}.`);
//     }

//     // Функция высшего порядка
//     function registerGuest(name, callback) {
//         console.log(`Регистрируем гостя ${name}.`);
//         callback(name);
//     }

//     registerGuest("Mango", greet);
// }


    {
        function deliverPizza(pizzaName) {
            return `Delivering ${pizzaName} pizza.`;
        }

        function makePizza(pizzaName) {
            return `Pizza ${pizzaName} is being prepared, please wait...`;
        }

        // Chande code below this line
    function makeMessage(pizzaName, callback) {
        callback(pizzaName);
        return callback(pizzaName);
        }

    makeMessage("Royal Grand", makePizza);
    makeMessage("Ultracheese", deliverPizza);
    }
