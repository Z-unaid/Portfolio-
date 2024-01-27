console.log('Working');
// all sections
let homeSection = document.querySelector('.home-section'),
    aboutSection = document.querySelector('.about-section'),
    resumeSection = document.querySelector('.resume-section'),
    portfolioSection = document.querySelector('.portfolio-section'),
    personalSection = document.querySelector('.personal-section'),
    navSection = document.querySelector('.first-section'),
    headerNav = document.querySelector('.header');
let menuBar = document.querySelector('.nav'),
    navList = document.querySelector('.first-section'),
    navSide = document.querySelector('.nav-side'),
    topContainer = document.querySelector('.top-container');;

function navShow() {
    navList.style.width = '100%';
    menuBar.style.display = 'none';
}

function navHide() {
    navList.style.width = '0%';
    menuBar.style.display = 'flex';
}
menuBar.addEventListener('click', navShow);
navSide.addEventListener('click', navHide);

/* Nav Click Start */
let navClick = document.querySelector('.nav-click'),
    homeMenu = document.querySelector('.home'),
    aboutMenu = document.querySelector('.about'),
    resumeMenu = document.querySelector('.resume'),
    portfolioMenu = document.querySelector('.portfolio'),
    infoMenu = document.querySelector('.personal');
navClick.style.top = '6.69%';

function homeClick() {
    navClick.style.top = '6.69%';
    homeSection.style.display = 'block';
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'none';
    // portfolioSection.style.display = 'none';
    personalSection.style.display = 'none';
    headerNav.style.display = 'flex';

}

function aboutClick() {
    navClick.style.top = '25.3%';
    homeSection.style.display = 'none';
    aboutSection.style.display = 'block';
    resumeSection.style.display = 'none';
    // portfolioSection.style.display = 'none';
    personalSection.style.display = 'none';
    headerNav.style.display = 'flex';

}

function resumeClick() {
    navClick.style.top = '43.99%';
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'flex';
    //portfolioSection.style.display = 'none';
    personalSection.style.display = 'none';
    headerNav.style.display = 'none';
}

function portfolioClick() {
    navClick.style.top = '62.6%';
    window.open('https://z-unaid.github.io/Portfolio/', '_blank');
}

function personalClick() {
    navClick.style.top = '81.25%';
    homeSection.style.display = 'none';
    aboutSection.style.display = 'none';
    resumeSection.style.display = 'none';
    //  portfolioSection.style.display = 'none';
    personalSection.style.display = 'flex';
    headerNav.style.display = 'flex';

}

homeMenu.addEventListener('click', homeClick);
aboutMenu.addEventListener('click', aboutClick);
resumeMenu.addEventListener('click', resumeClick);
portfolioMenu.addEventListener('click', portfolioClick);
infoMenu.addEventListener('click', personalClick);
homeMenu.lastElementChild.style.userSelect = 'none';
aboutMenu.lastElementChild.style.userSelect = 'none';
resumeMenu.lastElementChild.style.userSelect = 'none';
infoMenu.lastElementChild.style.userSelect = 'none';
portfolioMenu.lastElementChild.style.userSelect = 'none';




// Back to Home buttons
let backToHomeAbout = aboutSection.querySelector('.fa-arrow-left'),
    backToHomeResume = resumeSection.querySelector('.fa-arrow-left'),
    backToHomePersonal = personalSection.querySelector('button');
backToHomeAbout.addEventListener('click', homeClick);
backToHomeResume.addEventListener('click', homeClick);
backToHomePersonal.addEventListener('click', homeClick);
/* Phone Number */
let contact = document.querySelector('.list2'),
    contactNo = document.querySelector('.contact-no');

function contactNoDisplay() {
    contactNo.style.height = '8vh';
    contactNo.children[2].classList.add('time-lineAnimation');
    setTimeout(contactNoHide, 20000);
}

function contactNoHide() {
    contactNo.style.height = '0vh';
    contactNo.children[2].classList.remove('time-lineAnimation');
}
contact.children[1].addEventListener('click', contactNoDisplay);
contactNo.children[1].addEventListener('click', contactNoHide);
/* WhatsApp */
function whatsapp() {
    window.open('https://wa.me/919690578859?text=Hii', '_blank');
}
contact.children[2].addEventListener('click', whatsapp);

