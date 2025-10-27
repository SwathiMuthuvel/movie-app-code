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
  margin-bottom:150px;

`;
const Text = styled.h4`
  text-align: center;
  color: white;
`;

const Heading = styled.h2`
color: white;
`;

const Upcoming = () => {
    const [upmovies,setMovie]=useState([]);
    const fetchdata = async () =>{
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=c3579da55180fefba457763450270a89&language=en-US&page=1");
        const data = await response.json();
        setMovie(data.results);
        
    };
    useEffect(() =>{
       fetchdata();
    },[]);
    return (
        <div>
           <Heading>Upcoming movies</Heading> 
              <Mov>
                  {upmovies.map((upmovie) => {
                      return (
                        <div key={upmovie.id}>
                        <Imgstyle src={`https://image.tmdb.org/t/p/w780${upmovie.backdrop_path}`} alt={upmovie.path} />
                        <Text>{upmovie.title}</Text>
                        </div>
            
            );
            })}
            </Mov>
        </div>
      );
   
};


export default Upcoming;