const lsMob = document.querySelector('.cont-mob');
const jpText = document.querySelector('.cont-jp-text');
const smoke = document.querySelector('.cont-smoke');
const spray = document.querySelector('.cont-spray');
const head = document.querySelector('.cont-head');

window.addEventListener('scroll', event => {
    // this.direction = this.oldScroll < this.scrollY ? true : false;
    // if (this.direction !== this.oldDirection) {
    //     // drop speed to 0 on scroll direction change
    //     mobSpeed = 0;
    //     jpTextSpeed = 0;
    //     smokeSpraySpeed = 0;
    //     headSpeed = 0;
    // }

    // if (this.direction) {
    //     lsMob.style.transform = `translateY(${
    //         mobSpeed > limit ? limit : mobSpeed
    //     }px)`;
    //     jpText.style.transform = `translateY(${
    //         jpTextSpeed > limit ? limit : jpTextSpeed
    //     }px)`;
    //     smoke.style.transform = `translateY(-${
    //         smokeSpraySpeed > limit ? limit : smokeSpraySpeed
    //     }px)`;
    //     spray.style.transform = `translateY(${
    //         smokeSpraySpeed > limit ? limit : smokeSpraySpeed
    //     }px)`;
    //     head.style.transform = `translateY(${
    //         headSpeed > limit ? limit : headSpeed
    //     }px)`;
    // } else {
    //     lsMob.style.transform = `translateY(0px)`;
    //     jpText.style.transform = `translateY(0px)`;
    //     smoke.style.transform = `translateY(0px)`;
    //     spray.style.transform = `translateY(0px)`;
    //     head.style.transform = `translateY(0px)`;
    // }
    // mobSpeed += 2;
    // jpTextSpeed++;
    // smokeSpraySpeed += 5;
    // headSpeed += 3;
    // this.oldDirection = this.direction;
    // this.oldScroll = this.scrollY;

    let baseSpeed = pageYOffset / 55; //1px per scroll
    let mobSpeed = baseSpeed * 2;
    let jpTextSpeed = baseSpeed;
    let smokeSpraySpeed = baseSpeed * 5;
    let headSpeed = baseSpeed * 3;

    lsMob.style.transform = `translateY(${mobSpeed}px)`;
    jpText.style.transform = `translateY(${jpTextSpeed}px)`;
    smoke.style.transform = `translateY(-${smokeSpraySpeed}px)`;
    spray.style.transform = `translateY(${smokeSpraySpeed}px)`;
    head.style.transform = `translateY(${headSpeed}px)`;
});
