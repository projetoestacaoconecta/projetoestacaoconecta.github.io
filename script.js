import { data } from "./data.js"

// header
function checkHeaderState() {
  var header = document.querySelector('header');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add('stick', 'small');
  } else {
    header.classList.remove('stick', 'small');
  }
}

window.addEventListener('load', function() {
  checkHeaderState();
});

window.addEventListener('scroll', function() {
  checkHeaderState();
});


// modal
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modalContent');
const modalCloseButton = modal.querySelector('#modalCloseButton');
const modalImage = modal.querySelector('.image');
const modalTitle = modal.querySelector('.modalTitle');
const modalCardType = modal.querySelector('.modalCardType');
const modalTags = modal.querySelector('.cardTags');
const modalTagModel = modalTags.querySelector('.tagModel');
const modalLongDescription = modal.querySelector('.modalLongDescription');
const modalInstructors = modal.querySelector('.modalInstructors');
const modalInstrutorModel = modalInstructors.querySelector('.modalInstrutorModel');
const modalLocation = modal.querySelector('.modalLocation');
const modalButton = modal.querySelector('.modalButton');
const cardDurationValue = modal.querySelector('.cardDurationValue');

const modalBackground = document.getElementById('modalBackground');

const openModal = (cardData) => {
  document.body.style.overflow = 'hidden';

  //scroll modal
  setTimeout(() => {
    modalContent.scrollTop = 0;
  }, 0);

  modalTitle.innerHTML = cardData.title;
  modalCardType.innerHTML = cardData.cardType;
  modalImage.src = cardData.image;
  cardDurationValue.innerHTML = cardData.duration;

  modalTags.innerHTML = '';
  cardData.tags.forEach((tag) => {
    const newTag = modalTagModel.cloneNode(true);
    newTag.innerHTML = tag;
    modalTags.appendChild(newTag);
  })

  modalLongDescription.innerHTML = cardData.longDescription;

  modalInstructors.innerHTML = '';
  cardData.instructors.forEach((instructor) => {
    const newInstructor = modalInstrutorModel.cloneNode(true);
    newInstructor.querySelector('.instructorPhoto').src = instructor.photo;
    newInstructor.querySelector('.instructorName').innerHTML = instructor.name;
    modalInstructors.appendChild(newInstructor);
  })

  // modalUsefulLinks.innerHTML = '';
  // cardData.usefulLinks.forEach((usefulLink) => {
  //   const newUsefulLink = modalUsefulLinkModel.cloneNode(true);
  //   newUsefulLink.querySelector('.linkTitle').innerHTML = usefulLink.title;
  //   newUsefulLink.querySelector('.linkLink').href = usefulLink.url;
  //   newUsefulLink.querySelector('.linkLink').innerHTML = usefulLink.url;
  //   newUsefulLink.querySelector('.linkQr').src = usefulLink.qrCodeImage;
  //   modalUsefulLinks.appendChild(newUsefulLink);
  // })

  modalLocation.innerHTML = cardData.local;

  modalButton.href = cardData.subscribeButton;

  modal.classList.add('active');
}

const closeModal = () => {
  document.body.style.overflow = 'auto';
  modal.classList.remove('active');
}

modalCloseButton.addEventListener('click', closeModal);
modalBackground.addEventListener('click', closeModal);

console.log(modal)

const originalCard = document.getElementById('originalCard');

const fillContent = (cardsContainer, cardData) => {
  const cloneCard = originalCard.cloneNode(true);
  const cardTags = cloneCard.querySelector('.cardTags');
  const cardTagModel = cardTags.querySelector('.tagModel');

  cloneCard.id = cardData.id;
  cloneCard.querySelector('.cardTitle').innerHTML = cardData.title;
  cloneCard.querySelector('.cardShortDescription').innerHTML = cardData.shortDescription;
  cloneCard.querySelector('.cardButtonMore').addEventListener('click', () => openModal(cardData));
  cloneCard.querySelector('.cardImg').src = cardData.image;

  cardTags.innerHTML = '';
  cardData.tags.forEach((tag) => {
    const newTag = cardTagModel.cloneNode(true);
    newTag.innerHTML = tag;
    cardTags.appendChild(newTag);
  })

  cardsContainer.appendChild(cloneCard);
}


// oficinas
const oficinasElement = document.getElementById('oficinas');
const cardsOficina = oficinasElement.querySelector('.cards'); 
const oficinas = data.oficinas;

oficinas.forEach((oficina) => {
  fillContent(cardsOficina, oficina)
})


// courses
const coursesElement = document.getElementById('courses');
const cardsCourse = coursesElement.querySelector('.cards');
const courses = data.courses;

courses.forEach((course) => {
  fillContent(cardsCourse, course)
})


// workshops
const workshopsElement = document.getElementById('workshops');
const cardsWorkshop = workshopsElement.querySelector('.cards');
const workshops = data.workshops;

workshops.forEach((workshop) => {
  fillContent(cardsWorkshop, workshop)
})




