// Found here: https://stackoverflow.com/questions/416805/why-do-page-anchors-sometimes-miss/22145810#22145810

function goToAnchor() { 
    hash = document.location.hash;
    if (hash !="") {
        setTimeout(function() {
            if (location.hash) {
                window.scrollTo(0, 0);
                window.location.href = hash;
            }
        }, 1);
    }
    else {
        return false;
    }
}

window.onload = goToAnchor();