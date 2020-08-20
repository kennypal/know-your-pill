const getData = async (imprint, imprint2) => {
  
  let url;
  if (imprint !== '' && imprint2 !== '') {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint},${imprint2}`
  } else {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`
  }

  try {
    const response = await axios.get(url)
    const res = (response.data.nlmRxImages)

    removeDrug()

    res.forEach((drug) => {
      
      const drugList = document.querySelector('.drug-list')

      const drugDiv = document.createElement('div')
      drugDiv.classList = '.drug-div'
      drugList.appendChild(drugDiv)

      const drugPic = document.createElement('img')
      drugPic.classList = 'drug'
      drugPic.src = drug.imageUrl
      drugDiv.appendChild(drugPic)

      const drugName = document.createElement('p')
      drugName.classList = 'drug'
      drugName.textContent = 'MEDICATION NAME: ' + drug.name
      drugDiv.appendChild(drugName)

      const drugNdc = document.createElement('p')
      drugNdc.classList = 'drug'
      drugNdc.textContent = 'NDC: ' + drug.ndc11
      drugDiv.appendChild(drugNdc)

      const drugManu = document.createElement('p')
      drugManu.classList = 'drug'
      drugManu.textContent = 'MANUFACTURER: ' + drug.labeler
      drugDiv.appendChild(drugManu)

    })
    return response
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
function getValues(e) {
  e.preventDefault()
  const input = document.querySelector('#imprint-1').value
  const input2 = document.querySelector('#imprint-2').value

  document.querySelector('#imprint-1').value = ''
  document.querySelector('#imprint-2').value = ''
  getData(input, input2)
}
const submit = document.querySelector('#imprint-form')
submit.addEventListener('submit', getValues)

function removeDrug() {
   const appendElement = document.querySelector('.drug-list')
   while (appendElement.lastChild) {
     appendElement.removeChild(appendElement.lastChild)
   }
 }