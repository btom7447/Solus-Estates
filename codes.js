// GOOGLE MAPS API 
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.7128, lng: -74.0060 },
        zoom: 12 
    });
}

// SCROLL TO TOP
const scrollToTopButton = document.getElementById('scrollToTopButton');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 800) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });
    scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// HAMBURGER NAV 
let isOpen = false;

function toggleNav() {
    isOpen = !isOpen;
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const header = document.querySelector('header');

    if (isOpen) {
        bar1.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'rotate(45deg) translate(-5px, -6px)';
        header.style.transform = 'translateY(0)';
        header.style.display = 'block'
    } else {
        bar1.style.transform = 'none';
        bar2.style.opacity = '1';
        bar3.style.transform = 'none';
        header.style.transform = 'translateY(-30rem)';
    }
}

// ACCORDION BUTTONS
const accordionButtons = document.querySelectorAll('.accordionButton');
const accordionContents = document.querySelectorAll('.accordionContent');

accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');

        content.style.display = (content.style.display === 'block') ? 'none' : 'block';

        accordionButtons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.border = '';
            btn.style.color = '';
            btn.querySelector('i').classList.remove('fa-minus-square');
            btn.querySelector('i').classList.add('fa-plus-square');

            const otherContent = btn.nextElementSibling;
            if (otherContent !== content) {
                otherContent.style.display = 'none';
            }
        });

        if (content.style.display === 'block') {
            this.style.backgroundColor = '#ffffff';
            this.style.border = 'solid 2px #ecb233';
            this.style.color = '#ecb233';
            icon.classList.remove('fa-plus-square');
            icon.classList.add('fa-minus-square');
        } else {
            this.style.backgroundColor = '';
            this.style.border = '';
            this.style.color = '';
            icon.classList.remove('fa-minus-square');
            icon.classList.add('fa-plus-square');
        }
    });
});