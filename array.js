let Madison ={
    firstName: "Madi",
    lastName: "Bedwell",
    age: 31,
    eyeColor: "brown",
    married: true,
};
let Heather ={
    firstName: "Heather",
    lastName: "Austin",
    age: 29,
    eyeColor: "brown",
    married: true,
};
let Ammon ={
    firstName: "Ammon",
    lastName: "Latham",
    age: "dead",
    eyeColor: "black",
    married: false,
};
let Aaron ={
    firstName: "Aaron",
    lastName: "Latham",
    age: 26,
    eyeColor: "brown",
    married: "engaged",
};
let Hannah ={
    firstName: "Hannah",
    lastName: "Wong",
    age: 24,
    eyeColor: "green",
    married: true,
};
let Lauren ={
    firstName: "Lauren",
    lastName: "Smith",
    age: 22,
    eyeColor: "dark brown",
    married: true,
};
let Jonah ={
    name:{
        firstName: "Jonah",
        lastName: "Latham",
        middleName: "JR"
    },
        sibling:[Madison, Heather, Ammon, Aaron, Hannah, Lauren],
        age: 21,
        eyeColor: "brown",
        married: false,
};
const Family =[
    Madison, 
    Heather, 
    Ammon, 
    Aaron,
    Hannah,
    Lauren, 
    Jonah
]

let olderThan25 = (obj) => {
    if (obj.age > 25) {
        return true
    } else {
        return false
    }
}

const beOlderThan25 = olderThan25 (Aaron)

console.log(beOlderThan25)