const buttons = document.querySelectorAll(".link-block a");

buttons.forEach((element) => {
	var popupId = element.dataset.popupId;
	const overlay = document.querySelector(".overlay");
	element.addEventListener("click", () => displayPopup(popupId, overlay));
	overlay.addEventListener("click", () => closePopup(popupId, overlay));
});

function displayPopup(popupId, overlay) {
	const popup = document.getElementById(popupId);
	popup.style.display = "block";
	overlay.style.display = "block";
}

function closePopup(popupId, overlay){
	const popup = document.getElementById(popupId);
	popup.style.display = "none";
	overlay.style.display = "none";
}