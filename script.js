function refreshImage() {
    const img = document.getElementById("main-image");
    const baseUrl = "https://picsum.photos/800/500";
    img.src = baseUrl + "?reload=" + new Date().getTime();
    }
  