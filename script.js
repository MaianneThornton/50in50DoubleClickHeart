const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('.times')

let clickTime = 0

// Creating a double click addEventListener type
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        // if new date time is less than 800ms
        if((new Date().getTime() - clickTime) < 800) {
            // console.log(123);
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

