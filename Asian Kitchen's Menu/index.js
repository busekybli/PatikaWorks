const menu = [
{
    id:1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
        "https://twoplaidaprons.com/wp-content/uploads/2022/12/close-top-down-of-tteokbokki-thumbnail.jpg",
     desc: `Spicy rice cakes, serving with fish cake.`,
},
{
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
    "https://assets.bonappetit.com/photos/6437281f4c497b684ece7ff3/1:1/w_2560%2Cc_limit/Recipe_Beauty_Gingery_Chicken_Ramen_0350.jpg" ,   
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
},
{
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
        "https://i.lezzet.com.tr/images-xxlarge-recipe/bibimbap-2d68e268-6c19-4ff8-b5f8-1145372450cf.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
},
{
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
        img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQARg8H4tOcOcv8RrKG3Q0UeB0Z9M4VmVSuNQ&usqp=CAU",
        desc: `Dan dan noodle, serving with green onion `,
},
{
    id: 5,
    title: "Jajangmyeon",
    category: "Korea",
        price: 15.99,
        img: 
             "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw26Fc5-n--1MKEbqOB2Pk17e-SucRovWYmA&usqp=CAU",
        desc: `Black bean sauce noodle, serving with green onion `,
},
{
    id: 6,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYx-6_UHE4Xb4jJ_PLxKwt9oG9KpgWefNaeQ&usqp=CAU",
    desc: `Red bean paste dessert, serving with honey.`,
},
{
    id: 7,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Zece5nDC2RXm9hETv_d7aVBHjgVzIWpXaw&usqp=CAU",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
},
{
    id: 8,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwPNQ7bW0CB657czoBG3zTyScYIfNwdXI8g&usqp=CAU",
    desc: `Rice Sandwich, serving with soy sauce`,
}
];
 
// -Butonlar-
    const container = document.querySelector('.btn-container');

    const buttonAll = document.createElement('button');
    buttonAll.textContent= 'All';
    buttonAll.classList.add('btn', 'btn-outline-danger', 'btn-item');
    buttonAll.setAttribute('type', 'button');
    container.appendChild(buttonAll);

    const buttonKorea =document.createElement('button');
    buttonKorea.textContent= 'Korea';
    buttonKorea.classList.add('btn', 'btn-outline-danger', 'btn-item');
    buttonKorea.setAttribute('type', 'button');
    container.appendChild(buttonKorea);

    const buttonJapan = document.createElement('button');
    buttonJapan.textContent = 'Japan';
    buttonJapan.classList.add('btn', 'btn-outline-danger', 'btn-item');
    buttonJapan.setAttribute('type', 'button');
    container.appendChild(buttonJapan);

    const buttonChina = document.createElement('button');
    buttonChina.textContent = 'China';
    buttonChina.classList.add('btn', 'btn-outline-danger', 'btn-item');
    buttonChina.setAttribute('type', 'button');
    container.appendChild(buttonChina);

    const filterCategory =(category) => {
        if (category=== 'All') return menu;
        return menu.filter((item) => item.category === category);
    }
    
    const menuContainer= document.getElementById('menu-container');
    const showMenu =(menuList) => {
        menuContainer.innerHTML ="";
        menuList.forEach(item => {
            const menuItem =document.createElement('div');
            menuItem.classList.add('menu-items', 'col-lg-6', 'col-sm-12');
            menuItem.innerHTML= `
            <img src="${item.img}" alt="${item.title}" class="photo">
            <div class="menu-info">
            <div class="menu-title">
                <h4>${item.title}</h4>
                <h4>${item.price}</h4>
            </div>
            <p class="menu-text">${item.desc}</p>
            </div>
            `;
            menuContainer.appendChild(menuItem);
        });
    }

    const eventHandler =(filterText) => {
        showMenu(filterCategory(filterText));
    }

    buttonAll.addEventListener("click", () => eventHandler("All"));
    buttonJapan.addEventListener("click", () => eventHandler("Japan"));
    buttonKorea.addEventListener("click", () => eventHandler("Korea"));
    buttonChina.addEventListener("click", () => eventHandler("China"));

    window.addEventListener("DOMContentLoaded", () => {
        eventHandler("All");
    });