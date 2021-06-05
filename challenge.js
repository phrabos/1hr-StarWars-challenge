function getCrewSize(id){
  const starships = [];
  fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
    .then(parsed => starships.push(parsed.starships))
    // .then(parsed => console.log(parsed))
    // .then(json => starships.push(json.sharships))
    // .then(json => console.log(json))
  console.log(starships)

  // if(starships.length === 0) return 0
    
  //   const shipPromiseArr = []

  // starships.forEach(ship => {
  //   console.log('ship', ship)
  //   const fetchShip = fetch(ship)
  //   console.log('fetchShip', fetchShip)
  //   shipPromiseArr.push(fetchShip)
  // })
  // console.log('shipPromiseArr', shipPromiseArr)

  // const resultsArr = await Promise.all(shipPromiseArr);
  // const parsedResultsProm = []
  // resultsArr.forEach(unparsed => {
  //   const res = unparsed.json()
  //   parsedResultsProm.push(res)
  // })
  // const parsedResults = await Promise.all(parsedResultsProm)
  // console.log('parsed', parsedResults)

  // const crew = parsedResults.reduce((acc, curr) => {
  //   if(curr.crew === 'unknown'){
  //     return acc + 1
  //   }
  //   return acc + +curr.crew
  // }, 0);

  // console.log(crew)

  return parsed;

}
console.log('result', getCrewSize(11))
  