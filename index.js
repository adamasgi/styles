const selector = document.getElementById("theme-selector")
const theme_id = document.getElementById("ct-theme");
selector.addEventListener("change", (event) => {
	theme_id.href = event.target.value;
})
