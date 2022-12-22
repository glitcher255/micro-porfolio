let is_on = Boolean

document.getElementsByClassName('hamburger_button')[0].addEventListener('click', function () {
   
    if (is_on === true) {
        document.getElementById('item_nav').style.display = 'none'
        document.getElementById('header').style.display = 'none'
        document.getElementsByClassName('hamburger_button')[0].background = "#3c3a39"
        document.getElementById('hamburger_button_x').style.display = "none"
        document.getElementsByTagName('body')[0].style.overflow = 'scroll'
        is_on = false
    }

    else {
    document.getElementById('item_nav').style.display = 'flex'
    document.getElementById('header').style.display = 'flex'
    document.getElementsByClassName('hamburger_button')[0].background = "none"
    document.getElementById('hamburger_button_x').style.display = "block"
    document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    is_on = true
    }
})

function close_button() {
    if (screen.width < 768) {
    document.getElementById('item_nav').style.display = 'none'
    document.getElementById('header').style.display = 'none'
    document.getElementById('hamburger_button_x').style.display = "none"
    document.getElementsByTagName('body')[0].style.overflow = 'scroll'
    is_on = false
    }
}


const card_info = {
    image: ["./assets/1Placeholder.svg", "./assets/2ndPlaceholder.svg", "./assets/3rdPlaceholder.svg", "./assets/1Placeholder.svg", "./assets/2ndPlaceholder.svg", "./assets/3rdPlaceholder.svg"],
    name: ["Profesional Art Printing Data More", "Data Dashboard Healthcare", "Website Protfolio", "Profesional Art Printing Data More", "Data Dashboard Healthcare", "Website Protfolio"],
    description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard","A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard"],
    live_link: ["https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html","https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html"],
    source_link: ["https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio", "https://github.com/DavidCazco36/My-Portfolio"],
    technologies: [{
        tech_stack:["html", "bootstrap", "Ruby"]
    }]
    }
    


//Loop for repeat of card creation
for (let xy = 0; xy < 6; xy++){
    //creation step
    let cloned_clone = document.getElementsByClassName("card_clone")[0].cloneNode(true)
    document.getElementById("frame43").appendChild(cloned_clone)

        
    //card filling info with card_info array
        document.getElementsByClassName("desktop_card_img_class")[xy].src = card_info.image[xy]
        document.getElementsByClassName("desktop_card_title")[xy].innerHTML = card_info.name[xy]
        document.getElementsByClassName("card_secondary")[xy].innerHTML = card_info.description[xy]
        document.getElementsByClassName("card_btns1")[xy].innerHTML = card_info.technologies[0].tech_stack[0]
        document.getElementsByClassName("card_btns2")[xy].innerHTML = card_info.technologies[0].tech_stack[1]
        document.getElementsByClassName("card_btns3")[xy].innerHTML = card_info.technologies[0].tech_stack[2]

    
        //add event listener to each card's button for the popup and fill popup info
        document.getElementsByClassName('action_btns')[xy].addEventListener('click', function popup_manager () {
        
            document.getElementById("popup-container").style.display = "flex"
        
            document.getElementById("p-button-container-text").innerHTML = card_info.description[xy]
            document.getElementById("img-project").src = card_info.image[xy]
            document.getElementById("popup-title").innerHTML = card_info.name[xy]
            document.getElementById("live-link").href = card_info.live_link[xy]
            document.getElementById("source-link").href = card_info.source_link[xy]
        
            document.getElementById('popup-tag1').innerHTML = card_info.technologies[0].tech_stack[0]
            document.getElementById('popup-tag2').innerHTML = card_info.technologies[0].tech_stack[1]
            document.getElementById('popup-tag3').innerHTML = card_info.technologies[0].tech_stack[2]
        
        })

}




//x icon on popup container to close
document.getElementById("cancel-icon").addEventListener('click', function() {
    document.getElementById("popup-container").style.display = "none"

})


let form_error

document.getElementsByClassName("form_email")[0].addEventListener('blur', function() {
    let lowercased = document.getElementsByClassName("form_email")[0].value.toLowerCase()
    if (document.getElementsByClassName("form_email")[0].value != lowercased) {
        document.getElementById('form_email_error').innerHTML = ""
        form_error = true
    }
    else {
        document.getElementById('form_email_error').innerHTML = ""
        form_error = false
    }
})

document.getElementById('form').addEventListener('submit', function(q) {
    q.preventDefault()
    if (form_error != true) {
        document.getElementById("form_submit").submit();
    }
})

document.getElementById('form_button').addEventListener('click', function() {
    if (form_error === true) {
    document.getElementById('form_email_error').innerHTML = "Use lower caps for email input"
    }
})