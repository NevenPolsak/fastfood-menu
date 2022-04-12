const menuItems = [
  {
    id: 1,
    item: "Food Item1",
    oneLiner: "One: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/pizza.jpg",
    restaurant: "Restaurant name1",
    desc: "One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit ratione excepturi incidunt rem a corrupti maiores ipsum tenetur.",
  },
  {
    id: 2,
    item: "Food Item2",
    oneLiner: "Two: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/fries.jpg",
    restaurant: "Restaurant name2",
    desc: "Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit ratione excepturi incidunt rem a corrupti maiores ipsum tenetur.",
  },
  {
    id: 3,
    item: "Food Item3",
    oneLiner:
      "Three: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/taco.jpg",
    restaurant: "Restaurant name3",
    desc: "Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit ratione excepturi incidunt rem a corrupti maiores ipsum tenetur.",
  },
  {
    id: 4,
    item: "Food Item4",
    oneLiner: "Four: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/hamburger.jpg",
    restaurant: "Restaurant name4",
    desc: "Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit ratione excepturi incidunt rem a corrupti maiores ipsum tenetur.",
  },
  {
    id: 5,
    item: "Food Item5",
    oneLiner: "Five: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "images/kebab.jpg",
    restaurant: "Restaurant name5",
    desc: "Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo blanditiis velit ratione excepturi incidunt rem a corrupti maiores ipsum tenetur.",
  },
];

const item = document.getElementById("item");
const oneLiner = document.getElementById("oneLiner");
const img = document.getElementById("img");
const restaurant = document.getElementById("restaurant");
const desc = document.getElementById("desc");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0;

window.addEventListener("DOMContentLoaded", function () {
  /*  
  let menu = menuItems[currentMenu];
  item.textContent = menu.item;
  oneLiner.textContent = menu.oneLiner;
  img.src = menu.img;
  restaurant.textContent = menu.restaurant;
  desc.textContent = menu.desc;
  */
  allMenu(currentMenu)
});

const allMenu = () =>{
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneLiner;
    img.src = menu.img;
    restaurant.textContent = menu.restaurant;
    desc.textContent = menu.desc;
}

//random menu
random.addEventListener("click",()=>{
currentMenu=Math.floor(Math.random()*menuItems.length)
allMenu(currentMenu)
})

//prev menu
prev.addEventListener("click",()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1
    }
    allMenu(currentMenu)
})

//next menu
next.addEventListener("click",()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0
    }
    allMenu(currentMenu)
})