const area = document.getElementById('area');

area.addEventListener('click', function onClick(event) {
  const backgroundColor = area.style.backgroundColor;

  if (backgroundColor === 'rgb(255, 0, 0)') {
    area.style.backgroundColor = 'rgb(0, 0, 255)';

  } else {
    area.style.backgroundColor = 'rgb(255, 0, 0)';

  }
});