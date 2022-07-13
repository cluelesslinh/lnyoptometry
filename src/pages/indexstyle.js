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
    margin: 5% 0 5% 5%;
}
`;

export const TopTitle = styled.div`
font-size 2.25em;
letter-spacing: .175em;
`;

export const TopDescriptionBox = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
background-color: white;
width: 60%;
max-width: 625px;
min-width: 425px;
margin: 0 0 0 5rem;
padding: 1em 0 1em 0;
@media screen and (max-width: 768px) {
    min-width: 425px;
    margin: 5% 0 5% 5%;
}
`;

export const TopDescription = styled.div`
font-size: 1em;
padding: .25rem 0 .25rem 1rem;
`;

export const MSContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 5em 5% 5% 5%;
@media screen and (max-width: 768px) {
   margin: 5% 5% 5% 5%;
}
`;

export const MStitle = styled.div`
font-size: 13px;
`;

export const MSdescription = styled.div`
font-size: 14px;
padding: 0 0 1em 0;
`;

export const MidTitleBox = styled.div`
background-color: white;
height: 10%;
width: 80%;
max-width: 850px;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem 0 2rem 5rem;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    min-width: 450px;
    margin: 5% 0 5% 5%;
}
`;

export const MidTitle = styled.div`
font-size 2.5em;
letter-spacing: .1em;
padding: .25em 0 .25em .5em;
`;

export const MidDescBox = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
background-color: white;
width: 60%;
max-width: 750px;
min-width: 450px;
margin: 0 0 0 5rem;
padding: 1em 0 1em 0;
@media screen and (max-width: 768px) {
    min-width: 450px;
    margin: 5% 0 5% 5%;
}
`;

export const MidDesc = styled.div`
font-size: 1em;
padding: .25rem 0 .25rem 1rem;
@media screen and (max-width: 768px) {
    min-width: 450px;
}
`;

export const WbgBox = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 5em 5% 5% 5%;
@media screen and (max-width: 768px) {
   margin: 5% 5% 5% 5%;
}
`;

