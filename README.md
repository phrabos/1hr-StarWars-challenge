# 1hr-StarWars-challenge
### Prompt:  
1hr time limit  
Use the Star Wars API: https://swapi.dev/api/  
Documentation: https://swapi.dev/documentation 

User story:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The user wants to know the total size of a crew needed to staff a
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fleet of all starships associated with a specific character.

Write a function ```getCrewSize()```  
- Return the total crew count for all starships for a given character ID
- If a character doesn’t have any associated starships, return 0
- If the crew for a given starship is unknown, return 1 for that particular starship

Test Cases: 
```js 
  getCrewSize(9)  // should return 1    
  getCrewSize(1)  // should return 7
  getCrewSize(11)  // should return 602
  getCrewSize(12) // should return 0
```
                                                          

Example character schema:  
```json
{
   "name": "Biggs Darklighter",
   "height": "183",
   "mass": "84",
   "hair_color": "black",
   "skin_color": "light",
   "eye_color": "brown",
   "birth_year": "24BBY",
   "gender": "male",
   "homeworld": "http://swapi.dev/api/planets/1/",
   "films": [
       "http://swapi.dev/api/films/1/"
   ],
   "species": [],
   "vehicles": [],
   "starships": [
       "http://swapi.dev/api/starships/12/"
   ],
   "created": "2014-12-10T15:59:50.509000Z",
   "edited": "2014-12-20T21:17:50.323000Z",
   "url": "http://swapi.dev/api/people/9/"
}
```