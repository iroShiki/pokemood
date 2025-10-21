const controlTopNav = () =>{
    window.addEventListener("scroll", () => {
      const scrolled = window.scrollY; // number of pixels scrolled vertically
      if(scrolled > 80){
        document.getElementById("header").style.position = "fixed";
        document.getElementById("header-upper").style.display = "none";
        document.getElementById("nav-logo").classList.add("show");
        document.getElementById("nav-langauge-tag").classList.add("show");
      }
      else{
        document.getElementById("header").style.position = "static";
        document.getElementById("header-upper").style.display = "grid";
        document.getElementById("nav-logo").classList.remove("show");
        document.getElementById("nav-langauge-tag").classList.remove("show");
      }
    });
}

export default controlTopNav