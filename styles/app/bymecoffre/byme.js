  function toggleImage(imageId) {
    var image = document.getElementById(imageId);
    image.style.display = (image.style.display === 'none' || image.style.display === '') ? 'block' : 'none';
  }