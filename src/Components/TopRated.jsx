import { useState, useEffect} from "react";
import styled from "styled-components";


const Imgstyle = styled.img`
width: 200px;
height: 100px;
border-radius: 0.5rem;
margin-right: 10px;  
`;
const Mov = styled.div`
display: flex;    
flex-wrap: nowrap;
overflow: auto;
::-webkit-scrollbar {
  display: none;
}

`;
const Text = styled.h4`
text-align: center;
color: white;
`;

const Heading = styled.h2`
color: white;
`;

const TopRated = () => {
    const [topmovies,setMovie]=useState([]);
    const fetchdata = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c3579da55180fefba457763450270a89&language=en-US&page=1");
        const data = await response.json();
        setMovie(data.results);
        
    };
    useEffect(() =>{
       fetchdata();
    },[]);
    return (
        <div>
           <Heading>Top Rated movies</Heading> 
              <Mov>
                  {topmovies.map((topmovie) => {
                      return (
                        <div key={topmovie.id}>
                        <Imgstyle src={`https://image.tmdb.org/t/p/w780${topmovie.backdrop_path}`} alt={topmovie.path} />
                        <Text>{topmovie.title}</Text>
                        </div>
            
            );
            })}
            </Mov>
        </div>
      );
   
};


export default TopRated;