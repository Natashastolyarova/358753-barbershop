var mapLink = document.querySelector(".btn-contacts-map");
var mapLinkFooter = document.querySelector(".footer-contacts-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-close-map");

mapLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	console.log("відкрив");
});

mapLinkFooter.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
	console.log("відкрив");
});

mapClose.addEventListener("click", function(evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
	console.log("закрив");
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (mapPopup.classList.contains("modal-show")) {
			mapPopup.classList.remove("modal-show");
		}
	}
});