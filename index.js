const selector = document.getElementById("theme-selector")
const theme_id = document.getElementById("ct-theme");

/*Default color theme*/
var savedTheme = "./color-themes/holdnack-net.css";
/*Checks if other theme was saved, and if true, sets as theme*/
if (localStorage.getItem('ct-theme')) {
	 savedTheme = localStorage.getItem("ct-theme");
}
theme_id.href = savedTheme;
console.log(savedTheme);

selector.addEventListener("change", (event) => {
	theme_id.href = event.target.value;
	localStorage.setItem("ct-theme", event.target.value)
	console.log(event.target.value)
})

