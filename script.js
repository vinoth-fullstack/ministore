let container=document.getElementsByClassName("container");
let a =[
    {title:"FREE DELIEVERY",para:"Consectetur adipi elit lorem ipsum dolor sit amet."},
    {title:"QUANTITY GURANTEE",para:"Consectetur adipi elit lorem ipsum dolor sit amet."},
    {title:"DAILY OFFERS",para:"Consectetur adipi elit lorem ipsum dolor sit amet."},
    {title:"100% SECURE PAYMENTS",para:"Consectetur adipi elit lorem ipsum dolor sit amet."}
]
a.map(item=>{
    
    let div=document.createElement("div");
    let h4=document.createElement("h4");
    h4.innerText=item.title;
    let p=document.createElement("p");
    p.innerText=item.para;
    div.appendChild(h4);
    div.appendChild(p);
    container[0].appendChild(div);
})
let photos=document.getElementsByClassName("photos");
let b=[
    {pic:"https://themewagon.github.io/MiniStore/images/product-item1.jpg",title:"IPHONE 10",price:"$980"},
    {pic:"https://themewagon.github.io/MiniStore/images/product-item2.jpg",title:"IPHONE 11",price:"$110"},
    {pic:"https://themewagon.github.io/MiniStore/images/product-item3.jpg",title:"IPHONE 8",price:"$780"},
    {pic:"https://themewagon.github.io/MiniStore/images/product-item4.jpg",title:"IPHONE 13",price:"$1500"}

]

b.map(item=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=item.pic;
    let title=document.createElement("h3");
    title.innerText=item.title;
    let price=document.createElement("p");
    price.innerText=item.price;
    price.style.color="blue";


    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(price);
    photos[0].appendChild(div);

});

let items1=document.getElementsByClassName("items1");
let c=[
    {images:"https://themewagon.github.io/MiniStore/images/product-item6.jpg",heads:"PINK WATCH",amount:"$870"},
    {images:"https://themewagon.github.io/MiniStore/images/product-item7.jpg",heads:"HEAVY WATCH",amount:"$680"},
    {images:"https://themewagon.github.io/MiniStore/images/product-item8.jpg",heads:"SPOTTED WATCH",amount:"$750"},
    {images:"https://themewagon.github.io/MiniStore/images/product-item9.jpg",heads:"BLACK WATCH",amount:"$650"}

]
c.map(item=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=item.images;
    let h3=document.createElement("h3");
    h3.innerText=item.heads;
    let p=document.createElement("p");
    p.innerText=item.amount;
    p.style.color="blue";
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    items1[0].appendChild(div);
})
let items4=document.getElementsByClassName("items4");
let d=[
    {posts:"https://themewagon.github.io/MiniStore/images/post-item1.jpg",desc:"FEB 22, 2023 - GADGETS",inst:"GET SOME COOL GADGETS IN 2023"},
    {posts:"https://themewagon.github.io/MiniStore/images/post-item2.jpg",desc:"FEB 25, 2023 - TECHNOLOGY",inst:"TECHNOLOGY HACK YOU WON'T GET"},
    {posts:"https://themewagon.github.io/MiniStore/images/post-item3.jpg",desc:"FEB 22, 2023 - CAMERA",inst:"TOP 10 SMALL CAMERA IN THE WORLD"}
]
d.map(item=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=item.posts;
    let h3=document.createElement("h5");
    h3.innerText=item.desc;
    let p=document.createElement("p");
    p.innerText=item.inst;
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    items4[0].appendChild(div);
});

let pictures=document.getElementsByClassName("pictures");
let e=[
    {pictures:"https://themewagon.github.io/MiniStore/images/insta-item1.jpg"},
    {pictures:"https://themewagon.github.io/MiniStore/images/insta-item2.jpg"},
    {pictures:"https://themewagon.github.io/MiniStore/images/insta-item3.jpg"},
    {pictures:"https://themewagon.github.io/MiniStore/images/insta-item4.jpg"},
    {pictures:"https://themewagon.github.io/MiniStore/images/insta-item5.jpg"},

]
e.map(item=>{
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=item.pictures;
    div.appendChild(img);
    pictures[0].appendChild(div);
});
function toggleMenu() {
    var list = document.querySelector('.list');
    list.classList.toggle('open');
}







