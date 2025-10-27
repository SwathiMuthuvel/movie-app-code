import styled from "styled-components";


export const Imgstyle = styled.img`
width: 200px;
height: 100px;
border-radius: 0.5rem;
margin-right: 10px;  
`;

export const Text = styled.h4`
text-align: center;
color: white;
white-space: nowrap;
overflow: hidden;
max-width: 200px;
text-overflow: ellipsis;
`;

export const Sidehead = styled.h3`
  color: white;
  margin-right: 5px;
  margin-left: 5px;
`;

export const Input = styled.input`
	background: transparent;	
	border: 1px solid white;
	border-radius: 5px 0 0 5px;
	box-shadow: 0 2px 0 #000;
	color: white;
	display: block;
	float: left;
	font-family: 'Cabin', helvetica, arial, sans-serif;
	font-size: 13px;
	font-weight: 400;
	height: 35px;
	padding: 0 10px;
	text-shadow: 0 -1px 0 #000;
	width: 200px;
  :focus {
    
    background: transparent;
    border-color: #575151;
    box-shadow: 0 0 5px white, inset 0 0 5px white;
    color: white;
    outline: none;
  }
  
  `;

export const Button = styled.button`
	background: transparent;
	box-sizing: border-box;
	border: 1px solid white;
	border-radius: 0 5px 5px 0;
	box-shadow: 0 2px 0 #000;
	color: white;
	display: block;
	float: left;
	font-family: 'Cabin', helvetica, arial, sans-serif;
	font-size: 13px;
	height: 37px;
	line-height: 40px;
	padding: 0 10px;
	position: relative;
	text-shadow: 0 -1px 0 #000;
	width: 80px;
  :focus {
    background: transparent;
    color: white;
    outline: none;
    }
  :active {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    box-shadow: 0 1px 0 #000, inset 1px 0 1px #222;
    top: 1px;
  }

`;