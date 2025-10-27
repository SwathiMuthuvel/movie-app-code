import styled from "styled-components";
import { useState,useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import img from "/Users/swathi.m/workspace/demoproject/src/Images/noimage1.jpeg";
import {Imgstyle, Text} from '/Users/swathi.m/workspace/demoproject/src/Styles/commonstyles.jsx';




const Mov = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 10px;

`;

const LinkText = styled(Link)`
  color:white;
  text-decoration: none;

`;

const Text1 = styled.h2`
  text-align: center;
  color: white;
`;

const Search = () =>{
    const [movies,setMovie]=useState([]);
    const {searchText}= useParams();
    const fetchdata = async (searchText) =>{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=c3579da55180fefba457763450270a89&language=en-US&query=${searchText}&page=1&include_adult=false`);
      const data = await response.json();
      setMovie(data?.results || []);
        
     };
    console.log(searchText);
    useEffect(() =>{
       fetchdata(searchText);
    },[searchText]);
    const len=movies?.length;
    return (
        <div>
            <Text1> "{len}" Movies matched</Text1>
            <div>
              <Mov>
                  {movies.map((movie) => {
                    const {
                        id = "",
                        backdrop_path = "",
                        path = "",
                        title = "",
                    } = movie || {}
                    return (
                        <div key={id}>
                          <LinkText to={{pathname: `/movie/${id}` }}>

                           <Imgstyle src={backdrop_path?`https://image.tmdb.org/t/p/w780${backdrop_path}`:img}  alt={path}  />
                           <Text title={title}>{title}</Text>
                           </LinkText>
                        </div>
                    );
                  })}
              </Mov>
           </div>
        </div>
    );
};

export default Search;

