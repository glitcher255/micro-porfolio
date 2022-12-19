let is_on = Boolean

document.getElementsByClassName('hamburger_button')[0].addEventListener('click', function () {
   
    if (is_on === true) {
        document.getElementById('item_nav').style.display = 'none'
        document.getElementById('header').style.display = 'none'
        document.getElementsByTagName('body')[0].style.overflow = 'scroll'
        is_on = false
        console.log (is_on)
    }

    else {
    document.getElementById('item_nav').style.display = 'flex'
    document.getElementById('header').style.display = 'flex'
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    is_on = true
    console.log (is_on)
    }
})

function close_button() {
    if (screen.width < 768) {
    document.getElementById('item_nav').style.display = 'none'
    document.getElementById('header').style.display = 'none'
    document.getElementsByTagName('body')[0].style.overflow = 'scroll'
    is_on = false
    }
}