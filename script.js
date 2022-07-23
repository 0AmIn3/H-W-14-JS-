let artyomsPhone = {
    color: "red",
    memory: 128,
    model: "iphone",
    company: "Apple",
    ozu: 8,
    camera: "round",
    info: {
        id: 6543168312464,
        year: 2020,
    },
    prices: [1000, 700, 600],
    fullName: () => {
        console.log("hello");
    },
};

const user = {
    name: "Artyom",
    email: "sldkjhaslkdha",
    phone: 36546813,
};



let types = {
    number: [],
    string: [],
    object: [],
    boolean: [],
};


let newobj = Object.assign(artyomsPhone, user)
let allkeys = Object.keys(newobj)
let allvalues = Object.values(newobj)

let allall = Object.assign(allkeys, allvalues)


allall.filter(item => {
    let typof = typeof (item)

    if (types[typof]) {
        types[typof].push(item)
    }
})

console.log(types);

