var ak = document.getElementsByClassName("parallax-layer")
window.onscroll = (p) => {ak[3].style.transform = "translateY(-"+window.scrollY+"px) translateX(-"+window.scrollY/2+"px)" 
                            ak[4].style.transform = "translateY(-"+window.scrollY+"px) ";}