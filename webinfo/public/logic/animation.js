function getScrool() {
  let idheader = document.getElementById("header");
  let HeaderButtonNav = document.getElementById("HeaderButtonNav")
  let scroll = document.documentElement.scrollTop;
  console.log(scroll);
  if (scroll === 0) {
    idheader.style.cssText = "margin-top: 8%;";
  } else {
    HeaderButtonNav.style.cssText = "top:2.5%"
    idheader.style.cssText =
      "margin-top: 0%; position: fixed; width: 85%; top: 0%; left:7.5%";
  }
}

window.addEventListener("scroll", getScrool);
