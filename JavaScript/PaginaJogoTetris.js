class AppLayout
{
    constructor(props)
    {
        this.navEl = document.querySelector('nav');
        this.main = document.querySelector('main');
        this.menuContainer = document.querySelector(props.menuContainer);
        this.menuButton = document.querySelector(props.menuButton);
        this.menuRetractionButton = document.querySelector(props.menuRetractionButton);
        //this.menuButton.addEventListener('click', () => this.toggleMenu()); 
        //this.menuRetractionButton.addEventListener('click', () => this.retractMenu()); 
    }
    toggleMenu()
    {
        let menuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
        let mainWidth = 100 - ~~menuWidth.replace('vw', '') + 'vw';
        if (this.menuContainer.className === 'hidden')
        {
            this.main.style.width = mainWidth;
            this.main.style.left = menuWidth;
            this._changeClass(this.menuContainer, 'active');
        }
        else
        {
            this.main.style.width = '100vw';
            this.main.style.left = '0';
            this._changeClass(this.menuContainer, 'hidden');
        }
    }
    retractMenu()
    {
        let menuWidth = getComputedStyle(this.main).getPropertyValue('--retracted-menu-width');
        let activeMenuWidth = getComputedStyle(this.main).getPropertyValue('--opened-menu-width');
        let mainWidth = '90vw';
        if (this.menuContainer.className === 'active')
        {
            this._changeClass(this.menuContainer, 'retracted');
            this.main.style.width = mainWidth;
            this.main.style.left = menuWidth;
        }
        else
        {
            this._changeClass(this.menuContainer, 'active');
            console.log(100 - ~~activeMenuWidth.replace('vw', '') + 'vw');
            this.main.style.width = 100 - ~~activeMenuWidth.replace('vw', '') + 'vw';
            this.main.style.left = activeMenuWidth;
        }
    }
    _changeClass(el, clazz)
    {
        el.className = clazz;
    }
}
let appLayout = new AppLayout(
{
    menuContainer: '#menu',
    menuButton: '#menu-button',
    menuRetractionButton: '#menu-retract'
});