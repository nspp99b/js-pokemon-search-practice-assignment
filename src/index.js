document.addEventListener("DOMContentLoaded", function() {

  const searchForm = document.getElementById('pokemon-search-form');
  const searchInput = document.getElementById('pokemon-search-input');
  searchInput.addEventListener('keyup', handleKeyUp);

  function handleKeyUp(e) {
    const pContainer = document.getElementById('pokemon-container')
    const currentInput = document.getElementById('pokemon-search-input');
    let searchTerm = currentInput.value
    pContainer.innerHTML = ''
    for (const p of data['pokemons']) {
      if (p['name'].includes(searchTerm)) {
        render(p);
      }
    }
  }

  function handleImageFlip(e) {
    e.preventDefault()
    let image = event.target.parentNode.previousSibling.firstChild.firstChild
    const newImageName = event.target.parentNode.parentNode.firstChild.nextSibling.innerText
    for (const p of data['pokemons']) {
      if (p['name'] === newImageName) {
        if (image.src === p['sprites']['front']) {
          image.src = p['sprites']['back'];
        } else {
          image.src = p['sprites']['front'];
        }
      }
    }
  }

  function render(obj) {
    const pContainer = document.getElementById('pokemon-container')
    const newDiv = document.createElement('div')
    newDiv.className = "pokemon-container"
    newDiv.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
    const newDivFrame = document.createElement('div')
    newDivFrame.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
    const newH1 = document.createElement('h1')
    newH1.innerText = obj['name']
    newH1.className="center-text"
    const newImageFrame = document.createElement('div')
    newImageFrame.style = "width:239px;margin:auto"
    const newImageDiv = document.createElement('div')
    newImageDiv.style = "width:96px;margin:auto"
    const image = document.createElement('img')
    image.src = obj['sprites']['front']
    const newPar = document.createElement('p')
    newPar.style = "padding:10px;"
    newPar.className = "center-text"
    const newA = document.createElement('a')
    newA.href = "#"
    newA.innerText = 'Flip Card'
    newA.addEventListener('click', handleImageFlip)
    newPar.appendChild(newA)

    pContainer.appendChild(newDiv)
    newDiv.appendChild(newDivFrame)
    newDiv.appendChild(newH1)
    newDiv.appendChild(newImageFrame)
    newImageFrame.appendChild(newImageDiv)
    newImageDiv.appendChild(image)
    newDiv.appendChild(newPar)
  }
console.log("dom content loaded")
})
