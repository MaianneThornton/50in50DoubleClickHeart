const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let timesClicked = 0


let clickTime = 0

// Creating a double click addEventListener type
loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        // if new date time is less than 800ms
        if ((new Date().getTime() - clickTime) < 800) {
            // console.log(123);
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    // console.log('x:',x, 'y:',y);

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    // console.log('leftOffset:',leftOffset, 'topOffset:',topOffset);

    // x & y values *inside* the image
    const xInside = x - leftOffset
    const yInside = y - topOffset

    // console.log('xInside:', xInside, 'yInside:',yInside);

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerText = ++timesClicked

    // Removes extra heart elements from the DOM after 1 sec
    setTimeout(() => heart.remove(), 1000);
}