/* Scroll section*/
let skill1 = document.querySelector('.skills-1'),
    leftArrow = document.querySelector('.left-scroll-arrow'),
    rightArrow = document.querySelector('.right-scroll-arrow'),
    cardsWidth = skill1.scrollWidth;
let cardMargin = window.getComputedStyle(skill1.children[0]);
leftArrow.addEventListener('click', leftScroll);
rightArrow.addEventListener('click', rightScroll);

function leftScroll() {
    /*skill1.scroll({
  top: 0,
  left: 370,
  behavior: "smooth",
});*/
    skill1.scrollLeft += cardsWidth;
    console.log(cardsWidth);
}

function rightScroll() {
    skill1.scrollLeft -= cardsWidth;
    console.log(cardsWidth);
}


/* Social media links  */
let socialMedia = document.querySelector('.social-media');
socialMedia.children[0].addEventListener('click', facebook);
socialMedia.children[1].addEventListener('click', instagram);
socialMedia.children[4].addEventListener('click', github);
socialMedia.children[3].addEventListener('click', twitter);
socialMedia.children[2].addEventListener('click', linkedin);
socialMedia.children[6].addEventListener('click', discord);
socialMedia.children[8].addEventListener('click', spotify);
socialMedia.children[7].addEventListener('click', youtube);

function facebook() {
    window.open('https://www.facebook.com/profile.php?id=100054876406368&mibextid=ZbWKwL', '_blank');
}

function instagram() {
    window.open('https://www.instagram.com/zunaid_6007?igsh=MWZ1MGF0ZXJmZzJyaQ==', '_blank');
}

function github() {
    window.open('https://github.com/coding-with-us', '_blank');
}

function twitter() {
    window.open('https://twitter.com/Junaid969057', '_blank');
}

