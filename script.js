const url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=`

const getImprint = async (imprint, imprint2 = null) => {
  // const url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`
  

  try {
    const response = await axios.get(url + `${imprint}` + `+${imprint2}`)
    console.log(response.data.nlmRxImages)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const submit = document.querySelector('#imprint-form')
submit.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.querySelector('#imprint-1').value
  const input2 = document.querySelector('#imprint-2').value
  getImprint(input, input2)
})
