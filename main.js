document.getElementById("openBtn").addEventListener("click", function() {
    document.querySelector(".sidebar").style.width = "250px";
    document.querySelector(".content").style.marginLeft = "250px";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector(".content").style.marginLeft = "0";
});

