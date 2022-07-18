let btn = document.getElementById("btn")
let action = document.getElementById('share-content')
btn.addEventListener('click', () =>{
    action.classList.toggle('share-content')
    // action.style.opacity = 0;
    btn.style.fill = "#fff"
})