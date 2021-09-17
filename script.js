slides = [
    {
        tag: 'Accessories',
        header: 'Bottle Grinder, Grinder Bottle',
        image: './images/sliderimage.png',
    },
    {
        tag: 'Accessories',
        header: 'Not a bottle Grinder, even not a Grinder Bottle',
        image: './images/sliderimage.png',
    },
    {
        tag: 'Did you expect to see something useful?',
        header: 'I dunno what this thing doing here',
        image: './images/sliderimage.png',
    }
]

currentPosition = 0;
isBurgerCLicked = false;
isBurgerSubHeaderClicked = false;

function burgerMenuSubHeader(event) {
    isBurgerSubHeaderClicked = !isBurgerSubHeaderClicked;
    event.target.parentElement.nextElementSibling.setAttribute('class', isBurgerSubHeaderClicked ? "burger-menu" : "mobile-empty");
}

function slider() {

    let slideContainer = document.createElement('div');
    slideContainer.setAttribute('class', 'slide-container slide-right');

    let slidePlateWrapper = document.createElement('div');
    slidePlateWrapper.setAttribute('class', 'slider-plate-wrapper');

    let sliderPlateCover = document.createElement('img');
    sliderPlateCover.setAttribute('class', 'slider-plate-cover');

    let sliderPlateContainer = document.createElement('div');
    sliderPlateContainer.setAttribute('class', 'slider-plate-container');

    let sliderPlateInformation = document.createElement('div');
    sliderPlateInformation.setAttribute('class', 'slider-plate-information');

    let sliderTag = document.createElement('div');
    sliderTag.setAttribute('class', 'slider-tag-font');
    let sliderHeader = document.createElement('div');
    sliderHeader.setAttribute('class', 'slider-header-font');
    let sliderButton = document.createElement('div');
    sliderButton.setAttribute('class', 'shop-button work-sans-font');

    sliderTag.append(slides[currentPosition].tag);
    sliderHeader.append(slides[currentPosition].header);
    sliderButton.append("SHOP NOW");

    sliderPlateInformation.appendChild(sliderTag);
    sliderPlateInformation.appendChild(sliderHeader);
    sliderPlateInformation.appendChild(sliderButton);

    sliderPlateContainer.appendChild(sliderPlateInformation);
    slidePlateWrapper.appendChild(sliderPlateContainer);
    sliderPlateCover.setAttribute('src', slides[currentPosition].image);
    slideContainer.appendChild(slidePlateWrapper);
    slideContainer.appendChild(sliderPlateCover);

    return slideContainer;
}

function plusCounter() {
    document.getElementById('slider').innerHTML = '';
    currentPosition++;
    if (currentPosition > slides.length - 1) {
        currentPosition = 0;
        document.getElementById('slider').append(slider(slides, currentPosition));
    } else {
        document.getElementById('slider').append(slider(slides, currentPosition));
    }
}

function minusCounter() {
    document.getElementById('slider').innerHTML = '';
    currentPosition--;
    if (currentPosition < 0) {
        currentPosition = slides.length - 1;
        document.getElementById('slider').append(slider(slides, currentPosition));
    } else {
        document.getElementById('slider').append(slider(slides, currentPosition));
    }
}

function burgerMenu() {
    isBurgerCLicked = !isBurgerCLicked;
    document.getElementById('mobile-burger__icon').setAttribute('class', isBurgerCLicked ? "fas fa-times" : "fas fa-bars")
    document.getElementById('mobile-burger').setAttribute('class', isBurgerCLicked ? 'js-burger-menu--active' : 'js-burger-menu');
}

document.getElementById('slider').append(slider(slides, currentPosition));