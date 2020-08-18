// const url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`

const getImprint = async (imprint) => {
  const url = `https://rximage.nlm.nih.gov/api/rximage/1/rxbase?parse=${imprint}`
  

  try {
    const response = await axios.get(url)
    console.log(response.data.nlmRxImages)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

const submit = document.querySelector('#imprint-form')
submit.addEventListener('submit', (e) => {
  e.preventDefault()
  const input = document.querySelector('#imprint-1').value
  getImprint(input)
})
