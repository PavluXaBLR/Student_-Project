
    document.getElementById("trigger").onclick = function () {
        let openMenu = document.querySelector('.menu__list')
        openMenu.style.display = openMenu.style.display === 'block' ? 'none' : 'block';
    };
    /*document.getElementById("trigger").onclick = function () {
        open ()
    };*/
function open() {
    document.querySelector('.menu__list').classList.toggle("show");
}
