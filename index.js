const burguer = document.getElementById('burguer');
const menus = document.getElementById('menus');

function clickMenu() {
    if (menus.style.display === 'flex') {
        menus.style.display = 'none';
        burguer.style.display = 'block';
    } else {
        menus.style.display = 'flex';
        burguer.style.display = 'none';
    }
}

document.querySelectorAll('#menus nav a, #menus .nav-link a').forEach(link => {
link.addEventListener('click', () => {
    menus.style.display = 'none';
    if (window.innerWidth < 1024) {
        burguer.style.display = 'flex';
    }
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
        burguer.style.display = 'none';
        menus.style.display = 'flex';
    } else {
        burguer.style.display = 'block';
        menus.style.display = 'none';
    }
});