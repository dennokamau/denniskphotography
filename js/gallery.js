var galleryImages = document.querySelectorAll('.gallery img');
var modal = document.querySelector('.modal');
var modalImage = document.getElementById('modalImage');
var closeBtn = document.querySelector('.close');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');
var currentIndex = 0;

function openModal(index) {
  modal.style.display = 'block';
  showImage(index);
}

function closeModal() {
  modal.style.display = 'none';
}

function showImage(index) {
  currentIndex = index;
  var imageSrc = galleryImages[index].getAttribute('src');
  var imageAlt = galleryImages[index].getAttribute('alt');
  modalImage.setAttribute('src', imageSrc);
  modalImage.setAttribute('alt', imageAlt);
}

function showPrevious() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}

galleryImages.forEach(function (image, index) {
  image.addEventListener('click', function () {
    openModal(index);
  });
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevious);
nextBtn.addEventListener('click', showNext);