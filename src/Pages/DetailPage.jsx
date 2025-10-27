
import styled from "styled-components";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
import img from "/Users/swathi.m/workspace/demoproject/src/Images/noimage1.jpeg";
import {Sidehead} from '/Users/swathi.m/workspace/demoproject/src/Styles/commonstyles.jsx';

const Imgstyle = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.5rem;
  width: 30%;
  height: 10%;

`;
const Whole = styled.div`
  color:white;
`;
const Title = styled.h2`
  text-align: center;
`;

const Subdiv = styled.div`
  display:flex;
  flex-direction: row;

`;
const Content = styled.p`
  font-size:19px;
  margin-right: 20px;
  margin-left:10px;
`;
const Content1 = styled.p`
  text-indent: 50px;
  margin-left: 10px;
  font-size: 19px;
`;
const Genrelist = styled.p`
  font-size: 19px;
  margin-left:3px;
`;
const DetailPage = props => {
    const [movie,setMovie]=useState([]);
    const {movieId,obj}= useParams();
    const fetchdata = async (movieId) =>{
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c3579da55180fefba457763450270a89&language=en-US`);
      const data = await response.json();
      setMovie(data || []);
        
     };
     console.log(movie);
    useEffect(() =>{
    fetchdata(movieId);
    },[]);
    const {
        id = "",
        backdrop_path = "",
        title = "",
        vote_average = "",
        release_date = "",
        popularity = "",
        genres = [],
        status = "",
        spoken_languages = [],
        overview = "",
    } = movie || {}
    return (
        <Whole>
            <Imgstyle src={backdrop_path?`https://image.tmdb.org/t/p/w780${backdrop_path}`:img}   />
            <Title>{title}</Title>
            <Subdiv>
              <Sidehead>Rating: </Sidehead>
              <Content>{vote_average}/10</Content>
              <Sidehead>Release Date: </Sidehead>
              <Content>{release_date}</Content>
            </Subdiv>
            <Subdiv>
              <Sidehead>Popularity:</Sidehead>
              <Content>{popularity}</Content>
            </Subdiv>
            <Subdiv>
                <Sidehead>Genres:</Sidehead>
                {genres?.map((genre,i) =>{
                    return(
                        <Genrelist key={id}>{genre.name}{i+1!==movie?.genres?.length?"," : " "}  </Genrelist>
                    )
                }
                )}
            </Subdiv>
            <Subdiv>
              <Sidehead>Status:</Sidehead>
              <Content>{status}</Content>
              <Sidehead>Languages:</Sidehead>
                {spoken_languages?.map((lang,i) =>{
                    return(
                        <Genrelist key={id}> {lang?.english_name}{i+1!==spoken_languages?.length?"," : " "} </Genrelist>
                    )
                })}
            </Subdiv>
            
            <Sidehead>Overview:</Sidehead>
            <Content1>{overview}</Content1>
        </Whole>
    );
   
};


export default DetailPage;