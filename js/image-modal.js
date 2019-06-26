// A simple image modal.
// Written by Liz Kalter

var imageModals = document.getElementsByClassName("js-modal");

for (let i = 0; i < imageModals.length; i++) {
  imageModals[i].onclick = function(openEvent) {
  	openEvent.preventDefault();

    // create the modal
  	var modal = document.createElement('div');
  	modal.classList.add('image-modal');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    // create the close button
  	var closeButton = document.createElement('button');
    var closeText = document.createTextNode('Close'); 
    closeButton.appendChild(closeText);
  	closeButton.classList.add('close');
    closeButton.classList.add('pill-button');
  	closeButton.onclick = function(closeEvent) {
  		closeEvent.preventDefault();
  		document.body.removeChild(closeButton.parentElement);
  		document.body.classList.remove('modal-open');
  	}
  	modal.appendChild(closeButton);

    // create the image element
  	var image = document.createElement('img');
    var url = imageModals[i].getAttribute('href');
    var alt = imageModals[i].firstElementChild.getAttribute('alt');
    image.setAttribute('src', url);
    image.setAttribute('alt', alt);
  	modal.appendChild(image);

  	document.body.classList.add('modal-open'); // disable body scrolling
  	document.body.appendChild(modal);
  	closeButton.focus(); // put focus on the close button for accessibility
  }
}
