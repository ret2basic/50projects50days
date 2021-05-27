// Use querySelectorAll instead of querySelector
// since there are multiple panels
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach(panel => {
		panel.classList.remove('active')
	})
}