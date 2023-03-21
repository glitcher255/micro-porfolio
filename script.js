


let isOn = Boolean;

document.getElementsByClassName('hamburger_button')[0].addEventListener('click', () => {
  if (isOn === true) {
    document.getElementById('item_nav').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementsByClassName('hamburger_button')[0].background = '#3c3a39';
    document.getElementById('hamburger_button_x').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    isOn = false;
  } else {
    document.getElementById('item_nav').style.display = 'flex';
    document.getElementById('header').style.display = 'flex';
    document.getElementsByClassName('hamburger_button')[0].background = 'none';
    document.getElementById('hamburger_button_x').style.display = 'block';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    isOn = true;
  }
});

function closeButton() {
  if (window.screen.width < 768) {
    document.getElementById('item_nav').style.display = 'none';
    document.getElementById('header').style.display = 'none';
    document.getElementById('hamburger_button_x').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'scroll';
    isOn = false;
  }
}
document.getElementById('portf').addEventListener('click', closeButton());

const cardInfo = {
  image: ['./assets/1Placeholder.svg', './assets/2ndPlaceholder.svg', './assets/3rdPlaceholder.svg', './assets/1Placeholder.svg', './assets/2ndPlaceholder.svg', './assets/3rdPlaceholder.svg', './assets/Snapshoot Portfolio.svg', './assets/Img Placeholder.svg'],
  name: ['Profesional Art Printing Data More', 'Data Dashboard Healthcare', 'Website Protfolio', 'Profesional Art Printing Data More', 'Data Dashboard Healthcare', 'Website Protfolio', 'Multi-Post Stories'],
  description: ["A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard", "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text."],
  live_link: ['https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html'],
  source_link: ['https://github.com/DavidCazco36/My-Portfolio', 'https://github.com/DavidCazco36/My-Portfolio', 'https://github.com/DavidCazco36/My-Portfolio', 'https://github.com/DavidCazco36/My-Portfolio', 'https://github.com/DavidCazco36/My-Portfolio', 'https://github.com/DavidCazco36/My-Portfolio'],
  technologies: {
    tech_stack: { html: 'html', bootstrap: 'bootstrap', ruby: 'Ruby' },
    RB_tech_stack: {
      css: 'css', html: 'html', bootstrap: 'bootstrap', ruby: 'ruby',
    },
  },
  yellow_card: {
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.", image: './assets/Img Placeholder.svg', name: 'Multi-Post Stories', live_link: 'https://rawcdn.githack.com/glitcher255/micro-porfolio/3aef2ff8602559c098666dcf4522e7baa82ca27c/index.html', source_link: 'https://github.com/DavidCazco36/My-Portfolio',
  },
};

// Loop for repeat of card creation
for (let xy = 0; xy < 6; xy += 1) {
  // creation step
  const clonedClone = document.getElementsByClassName('card_clone')[0].cloneNode(true);
  document.getElementById('frame43').appendChild(clonedClone);

  // card filling info with cardInfo array
  document.getElementsByClassName('desktop_card_img_class')[xy].src = cardInfo.image[xy];
  document.getElementsByClassName('desktop_card_title')[xy].innerHTML = cardInfo.name[xy];
  document.getElementsByClassName('card_secondary')[xy].innerHTML = cardInfo.description[xy];
  document.getElementsByClassName('card_btns1')[xy].innerHTML = cardInfo.technologies.tech_stack.html;
  document.getElementsByClassName('card_btns2')[xy].innerHTML = cardInfo.technologies.tech_stack.bootstrap;
  document.getElementsByClassName('card_btns3')[xy].innerHTML = cardInfo.technologies.tech_stack.ruby;

  // add event listener to each card's button for the popup and fill popup info
  document.getElementsByClassName('action_btns')[xy].addEventListener('click', () => {
    document.getElementById('popup-container').style.display = 'flex';

    document.getElementById('p-button-container-text').innerHTML = cardInfo.description[xy];
    const avalue = 6;
    document.getElementById('img-project').src = cardInfo.image[avalue];
    document.getElementById('popup-title').innerHTML = cardInfo.name[xy];
    document.getElementById('live-link').href = cardInfo.live_link[xy];
    document.getElementById('source-link').href = cardInfo.source_link[xy];

    document.getElementById('popup-tag1').innerHTML = cardInfo.technologies.tech_stack.html;
    document.getElementById('popup-tag2').innerHTML = cardInfo.technologies.tech_stack.bootstrap;
    document.getElementById('popup-tag3').innerHTML = cardInfo.technologies.tech_stack.ruby;
    document.getElementById('popup-tag4').style.display = 'none';
  });
}

// x icon on popup container to close
document.getElementById('cancel-icon').addEventListener('click', () => {
  document.getElementById('popup-container').style.display = 'none';
});

// Yellow card
document.getElementById('btn_enable').addEventListener('click', () => {
  document.getElementById('popup-container').style.display = 'flex';

  document.getElementById('p-button-container-text').innerHTML = cardInfo.yellow_card.description;
  document.getElementById('img-project').src = cardInfo.yellow_card.image;
  document.getElementById('popup-title').innerHTML = cardInfo.yellow_card.name;
  document.getElementById('live-link').href = cardInfo.yellow_card.live_link;
  document.getElementById('source-link').href = cardInfo.yellow_card.source_link;

  document.getElementById('popup-tag1').innerHTML = cardInfo.technologies.RB_tech_stack.css;
  document.getElementById('popup-tag2').innerHTML = cardInfo.technologies.RB_tech_stack.html;
  document.getElementById('popup-tag3').innerHTML = cardInfo.technologies.RB_tech_stack.bootstrap;
  document.getElementById('popup-tag4').style.display = 'list-item';
  document.getElementById('popup-tag4').innerHTML = cardInfo.technologies.RB_tech_stack.ruby;
});

let formError;

document.getElementsByClassName('form_email')[0].addEventListener('blur', () => {
  const lowercased = document.getElementsByClassName('form_email')[0].value.toLowerCase();
  if (document.getElementsByClassName('form_email')[0].value !== lowercased) {
    document.getElementById('form_email_error').innerHTML = '';
    formError = true;
  } else {
    document.getElementById('form_email_error').innerHTML = '';
    formError = false;
  }
});

let userData = [];

document.getElementById('form').addEventListener('submit', (q) => {
  q.preventDefault();
  if (formError !== true) {
    // no user data found - creates user data
    userData = [document.getElementsByClassName('form_username')[0].value, document.getElementsByClassName('form_email')[0].value, document.getElementById('form_text_area').value];
    localStorage.setItem('userData', userData);

    document.getElementById('form_submit').submit();
  }
});

document.getElementById('form_button').addEventListener('click', () => {
  if (formError === true) {
    document.getElementById('form_email_error').innerHTML = 'Use lower caps for email input';
  }
});

// fill form with data if data already exists
if (localStorage.getItem('userData')) {
  const userDataArray = localStorage.getItem('userData').split(',');
  [document.getElementsByClassName('form_username')[0].value,
    document.getElementsByClassName('form_email')[0].value,
    document.getElementById('form_text_area').value] = userDataArray;
}

// localStorage.clear()
