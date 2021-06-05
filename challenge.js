async function getCrewSize(id){
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  const { starships } = await res.json();
  console.log('starships', starships);
  if(starships.length === 0) return 0
    
    const shipPromiseArr = []

  starships.forEach(ship => {
    console.log('ship', ship)
    const fetchShip = fetch(ship)
    console.log('fetchShip', fetchShip)
    shipPromiseArr.push(fetchShip)
  })
  console.log('shipPromiseArr', shipPromiseArr)

  const resultsArr = await Promise.all(shipPromiseArr);
  const parsedResultsProm = []
  resultsArr.forEach(unparsed => {
    const res = unparsed.json()
    parsedResultsProm.push(res)
  })
  const parsedResults = await Promise.all(parsedResultsProm)
  console.log('parsed', parsedResults)

  const crew = parsedResults.reduce((acc, curr) => {
    if(curr.crew === 'unknown'){
      return acc + 1
    }
    return acc + +curr.crew
  }, 0);

  console.log(crew)

  return crew;

}
getCrewSize(11)
  .then(res => console.log('result', res))