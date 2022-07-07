import styled from 'styled-components';

export const TopTitleBox = styled.div`
background-color: white;
height: 10%;
width: 425px;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem 0 2rem 5rem;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    margin: 1rem 0 1rem 1rem;
}
`;

export const TopTitle = styled.div`
font-size 37.5px;
letter-spacing: .175em;
`;

export const TopDescriptionBox = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
background-color: white;
height: 30%;
width: 40%;
min-width: 425px;
margin: 0 0 0 5rem;
@media screen and (max-width: 768px) {
    min-width: 425px;
    margin: 1rem 0 1rem 1rem;
}
`;

export const TopDescription = styled.div`
font-size: 17px;
padding: 0.25rem 0 0.25rem 1rem;
`;

export const MissionStatement = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 2em;
`
export const MSdescriptionBOX = styled.div`
flex-shrink: 8;
display: flex;
flex-direction: column;
`
export const MStitle = styled.div`
font-size: 14px;
`
export const MSdescription = styled.div`
padding: 1em 0 0 0;
`
export const MSmain = styled.div`
`
export const MSsub = styled.div`
`
export const Row = styled.div`
display: flex;
flex-direction: row;
`
export const Column = styled.div`
display: flex;
flex-direction: column;
`