import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
`;


export const Card = styled.div`

    font-size: 62.5%;
    font-size: 1.3rem;
    line-height: 2rem;
    color: black;
    display: flex;
    flex-direction: column;
    width: auto;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    border: .2rem solid white
    margin: 1rem;
    border: .3rem solid gray;
    border-radius: 1rem;
    padding: 1.5rem;
    background-color: white;

    :hover{
        box-shadow: .9rem .9rem .9rem #52a934;
    }
`;

export const NavContainer = styled.div`

    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
`;

export const NavItem = styled(NavLink)`
    display: flex;
    font-size: 2rem;
    // border: .1rem solid white;
    text-shadow: 2px 2px 4px #000000;    
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 4.5rem;
    width: 4.5rem
    height: 4.6rem;

    color: white;
    
    :hover {
        transform: scale(1.1);
        color: lightgray;
    }
`;

export const Button = styled.button`

    width: auto;
    height: 5rem;
    display: flex;
    color: black;
    cursor: pointer;
    
`


export const Counter = styled.div`
    display: flex;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem;
    color: white;
`

export const Schwifty = styled.h1`
    color: white;
    font-size: 1.6rem;
`

