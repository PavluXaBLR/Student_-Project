
/*document.getElementById("burger").onclick = function () {
    let openMenu = document.querySelector('.header__menu')
    openMenu.style.display = openMenu.style.display === 'block' ? 'none' : 'block';
};*/

let arrowDown = document.getElementsByClassName(".arrow_black_down");


document.getElementById("burger").onclick = function () {
    openBurger ()
};
function openBurger() {
    document.querySelector('.header__menu').classList.toggle('show');
    document.querySelector('.trigger').classList.toggle('show');
}


document.getElementById('arrowAbout').onclick = function () {
    openAbout ()
};
function openAbout () {
    document.querySelector('.about__container').classList.toggle('open');
    document.querySelector('.arrow_black_down').classList.toggle('open');
}

document.getElementById('arrowService').onclick = function () {
    openService ()
};
function openService () {
    document.querySelector('.service__container').classList.toggle('open');
    document.querySelector('.arrowService').classList.toggle('open');
}

document.getElementById('arrowPricing').onclick = function () {
    openPricing ()
};
function openPricing () {
    document.querySelector('.pricing__container').classList.toggle('open');
    document.querySelector('.arrowPricing').classList.toggle('open');
}

document.getElementById('arrowPricingFree').onclick = function () {
    openPricingFree ()
};
function openPricingFree () {
    document.querySelector('.price__free-trail').classList.toggle('open');
    document.querySelector('.arrowPricingFree').classList.toggle('open');
}
document.getElementById('arrowPricingBasic').onclick = function () {
    openPricingBasic()
};
function openPricingBasic () {
    document.querySelector('.price__basic').classList.toggle('open');
    document.querySelector('.arrowPricingBasic').classList.toggle('open');
}
document.getElementById('arrowPricingUltimates').onclick = function () {
    openPricingUltimates()
};
function openPricingUltimates () {
    document.querySelector('.price__ultimates').classList.toggle('open');
    document.querySelector('.arrowPricingUltimates').classList.toggle('open');
}
document.getElementById('arrowTeam').onclick = function () {
    openTeam()
};
function openTeam () {
    document.querySelector('.team__container').classList.toggle('open');
    document.querySelector('.arrowTeam').classList.toggle('open');
}
document.getElementById('arrowBlog').onclick = function () {
    openBlog()
};
function openBlog () {
    document.querySelector('.blog__container').classList.toggle('open');
    document.querySelector('.arrowBlog').classList.toggle('open');
}
document.getElementById('arrowContact').onclick = function () {
    openContact()
};
function openContact() {
    document.querySelector('.contact__container').classList.toggle('open');
    document.querySelector('.arrowContact').classList.toggle('open');
}

