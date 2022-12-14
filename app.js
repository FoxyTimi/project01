const result=document.querySelector(".result");
const orders = [

    {
        id: 1,
        pizza: "Hawaii",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        pizza: "Kukoricás",
        extra: "Gomba",
        ital: "Pepsi",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 3,
        pizza: "Négysajtos",
        extra: "Sajt",
        ital: "Sprite",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 4,
        pizza: "Húsos",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 5,
        pizza: "Gombás",
        extra: "Sajt",
        ital: "Sprite",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 6,
        pizza: "Vegetáriánus",
        extra: "Kukrica",
        ital: "Pepsi zero",
        ar: 1500,
        kep: "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

let output="";
orders.map((o) =>{
    output +=`
    <div class="order">
        <p>${o.id}</p>
        <p>Pizza: ${o.pizza}</p>
        <p>Extra: ${o.extra}</p>
        <p>Ital: ${o.ital}</p>
        <p>Ár: ${o.ar} Ft</p>
        <img src="${o.kep}">
    </div>
    `;
})

result.innerHTML=output;