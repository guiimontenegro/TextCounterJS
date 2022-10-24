let stats = document.querySelector('.status');
	let text = document.getElementById('text');
	let char = document.getElementById('char');
	let words = document.getElementById('words');
	let lines = document.getElementById('lines');
	let symbols = document.getElementById('symbols');
		function count() {
		if(text.value.length === 0){ // can be easily done using CSS, check CSS for that
			stats.style.display = "none";
		}
		else{
			stats.style.display = "block";
			char.innerHTML = text.value.length + " Caracteres" //char
		words.innerHTML = text.value.trim().split(/\s+/).length + " Palavras"; //words
		lines.innerHTML = text.value.split("\n").length + " Linhas"; //lines
		symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + " Simbolos"
		}
	}
text.addEventListener("input", count);