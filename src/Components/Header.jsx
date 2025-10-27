import styled from "styled-components";
import logo from "/Users/swathi.m/workspace/demoproject/src/Images/logo3.png";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import {Input, Button} from '/Users/swathi.m/workspace/demoproject/src/Styles/commonstyles.jsx';



const Headerstyle = styled.header`
  display: flex;
  padding: 0.10em 1em;
  position: relative;

`;
const Imgstyle = styled.img`
  max-width:30%;
  min-width:4%; 
  height: 100%; 
`;

const Searchform = styled.div`
  margin-left: 70%;
  margin-top: 10px;
`;



    

const Header =() => {
  const history= useNavigate();
  const [value, setValue] = useState('');
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const handleonClick =(e)=>{
    if(value)
       history(`/movie/search/${value}`);
  }
  console.log(value);
    return(
    <Headerstyle>
        <Link to ={{pathname:"/"}}>
          <Imgstyle src = {logo} />
        </Link>
        <Searchform>
          <Input type="text" value={value} onChange={onChange} />
          <Button onClick={handleonClick}>Search</Button>
        </Searchform>
        
    </Headerstyle>
    );
};

export default Header;