function linkedin() {
    window.open('https://www.linkedin.com/in/zunaid-%E2%80%8E-ba25aa2a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
}

function discord() {
    window.open('https://discord.com/users/zunaid_6007', '_blank');
}

function spotify() {
    window.open('https://open.spotify.com/user/317wkpgmvp426e7kluf7ik5tpqm4?si=A2bgLQACT6eUv4ojjdhpAg', '_blank');
}
//YouTube section 
let youtubeChanel = document.querySelector('.youtube-chanels-div');

function youtube() {
    youtubeChanel.style.display = "flex";
    socialMedia.children[7].classList.add('youtube-game-animate');
    gameId.style.display = 'none';
    setTimeout(() => {
        socialMedia.children[7].classList.remove('youtube-game-animate');
    }, 1800);
    setTimeout(() => {
        topContainer.addEventListener('click', youtubeGameDivClose);
    }, 500);
    if (youtubeChanel.style.display === 'flex') {
        topContainer.removeEventListener('click', youtubeGameDivClose);
    }
}
youtubeChanel.lastElementChild.addEventListener('click', () => {
    youtubeChanel.style.display = 'none';
    socialMedia.children[7].classList.remove('youtube-game-animate');
});
//first Chanel 
youtubeChanel.children[0].addEventListener('click', () => {
    window.open('https://youtube.com/@crazyfactstft7924?si=hVb2AV8q4dWuF-_A', '_blank');
});
//second Chanel 
youtubeChanel.children[1].addEventListener('click', () => {
    window.open('https://youtube.com/@louttech?si=iz5FcHhJryT9jzMs', '_blank');
});
//third Chanel 
youtubeChanel.children[2].addEventListener('click', () => {
    window.open('https://youtube.com/@lout6007?si=qAcSX1fEHSRWbkQ_', '_blank');
})
//end YouTube 
//game section
socialMedia.children[9].addEventListener('click', gameFunc);
let gameId = document.querySelector('.gaming-div');

function gameFunc() {
    gameId.style.display = 'flex';
    socialMedia.children[9].classList.add('youtube-game-animate');
    setTimeout(() => {
        socialMedia.children[9].classList.remove('youtube-game-animate');
    }, 1800);
    youtubeChanel.style.display = "none";
    setTimeout(() => {
        topContainer.addEventListener('click', youtubeGameDivClose);
    }, 500);
    if (gameId.style.display === 'flex') {
        topContainer.removeEventListener('click', youtubeGameDivClose);
    }
}
gameId.lastElementChild.addEventListener('click', () => {
    gameId.style.display = 'none';
    socialMedia.children[9].classList.remove('youtube-game-animate');
});
//top container YouTube and gaming div close functions
function youtubeGameDivClose() {
    gameId.style.display = 'none';
    socialMedia.children[9].classList.remove('youtube-game-animate');
    youtubeChanel.style.display = 'none';
    socialMedia.children[7].classList.remove('youtube-game-animate');
}
// right arrow click function
socialMedia.children[5].addEventListener('click', rightArrowClick);

function rightArrowClick() {
    socialMedia.children[5].style.display = 'none';
    socialMedia.children[6].style.visibility = 'visible';
    socialMedia.children[7].style.visibility = 'visible';
    socialMedia.children[8].style.visibility = 'visible';
    socialMedia.children[9].style.visibility = 'visible';
    socialMedia.children[10].style.visibility = 'visible';
}
//Left arrow function
socialMedia.children[10].addEventListener('click', leftArrowClick);

function leftArrowClick() {
    socialMedia.children[5].style.display = 'inline';
    socialMedia.children[6].style.visibility = 'hidden';
    socialMedia.children[7].style.visibility = 'hidden';
    socialMedia.children[8].style.visibility = 'hidden';
    socialMedia.children[9].style.visibility = 'hidden';
    socialMedia.children[10].style.visibility = 'hidden';
    youtubeChanel.style.display = 'none';
    gameId.style.display = 'none';
}


// top section button
let contactMe = document.querySelector('.top-section-buttons');
contactMe.addEventListener('click', () => {
    window.location.href = '#contact-form';
});


//Bottom section links
let mailButton = document.querySelector('.address-info-email'),
    phone = document.querySelector('.address-info-phone'),
    locationButton = document.querySelector('.address-info-location'),
    locationPin = document.querySelector('#location-pin'),
    contactMeForm = document.querySelector('.contact-info'),
    locationPinCross = locationPin.querySelector('.pin-top-line');
// onclick events
mailButton.firstElementChild.addEventListener('click', () => {
    window.open('mailto: ja7667924@gmail.com');
});
phone.firstElementChild.addEventListener('click', () => {
    window.open('tel:+919690578859');
});
locationButton.firstElementChild.addEventListener('click', () => {
    locationPin.style.display = 'flex';
});
contactMeForm.addEventListener('click', () => {
    locationPin.style.display = 'none';
});
locationPinCross.firstElementChild.addEventListener('click', () => {
    locationPin.style.display = 'none';
});



// location system
let locPinInput = locationPin.querySelector('#enter-pin-input'),
    locPinBtn = locationPin.querySelector('#enter-pin-button'),
    wrongPin = document.querySelector('.alert'),
    wrongPinText = wrongPin.querySelector('.pin');

locationPin.addEventListener('submit', (event) => {
    event.preventDefault();
    let pIN = locPinInput.value;
    wrongPinText.innerText = pIN;
    if (pIN === "7323") {
        window.open('https://maps.app.goo.gl/3Gim9dv5Fjaj1tmw7', '_blank');
        locationPin.style.display = 'none';
        locPinInput.value = '';
        wrongPin.children[3].classList.remove('alertTimeLine');
    } else {
        wrongPinText.innerText = pIN;
        wrongPin.style.visibility = 'visible';
        wrongPin.style.transform = 'translateY(0%)';
        wrongPin.children[3].classList.add('alertTimeLine');
        wrongPin.children[3].style.display = 'block';
        locPinInput.value = '';
    }
    setTimeout(() => {
        wrongPin.style.visibility = 'hidden';
        wrongPin.style.transform = 'translateY(-100%)';
        wrongPin.children[3].classList.remove('alertTimeLine');
        wrongPin.children[3].style.display = 'none';
    }, 10000);
});
wrongPin.children[2].onclick = () => {
    wrongPin.style.visibility = 'hidden';
    wrongPin.style.transform = 'translateY(-100%)';
    wrongPin.children[3].classList.remove('alertTimeLine');
    wrongPin.children[3].style.display = 'none';
}
//do not rotate
let fullWidth = document.querySelector('body').offsetHeight;
console.log(fullWidth);