var userAgent = navigator.userAgent || navigator.vendor || window.opera;

function isMobileDevice() {
    return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|windows phone/i.test(userAgent);
}

if (isMobileDevice()) {
    window.location.href = 'mobile.html';
}