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
    margin: 3% 0 3% 3%;
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
    margin: 3% 0 3% 3%;
}
`;

export const TopDescription = styled.div`
font-weight: 600;
font-size: 1em;
letter-spacing: .075em;
padding: .25rem 0 .25rem 1rem;
`;

export const MSContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
   margin: 0 3% 3% 3%;
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
max-width: 1150px;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem 0 2rem 5rem;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    min-width: 450px;
    margin: 3% 0 3% 3%;
}
`;

export const MidTitle = styled.div`
font-size 2.5em;
letter-spacing: .1em;
padding: .25em .5em .25em .5em;
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
    margin: 3% 0 3% 3%;
}
`;

export const MidDesc = styled.div`
font-weight: 600;
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
margin: 5em 0 7em 0;
@media screen and (max-width: 768px) {
   margin: 3% 0 1% 0;
}
`;

export const WbgDescBox = styled.div`
display: flex;
justify-content: center;
@media screen and (max-width: 768px) {
    padding: 0 0 3% 0;
 }
`;

export const WbgDesc = styled.div`
font-size: 13px;
letter-spacing: .05em;
padding: 0 0 1em 0;
`;

export const BotTitleBox = styled.div`
background-color: white;
height: 10%;
width: 50%;
max-width: 700px;
display: flex;
align-items: center;
margin: 5rem 0 2rem 5rem;
flex-wrap: wrap;
min-width: 450px;
@media screen and (max-width: 768px) {
    min-width: 450px;
    margin: 3% 0 3% 3%;
}
`;

export const BotTitle = styled.div`
font-size 2.5em;
letter-spacing: .1em;
padding: .25em 0 .25em .5em;
`;

export const BotDescBox = styled.div`
font-weight: 600;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
background-color: white;
width: 60%;
max-width: 350px;
min-width: 350px;
margin: 0 0 0 5rem;
padding: 1em 0 1em 0;
@media screen and (max-width: 768px) {
    min-width: 450px;
    margin: 3% 0 3% 3%;
}
`;

export const BotDesc = styled.div`
font-size: 1em;
letter-spacing: .075em;
padding: .25rem 0 .25rem 1rem;
@media screen and (max-width: 768px) {
    min-width: 450px;
}
`;

export const LocContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
margin: 5em 0 5% 0;
@media screen and (max-width: 1024px) {
   margin: 3% 0 3% 0;
}
`;

export const LocTitle = styled.div`
font-size: 1.75em;
font-weight: 900;
letter-spacing: .1em;
padding: 0 0 .5em 0;
@media screen and (max-width: 768px) {
    padding: 3% 0 3% 0;
`;

export const LocDesc = styled.div`
width: 90%;
font-size: 13px;
line-height: 200%;
`;

export const OffHours = styled.div`
font-size: 16px;
font-weight: 600;
letter-spacing: .1em;
`;