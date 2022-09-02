function is_valid_hex(char) {
 	const hex_chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
	if (hex_chars.indexOf(char.toLowerCase()) >= 0) {
		return true;
 	} else {
		console.log(char, "is invalid")
		return false;
	}
}
function is_all_valid_hex(chars) {
	const chars_array = chars.split("");
	console.log(chars_array, "is defined.");
	const x = chars_array.map(c => is_valid_hex(c));
	if (x.includes(false)) {
		return false;
	} else {
		return true;
	}
}

function calc(hex) {
	var r = parseInt(hex.slice(0,2), 16);
	var g = parseInt(hex.slice(2,4), 16);
	var b = parseInt(hex.slice(4,6), 16);
	console.log(r,g,b);
	r /= 255, g /= 255, b /= 255;
	console.log(r,g,b);
	var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

	s = s*100;
	s = Math.round(s);
	l = l*100;
	l = Math.round(l);
	h = Math.round(360*h);
	var colorInHSL = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
	var res =  colorInHSL + ", #" + hex
	return res
}

function hex_to_hsl(hex_color) {
 	if (6 == hex_color.length) {
		console.log("Valid length")
		if (is_valid_hex(hex_color[0])) {
			console.log("Valid first char")
		} else {
			return "Cannot start with" + hex_color[0]

		}
		const hex = hex_color.slice(0,6);
		if (is_all_valid_hex(hex)) {
			console.log("All valid")
			var r = calc(hex);
			return r
		} else {
			console.log("At least one invalid")
			return "At least one invalid char";
		}
	} else if (7 == hex_color.length) {
		console.log("Valid length")
		if (hex_color[0] == "#")  {
			console.log("Valid first char")
 		} else {
			return "At least one invalid char";
		}
		const hex = hex_color.slice(1,7);
		if (is_all_valid_hex(hex)) {
			console.log("All valid")
			var r = calc(hex)
			return r;
		} else {
			return "At least one invalid char";
		}
	} else {
		return hex_color.length + " is an invalid length"

	}

}																			   


const button = document.getElementById("main-input")
const result = document.getElementById("result")

button.addEventListener('keypress', function(event) {
	if (event.key == "Enter") {
		console.log(event.target.value)
		const res = hex_to_hsl(event.target.value)
		result.innerHTML = res
	} else {
		console.log(event.target.value)
		const res = hex_to_hsl(event.target.value)
		result.innerHTML = res
	}
})


window.addEventListener('load', function() {
	const res = hex_to_hsl("#000000")
	result.innerHTML = res
})
