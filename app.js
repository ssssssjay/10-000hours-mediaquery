const expert =  document.querySelector('#expert');
const time = document.querySelector('#time');
const calcTime = document.querySelector('#calc-time');
const click = document.querySelector('#click');
const resultExpert = document.querySelector('#result-expert');
const resultTime = document.querySelector('#result-time');

click.addEventListener('click', paintResult);

function paintResult(event) {
  if (parseInt(time.value) > 24) {
    alert("하루 훈련시간이 너무 길어요!!")
  } else {
    event.preventDefault();
    resultExpert.innerText = expert.value;
    resultTime.innerText = Math.floor(10000 / parseInt(time.value));
    calcTime.classList.remove('hidden');
  }
}

// modal
let 모달 = false;
const clickModal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");
const bgModal = document.querySelector(".bg-modal");

clickModal.addEventListener('click', paintModal);

function paintModal(event) {
  event.preventDefault();
  if (모달 == false) {
    document.querySelector('.bg-modal').style.display = 'flex';
    모달 = true;
  }
}

closeModal.addEventListener('click', quitModal);

function quitModal(event) {
  event.preventDefault;
  if (모달 == true) {
    document.querySelector('.bg-modal').style.display = 'none';
    모달 = false;
  }
}