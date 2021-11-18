
/*document.getElementById("burger").onclick = function () {
    let openMenu = document.querySelector('.header__menu')
    openMenu.style.display = openMenu.style.display === 'block' ? 'none' : 'block';
};*/


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

/*document.getElementById('arrowService').onclick = function () {
    openService ()
};
function openService () {
    document.querySelector('.service__container').classList.toggle('open');
    document.querySelector('.arrowService').classList.toggle('open');
}*/

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



/* Проверка заполннеия формы обратной связи */

function check() {
let firstname = document.getElementById('firstname').value;
let email = document.getElementById('e-mail').value;
let phone = document.getElementById('phone').value;

if (firstname && email && phone)
    {
    document.getElementById('buttonForm').disabled = false;
    } else {
    document.getElementById('buttonForm').disabled = true;
    }
}


/* Team block Профиль блок , изменение положения*/

document.getElementById('teamButtonProfileOne').onclick = function () {

    let teamProfileBlock = document.querySelector('.team__profile-block');
    teamProfileBlock.style.justifyContent = teamProfileBlock.style.justifyContent ==='flex-start' ? 'flex-start' : 'flex-start';

};



document.getElementById('teamButtonProfileTwo').onclick = function () {
    let documentElement = document.documentElement;
    documentElement.clientWidth >= '1023' ? document.getElementById('teamButtonProfileTwo').disabled = false :
        document.getElementById('teamButtonProfileTwo').disabled = true;
    let teamProfileBlock = document.querySelector('.team__profile-block');
    teamProfileBlock.style.justifyContent = teamProfileBlock.style.justifyContent ==='center' ? 'center' : 'center';
    console.log(documentElement)
};

document.getElementById('teamButtonProfileThree').onclick = function () {
    let teamProfileBlock = document.querySelector('.team__profile-block');
    teamProfileBlock.style.justifyContent = teamProfileBlock.style.justifyContent ==='flex-end' ? 'flex-end' : 'flex-end';
};

/* Кнопака вида сервиса */

/*document.getElementById("service__button_open").onclick = function () {
    openServiceAll()
};
function openServiceAll() {
    document.querySelector('.service__container').classList.toggle('openAll');
    document.querySelector('.arrowService').classList.toggle('openAll');
}*/

let arrowService = document.getElementById('arrowService')
let serviceButtonOpen = document.getElementById('service__button_open')
let serviceBlock = document.querySelector('.service__block');
let serviceContainer = document.querySelector('.service__container');
let serviceContainerHeightStyle = document.querySelector('.service__container');


serviceButtonOpen.onclick = function () {
    serviceBlock.style.overflow = serviceBlock.style.overflow ==='auto' ? 'auto' : 'auto';
    // serviceContainerHeightStyle = serviceContainerHeightStyle === '960px' ? '1680px' : '960px' ;
    let serviceButtonOpen = document.querySelector('#service__button_open');
    serviceButtonOpen.style.display = serviceButtonOpen.style.display === 'none' ? 'flex' : 'none';
};

arrowService.onclick = function () {
    openService ()
};
function openService () {

    serviceContainerHeightStyle.style.height = serviceContainerHeightStyle.style.height ==='960px' ? '240px' : '960px';

    // serviceButtonOpen = document.querySelector('#service__button_open');

    // serviceBlock.style.overflow = serviceBlock.style.overflow ==='visible' ? 'auto' : 'visible';

    document.querySelector('.arrowService').classList.toggle('open');
}




// console.log(document.querySelector('.team__profile-block').style)
let computedStyle = getComputedStyle(document.querySelector('.team__profile-block'));
// console.log(computedStyle.width)

let documentElement;

// console.log(document.documentElement.clientWidth)