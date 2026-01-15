let ham = document.getElementById("hambarger")
let nav = document.getElementById("nav");
let navlist = document.getElementById("right-nav")
ham.addEventListener('click',()=>{
	nav.classList.toggle("active-nav")
	navlist.classList.toggle("active_nav_list")
	
	if (nav.classList.contains('active-nav')) {
		ham.src = "cross.svg"
	}
	else{
		ham.src = "hambarger.svg"
	}
})
