let friends = [
    { firstName: "Alice", age: 25, ticket: "has ticket" },
    { firstName: "Bob", age: 17, ticket: "no ticket" },
    { firstName: "Charlie", age: 30, ticket: "has ticket" },
    { firstName: "Diana", age: 16, ticket: "has ticket" },
    { firstName: "Eve", age: 22, ticket: "has ticket" }
];

const snacks = ["popcorn", "soda", "candy", "nachos", "hotdog"];

const snacks2 = ["pickles", "pretzels", "fruit cup", "chocolate", "chips"];

//filter

let allowedFriends = friends.filter(megobrebi => megobrebi.age >= 18 && megobrebi.ticket === "has ticket");
console.log(allowedFriends);

//map

let onlynames = allowedFriends.map(allowedFriends => allowedFriends.firstName)
console.log(onlynames);

//reduce

let friendcount = onlynames.reduce((total, curr) => total + 1, 0);
console.log(friendcount);

//concat

let FullSnackList = snacks.concat(snacks2);
console.log(FullSnackList);


if (allowedFriends.length === 0) {
        console.log("Movie night is canceled!")

}
else {
    console.log(`We have ${friendcount} friends coming: ${onlynames.join(", ")}`, )
    console.log(`Snacks: ${FullSnackList.join(", ")}`)
}
