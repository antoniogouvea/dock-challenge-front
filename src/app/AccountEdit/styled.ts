import styled from 'styled-components/macro'

export const Wrapper = styled.div`
	display:flex;
    flex-wrap: wrap;
	border-radius: 3px;
    padding: 20px 20px 20px 25px;
    width:100%;
    @media (max-width: 768px) {
        flex-direction: column;
      }
	
`
export const Box = styled.div`
  width: 100%;
`;
export const Box1 = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding:0 50px 0 50px;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Box2 = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding:0 50px 0 50px;
    @media (max-width: 768px) {
        width: 100%;
    }

`;

export const Box3 = styled(Box)`
  width: 100%;
`;

export const InputTitle = styled.p`
font-size: 1.75em;
line-height: 1.3333333;
margin-top: 1.428em;    
@media (max-width: 768px) {
    font-size: 1em;

}
`
export const InputValue = styled.span`
font-size: 1.75em;
line-height: 1.3333333;
background-color:var(--color-accent-background);
padding-left: 5em;
max-width: 14em;
@media (max-width: 768px) {
    font-size: 1em;

}
`

export const InputValue2 = styled.input`
font-size: 1em;
line-height: 1.3333333;
background-color:var(--color-accent-background);
text-align:center;
width: 100%;
margin-bottom:1em;
`

export const Button = styled.button`
    color: var(--color-white);
    background-color: var(--color-black);
    margin: 0px 1.2em;
    width: 10em;
    @media (max-width: 768px) {
        margin: 0 0 0 1em;
        width:auto;
    }

`
export const ButtonsWrapper = styled.div`
    width:100%;
    margin: 0px 1.2em;
    @media (max-width: 768px) {
        margin:0;
        }
`