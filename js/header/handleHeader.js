export const handShowNavMobile = () => {
    const iconMenu = document.querySelector('.hd__menu__icon');
    const headerModalMobile = document.querySelector('.hd__modal');

    console.log(iconMenu);

    iconMenu.addEventListener('click', () => {
        headerModalMobile.style.transform = 'translateX(0%)';
    });

    headerModalMobile.addEventListener('click', () => {
        headerModalMobile.style.transform = 'translateX(-100%)';
    });
};
