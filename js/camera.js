function toggle_visibility(id) {
var id = document.getElementById(id);
  
  var divsToHide = document.getElementsByClassName("hideable");

	for(var i = 0; i < divsToHide.length; i++) {
   		 divsToHide[i].style.display="none";
   	}

  	id.style.display = 'block'
    }
