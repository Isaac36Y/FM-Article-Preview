const shareBtn = document.getElementById("share-button");
const removeShareBtn = document.getElementById("sharing-button");
const feature = document.getElementById("feature");
const sharing = document.getElementById("sharing")

shareBtn.addEventListener("click", () => {
    feature.classList.add('hidden');
    sharing.classList.remove('hidden');
})

removeShareBtn.addEventListener("click", () => {
    feature.classList.remove('hidden');
    sharing.classList.add('hidden');
})