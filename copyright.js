document.addEventListener("DOMContentLoaded", function () {
    const year = new Date().getFullYear();
    const siteName = window.location.hostname;
    const siteURL = window.location.origin;

    document.getElementById("copyright").innerHTML = 
        `&copy; ${year} <a href="${siteURL}" target="_blank">${siteName}</a>. All rights reserved.`;
});
