type Pizza = {
    id: number,
    name: string,
    price: number
};

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
};

const menu: Array<Pizza> = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 }
];

const orderHistory: Order[] = [];
let cashInRegister = 100;
let nextOrderId = 1;

const addToArray = <T>(array: Array<T>, item: T): void => {
    array.push(item);
};

const addNewPizza = (pizza: Pizza) => {
    addToArray(menu, pizza);
};

const placeOrder = (pizzaName: string): Order | undefined => {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName);

    if (selectedPizza === undefined) {
        console.log(`${pizzaName} is not presented in the list`);
        return;
    }

    cashInRegister += selectedPizza.price;
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    addToArray<Order>(orderHistory, newOrder);

    return newOrder;
};

const completeOrder = (orderId: number): Order | undefined => {
    const selectedOrder = orderHistory.find(order => order.id === orderId);

    if (selectedOrder === undefined) {
        console.log(`no such order with that provided ID`);
        return;
    }

    selectedOrder.status = "completed";
    return selectedOrder;
};

const getPizzaDetail = (identifier: string | number): void => {
    let selectedPizza;

    if (typeof identifier === "number")
        selectedPizza = menu.find(pizza => pizza.id === identifier);
    else
        selectedPizza = menu.find(pizza => pizza.name === identifier);

    console.log(selectedPizza);
};

addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

placeOrder("Chicken Bacon Ranch");
placeOrder("Pepperoni");
completeOrder(1);
placeOrder("Anchovy");
placeOrder("Veggie");
completeOrder(2);

getPizzaDetail(3);
getPizzaDetail("Pepperoni");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderHistory);