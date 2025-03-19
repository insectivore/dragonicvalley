const testing = document.getElementById("testing");
const postme = document.getElementById("postme");
const postlist = document.getElementById("postlist");

postme.addEventListener('click', freakblog)

function freakblog() {
	const ligma = testing.value;
	console.log(ligma);
	
	if (ligma) {
		localStorage.setItem(ligma);
		location.reload();
	}
};

for (let 1 = 0; i < localStorage.length; i++) {
	const ligma = localStorage.ligma(i);
	postlist.innerHTML += `${ligma}`;
}