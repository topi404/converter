const inputImage = document.getElementById('inputImage');
const outputFormat = document.getElementById('outputFormat');
const convertBtn = document.getElementById('convertBtn');
const downloadLink = document.getElementById('downloadLink');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

convertBtn.addEventListener('click', () => {
  const file = inputImage.files[0];
  if (!file) return alert('Выберите изображение');

  const img = new Image();
  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    const format = outputFormat.value;
    const dataURL = canvas.toDataURL(`image/${format}`);

    downloadLink.href = dataURL;
    downloadLink.download = `converted.${format === 'jpeg' ? 'jpg' : format}`;
    downloadLink.style.display = 'inline';
    downloadLink.textContent = 'Скачать ' + downloadLink.download;
  };
  img.src = URL.createObjectURL(file);
});
