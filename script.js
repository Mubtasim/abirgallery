let thumbnail = document.getElementById('thumbnailId');
let width = thumbnail.clientWidth;
let height = thumbnail.clientHeight;
let hoverEl = document.getElementById('hoverId');
let widthpx = width.toString()+'px';
let heightpx = height.toString()+'px';
hoverEl.style.width = widthpx;
hoverEl.style.height = heightpx;
let slider = document.getElementById('sliderId');
hoverEl.addEventListener('click', () => {
    slider.style.display = 'block';
    slider.style.visibility = 'visible';
    slider.style.opacity = '1';
    hoverEl.style.display = 'none';
})

function hid() {
    hoverEl.style.display = 'flex';
    slider.style.visibility = 'hidden';
    slider.style.opacity = '0';
    setTimeout(() => {
        slider.style.display = 'none';
    }, 510);
}

slider.addEventListener('click', hid);

let allImages = [];
let captions = [];
let images = [];
for(let i = 1; i < slider.childNodes.length; i+=2) {
    allImages.push(slider.childNodes[i]);
    allImages[allImages.length-1].style.display = 'none';
    captions[allImages.length-1] = allImages[allImages.length-1].childNodes[3].childNodes[3];
    images[allImages.length-1] = allImages[allImages.length-1].childNodes[3].childNodes[1];
}
images.forEach(el => {
    el.addEventListener('mouseover',() => {
        slider.removeEventListener('click',hid);
    });
    el.addEventListener('mouseout',() => {
        slider.addEventListener('click',hid);
    });
})
allImages[0].style.display = 'flex';
allImages[0].classList.add('visible');
captions[0].style.display = 'block';
captions[0].classList.add('visible');
let total = allImages.length;
let allButtons = [];
allImages.forEach(el => {
    // console.log(el);
    let nowButtons = [el.childNodes[1]];
    nowButtons.push(el.childNodes[5]);
    allButtons.push(nowButtons);
});
allButtons.forEach(el => console.log(el));


for(let i = 0; i < allButtons.length; i++) {
    allButtons[i][0].addEventListener('mouseover', () => {
        slider.removeEventListener('click',hid);
    })
    allButtons[i][1].addEventListener('mouseover', () => {
        slider.removeEventListener('click',hid);
    })
    allButtons[i][0].addEventListener('mouseout', () => {
        slider.addEventListener('click',hid);
    })
    allButtons[i][1].addEventListener('mouseout', () => {
        slider.addEventListener('click',hid);
    })
    allButtons[i][0].addEventListener('click', () => {
        // addPrev(allButtons[at][0],i);
        let at = i;
        allImages[at].classList.toggle('visible');
        captions[at].classList.remove('visible');
        setTimeout(() => {
            allImages[at].style.display = 'none';
            captions[at].style.display = 'none';
            at--;
            at %= total;
            at += total;
            at %= total;
            allImages[at].style.display = 'flex';
            allImages[at].classList.toggle('visible');
            captions[at].style.display = 'block';
            captions[at].classList.add('visible');
            captions[at].classList.remove('bottom');
        }, 510);
    });
    allButtons[i][1].addEventListener('click', () => {
        console.log('right button clicked');
        let at = i;
        allImages[at].classList.toggle('visible');
        captions[at].classList.remove('visible');
        setTimeout(() => {
            allImages[at].style.display = 'none';
            captions[at].style.display = 'none';
            at++;
            at %= total;
            allImages[at].style.display = 'flex';
            allImages[at].classList.toggle('visible');
            captions[at].style.display = 'block';
            captions[at].classList.add('visible');
            captions[at].classList.remove('bottom');
        }, 510);
    });
}

for(let i = 0; i < total; i++) {
    images[i].addEventListener('click',() => {
        captions[i].classList.toggle('visible');
        captions[i].classList.toggle('bottom');
    })
}
images.forEach(el => {
    console.log(el);
})