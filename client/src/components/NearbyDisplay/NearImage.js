import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const NearImage = (props) => { 
  const [error, setError] = useState(false);
  // console.log('props', props.image);
  return (

    <StyledImg 
      src={(error === true || props.image === undefined)? props.token : props.image}
      onError={()=> setError(true)}
    />
  ) 
}; 


export default NearImage;


const StyledImg = styled.img`
  height: 5rem;
  width: 5rem;
  object-fit: cover;
  border-radius: 50%;
  border: 3px ridge dimgray;
  margin: -.5rem 1rem 0 0;
  transition: all 1500ms ease-in-out;
  &:hover {
    transform: scale(2) translateY(-1.2rem);
    
  }
`;