async function getCrewSize(id){
  const res = await fetch(`https://swapi.dev/api/people/${id}`)
  const { starships } = await res.json();
  console.log(starships);

  const fetchArr = []

  for(let i = 0; i < starships.length; i++){
    const ship = starships[i].toString();
    
    const fetchShip = fetch(ship)
    fetchArr.push(fetchShip)
  }

  // starships.forEach(ship => {
  //   console.log('ship', ship)
  //   const fetchShip = fetch(ship)
  //   console.log('fetchShip', fetchShip)
  //   fetchArr.push(fetchShip)
  // })
  console.log('fetcharr', fetchArr)

  const resultsArr = await Promise.all(fetchArr);
 

  console.log('resArr', resultsArr)

  // for(let i = 0; i < resultsArr.length; i++){
  //   const shipDetails = 
  // }


  return starships;

}
getCrewSize(1)
  // .then(res => console.log(res))