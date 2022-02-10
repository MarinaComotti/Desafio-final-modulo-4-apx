function footerComponent (footerEl){
    const newFooterEl = document.createElement("div");
    newFooterEl.innerHTML= `<img src="./Logo/Logo (2).png" alt="Logo" class="footer__logo">
<div class="footer__container-social-medias">
    <div class="footer__social-medias">
        <a href="https://www.instagram.com/" class="social-medias__title">Instagram</a>
        <img src="./components/instagram.png" alt="instagram-logo" class="social-medias__logo">
    </div>
    <div class="footer__social-medias">
        <a href="https://ar.linkedin.com/" class="social-medias__title">Linkedin</a>
        <img src="./components/linkedin.png" alt="linkedin-logo" class="social-medias__logo">
    </div>
    <div class="footer__social-medias">
        <a href="https://github.com/" class="social-medias__title">Github</a>
        <img src="./components/github.png" alt="github-logo" class="social-medias__logo">
    </div>
</div>`

    footerEl.appendChild(newFooterEl);
    newFooterEl.classList.add("newFooter");

}

