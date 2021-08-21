const hamburgerBtn = document.querySelector('.hamburgerBtn');
const menulist = document.querySelector('.menulist');
const iconlist=document.querySelector('.iconlist');

hamburgerBtn.addEventListener('click',()=>{
    menulist.classList.toggle('active');
    iconlist.classList.toggle('active');
});