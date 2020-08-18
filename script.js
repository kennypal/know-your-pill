const getData = async (imprint, imprint2) => {
  // console.log(imprint, imprint2)
  let url;
  if (imprint !== '' && imprint2 !== '') {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint},${imprint2}`
  } else {
    url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`
  }

  // console.log(url)
  try {
    const response = await axios.get(url)
    const res = (response.data.nlmRxImages)
    const drugList = document.querySelector('.drug-list')

    removeDrug()

    res.forEach((drug) => {
      // console.log(drug.name)
      const drugPic = document.createElement('img')
      drugPic.classList = 'picture'
      drugPic.src = drug.imageUrl
      drugList.appendChild(drugPic)

      const drugName = document.createElement('h2')
      drugName.textContent = drug.name
      drugList.appendChild(drugName)
    })
    return response
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
function getValues(e) {
  e.preventDefault()
  const input = document.querySelector('#imprint-1').value
  // console.log(input)
  const input2 = document.querySelector('#imprint-2').value
  // console.log(input2)
  // const input3 = document.querySelector('#color').value
  // const input4 = document.querySelector('#shape').value
  document.querySelector('#imprint-1').value = ''
  document.querySelector('#imprint-2').value = ''
  getData(input, input2)
}
const submit = document.querySelector('#imprint-form')
submit.addEventListener('submit', getValues)

function removeDrug() {
  // write code here
  // Make sure to call this function???
   const appendElement = document.querySelector('.drug-list')
   while (appendElement.lastChild) {
     appendElement.removeChild(appendElement.lastChild)
   }
 }