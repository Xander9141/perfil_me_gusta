

function addLikes(buttonNumber) {
    var likeCountElement = document.getElementById("likeCount" + buttonNumber); 
    var currentLikes = parseInt(likeCountElement.textContent); 
    currentLikes++; 
    likeCountElement.textContent = currentLikes; 
}
