const getImprint = async () => {
  const url = 'https://rximage.nlm.nih.gov/api/rximage/1/rxbase?imprint=10,g,1540'
  try {
    const response = await axios.get(url)
    console.log(response.data.nlmRxImages[0].imageUrl)

  } catch (error) {
    console.log(`Error: ${error}`)
  }
}

getImprint ()
