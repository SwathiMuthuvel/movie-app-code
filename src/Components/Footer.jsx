import styled from "styled-components";

const Footerstyle = styled.footer`
  padding: 1em 1em;
  display: flex;
  justify-content: center;
  font-size: 0.9em;
  color: white;
  position: fixed;
  bottom: 0;
  

`;

const Text = styled.p`
  text-align:center;
  margin-left: 800px;
`;


const Footer =() => {
    return(
    <Footerstyle>
        <Text>@support.com</Text>
    </Footerstyle>
    );
};

export default Footer;
