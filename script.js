const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'Aarav Lynn',
    job: 'Web developer',
    img: './img/user-1.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 6,
    name: 'Miyah Miles',
    job: 'Intern',
    img: './img/user-2.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 7,
    name: 'Francisco Gomes',
    job: 'Frontend developer',
    img: './img/user-3.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const userImg = document.querySelector('.user__img');
const userName = document.querySelector('.user__name');
const userJob = document.querySelector('.user__job');
const userDesc = document.querySelector('.user__desc');

const prevBtn = document.querySelector('.prev-btn');
const resetBtn = document.querySelector('.reset-btn');
const nextBtn = document.querySelector('.next-btn');

let currItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currItem];
  userImg.src = item.img;
  userName.textContent = item.name;
  userJob.textContent = item.job;
  userDesc.textContent = item.text;
});

function showPerson(person) {
  const item = reviews[person];
  userImg.src = item.img;
  userName.textContent = item.name;
  userJob.textContent = item.job;
  userDesc.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
  currItem++;
  if (currItem > reviews.length - 1) {
    currItem = 0;
  }
  showPerson(currItem);
});

prevBtn.addEventListener('click', function () {
  currItem--;
  if (currItem < 0) {
    currItem = reviews.length - 1;
  }
  showPerson(currItem);
});

resetBtn.addEventListener('click', function () {
  currItem = Math.floor(Math.random() * reviews.length);
  showPerson(currItem);
});
