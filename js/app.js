const closeSidebarBtn = document.querySelector(".close")
const openSidebarBtn = document.querySelector(".open")
const sidebar = document.querySelector(".sidebar")

closeSidebarBtn.addEventListener("click", ()=>{
    sidebar.style.left = "-100%";
    sidebar.style.overflow = "hidden"
    openSidebarBtn.style.opacity = "1"
})
openSidebarBtn.addEventListener("click", ()=>{
    sidebar.style.left = "5px";
    sidebar.style.overflow = "visible"
    openSidebarBtn.style.opacity = "0"
})
