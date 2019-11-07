import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Container, Counter, Button} from '../Styles/Styles'
import CharacterCard from './CharacterCard'
import NavGunLeft from '../Images/transparentportalgun-rotatedLeft.png'
import NavGunRight from '../Images/transparentportalgun-rotatedRight.png'



export const  CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(false)
  const [currentPage, setCurrentPage] = useState(1) //I'm setting my page data here.



//  setPreferredPage ---- > input field ---- (onSubmit) ---- setCurrentPage(formValue) ---- dependency array(currentPage)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    .then(response => {
      console.log(response.data)
      setCharacters(response.data.results)
      setTotalPages(response.data.info.pages)
    })
    .catch(error => {
      console.log(error)
    })
  }, [currentPage])

  // console.log(currentPage)
  console.log(characters);
  console.log(totalPages)

  const PageBack = () => (currentPage > 1 && currentPage <= totalPages + 1) ? 
  setCurrentPage(currentPage - 1) : alert('Not a valid universe!')

  const PageForward = () => (currentPage >= 1 && currentPage < totalPages) ? 
    setCurrentPage(currentPage + 1) : alert('Not a valid universe!')


  return (
  <div>
    <Container><h1>Characters!</h1></Container>
    <Container>
        <div className="mouseover">
          <img src={NavGunLeft} onClick={PageBack}/>
        </div>
      <Counter> Page {currentPage} of {totalPages} </Counter>

      <div className="mouseover">
        <img className="mouseover" src={NavGunRight} onClick={PageForward}/>
      </div>

    </Container>

    <Container> {/*This is just the place where I'm getting to pass in value for my props.*/}
      {characters.map((item, index) => {//Doesn't run the map function until we get data back from the API.
        return (
        <CharacterCard 
          item = {item}
          key = {index} />
          )})}
    </Container>
    </div>
  );
}
