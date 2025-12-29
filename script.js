const shareBtn = document.getElementById("share-button");
const removeShareBtn = document.getElementById("sharing-button");
const feature = document.getElementById("feature");
const sharing = document.getElementById("sharing")
const popUp = document.getElementById("pop-up")
const screenWidth = window.innerWidth

shareBtn.addEventListener("click", () => {
    if (screenWidth <= 768) {
        feature.classList.add('hidden');
        sharing.classList.remove('hidden');  
    }else {
        popUp.classList.toggle('hidden');
    }
    
})

removeShareBtn.addEventListener("click", () => {
        feature.classList.remove('hidden');
        sharing.classList.add('hidden');  
   
})