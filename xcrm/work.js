const menuBtn = document.getElementById('btn');
const img = document.getElementById('img1');
const hiddenMenu = document.getElementById('hidden');
const mainContent = document.getElementById('main');
menuBtn.addEventListener('click', function() {
        mainContent.classList.toggle('hidden');
        img.classList.toggle('hidden');
    hiddenMenu.classList.toggle('hidden');
    
    
});