// Function to retrieve data from API
const getData = async (imprint, imprint2) => {

  // Setting the url based on the user's input using a conditional statement
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

    // Using the forEach method to append the desired information to the webpage
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

    // Logging the error
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

// Function to assign values that were submitted by the user. It also calls getData when the form's submitted.
function getValues(e) {
  e.preventDefault()
  const input = document.querySelector('#imprint-1').value
  const input2 = document.querySelector('#imprint-2').value

  document.querySelector('#imprint-1').value = ''
  document.querySelector('#imprint-2').value = ''
  getData(input, input2)
}

// Added an event listener submit to call getValues
const submit = document.querySelector('#imprint-form')
submit.addEventListener('submit', getValues)

// Function to remove values from the form after it's submitted
function removeDrug() {
   const appendElement = document.querySelector('.drug-list')
   while (appendElement.lastChild) {
     appendElement.removeChild(appendElement.lastChild)
   }
 }