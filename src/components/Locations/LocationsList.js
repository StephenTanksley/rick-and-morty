import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Container, Counter} from '../Styles/Styles'
import {LocationCard} from './LocationCard'
import NavGunLeft from '../Images/transparentportalgun-rotatedLeft.png'
import NavGunRight from '../Images/transparentportalgun-rotatedRight.png'

export const LocationsList = (props) => {
  const [locations, setLocations] = useState([])
  const [totalPages, setTotalPages] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    console.log(props);

    axios.get(`https://rickandmortyapi.com/api/location/?page=${currentPage}`)
    .then(response => {
      console.log(response)
      setLocations(response.data.results)
      setTotalPages(response.data.info.pages)

    })
    .catch(error => {
      console.log(error)
    })
  }, [currentPage])

  const PageBack = () => (currentPage > 1 && currentPage <= totalPages + 1) ? 
  setCurrentPage(currentPage - 1) : alert('Not a valid universe!')

  const PageForward = () => (currentPage >= 1 && currentPage < totalPages) ? 
    setCurrentPage(currentPage + 1) : alert('Not a valid universe!')

  return(
    <div>
        <Container><h1>Locations!</h1></Container>

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
        {locations.map((item, index) => {//Doesn't run the map function until we get data back from the API.
            return (
            <LocationCard 
            item = {item}
            key = {index} />
            )})}
        </Container>
    </div>
  )}