const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const navbar = document.querySelector("#navbar-mobile");
const btns = document.querySelectorAll(".btns");
const images = document.querySelectorAll(".img11");

bar.addEventListener("click", function(){
    navbar.classList.add("active");
});

close.addEventListener("click", function(){
    navbar.classList.remove("active");
});

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        let id = e.currentTarget.id;
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        images.forEach(function (image) {
            
            image.classList.remove("active");

            if (image.id.slice(0,-1) === btn.id) {
                image.classList.add("active");
            }
        });

        e.currentTarget.classList.add("active");
    });
});