
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
let arrowDown = document.getElementsByClassName(".arrow_black_down");
document.getElementById('arrowAbout').onclick = function () {
    openContent ()
};
function openContent () {
    document.querySelector('.about__container').classList.toggle('open');
    document.querySelector('.arrow_black_down').classList.toggle('open');

}



