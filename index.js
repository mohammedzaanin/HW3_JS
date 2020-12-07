const my_data = [
    {
        "id": "0001",
        "type": "donut",
        "name": "Cake",
        "ppu": 0.78,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" },
                    { "id": "1003", "type": "Blueberry" },
                    { "id": "1004", "type": "Devil's Food" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0002",
        "type": "donut",
        "name": "Raised",
        "ppu": 0.55,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    },
    {
        "id": "0003",
        "type": "donut",
        "name": "Old Fashioned",
        "ppu": 0.26,
        "batters":
        {
            "batter":
                [
                    { "id": "1001", "type": "Regular" },
                    { "id": "1002", "type": "Chocolate" }
                ]
        },
        "topping":
            [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
            ]
    }
]
var my_array_topping = []
for (var i of my_data) {
    for (var j of i["topping"]) {
        if (!my_array_topping.includes(j["type"])) {
            my_array_topping.push(j["type"])
        }
    }
}
console.log(my_array_topping);
var my_array_batter = []
for (var i of my_data) {
    for (var j of i["batters"]["batter"]) {
        if (!my_array_batter.includes(j["type"])) {
            my_array_batter.push(j["type"])
        }
    }
}
console.log(my_array_batter);
var sum = 0
for (var i of my_data) {
    sum += i["ppu"]
}
var avg = sum / my_data.length
console.log(avg);
console.log(sum);

var all_id = []
for (var i of my_data) {
    all_id.push(i.id)
    for (var j of i["topping"]) {
        if (!all_id.includes(j.id)) {
            all_id.push(j.id)
        }
    }
    for (var k of i["batters"]["batter"]) {
        if (!all_id.includes(k.id)) {
            all_id.push(k.id)
        }
    }
}
console.log(all_id);
