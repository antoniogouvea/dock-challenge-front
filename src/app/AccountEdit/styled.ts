import styled from 'styled-components/macro'

export const Wrapper = styled.div`
	display:flex;
    flex-wrap: wrap;
	border: 4px solid var(--color-blue-border);
	border-radius: 3px;
    padding: 20px 20px 20px 25px;
    width:100%;
	
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
`;

export const Box2 = styled(Box)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding:0 50px 0 50px;

`;

export const Box3 = styled(Box)`
  width: 100%;
`;
export const InputTitle = styled.p`

`
export const InputTitle2 = styled.p`
font-size: 1.75em;
line-height: 1.3333333;
margin-top: 1.428em;    
`
export const InputValue = styled.span`
font-size: 1.75em;
line-height: 1.3333333;
background-color:var(--color-accent-background);
padding-left: 5em;
`