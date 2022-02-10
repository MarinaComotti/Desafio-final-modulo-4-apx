function closeOpenWindowMenu (){
       const buttonOpenWindowMenu = document.querySelector(".header__menu__open-button");
    const menuContainerWindor = document.querySelector(".menu__container");
    buttonOpenWindowMenu.addEventListener("click", ()=>{
        menuContainerWindor.style.display= "initial";
    });
    const buttonCloseWindowMenu = document.querySelector(".menu__container__close-button");
    buttonCloseWindowMenu.addEventListener("click", ()=>{
        menuContainerWindor.style.display= "";
    })

}

function headerComponent(el){
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `<header class="header-container">
            <img src="./Logo/Logo (2).png" alt="Logo" class="header__logo">
            <button class="header__menu__open-button">
                <div class="menu__rectangulo"></div>
                <div class="menu__rectangulo"></div>
                <div class="menu__rectangulo"></div>
            </button>
            <div class="menu__container">
                    <button class="menu__container__close-button">X</button>
                    <div class="menu__container__links">
                        <a href="./portfolio.html" class="container__links__a">Portfolio</a>
                        <a href="./servicios.html" class="container__links__a">Servicios</a>
                        <a href="./contacto.html" class="container__links__a">Contacto</a>

                    </div>
            </div>
            <div class="menu__container-expanded">
                <a href="./portfolio.html" class="container__links__a expanded">Portfolio</a>
                <a href="./servicios.html" class="container__links__a expanded">Servicios</a>
                <a href="./contacto.html" class="container__links__a expanded">Contacto</a>
            </div>
        </header>`

    el.appendChild(headerEl);
     closeOpenWindowMenu()
    
    
}
