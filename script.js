const modal = document.getElementById("myModal");

displayModal();

function displayModal() {
    modal.style.display = "block";
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'visible';
}
