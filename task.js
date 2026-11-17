const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  xhr.upload.addEventListener('progress', (e) => {
    if (e.lengthComputable) {
      progress.value = e.loaded / e.total;
    }
  });

  // По завершении запроса
  xhr.addEventListener('load', () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log('Файл успешно загружен');
    } else {
      console.error('Ошибка загрузки, статус:', xhr.status);
    }
  });

  xhr.addEventListener('error', () => {
    console.error('Ошибка сети при загрузке файла');
  });

  xhr.send(formData);
});