window.onload = function () {
    initImgLazyLoading();
}

function initImgLazyLoading() {
    var observer = lozad();
    observer.observe();
}