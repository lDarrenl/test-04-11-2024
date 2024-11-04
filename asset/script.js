function loadImages() {
    const gallery = document.getElementById('gallery');
    const images = JSON.parse(localStorage.getItem('savedImages')) || [];
    images.forEach(src => {
        const imgDiv = document.createElement('div');
        imgDiv.className = 'gallery-item';
        imgDiv.innerHTML = `<img src="${src}" alt="Saved Image">`;
        gallery.appendChild(imgDiv);
    });
}

function addImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = document.createElement('div');
            newImage.className = 'gallery-item';
            newImage.innerHTML = `<img src="${e.target.result}" alt="New Image">`;
            document.getElementById('gallery').appendChild(newImage);

            let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
            savedImages.push(e.target.result);
            localStorage.setItem('savedImages', JSON.stringify(savedImages));
        };
        reader.readAsDataURL(file);
    }
}

function removeLastImage() {
    let savedImages = JSON.parse(localStorage.getItem('savedImages')) || [];
    if (savedImages.length > 0) {
        savedImages.pop();  
        localStorage.setItem('savedImages', JSON.stringify(savedImages));
        document.getElementById('gallery').lastElementChild.remove();  
    }
}

function clearAllImages() {
    localStorage.removeItem('savedImages');  
    document.getElementById('gallery').innerHTML = ''; 
}

function toggleNightMode() {
    document.body.classList.toggle('night-mode');
}

function rickRoll() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
}

window.onload = loadImages;