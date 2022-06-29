import styled from 'styled-components';

export const HomeTop = styled.div`
background-image: url(${process.env.PUBLIC_URL + '/images/home-top.jpg'});
display: flex;
flex-direction: column;
height: 700px;
width: 100%;
box-sizing: border-box;
`;

export const TopTitleBox = styled.div`
background-color: white;
height: 10%;
width: 415px;
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
height: 22%;
width: 40%;
min-width: 415px;
margin: 0 0 0 5rem;
@media screen and (max-width: 768px) {
    min-width: 415px;
    margin: 1rem 0 1rem 1rem;
}
`;

export const TopDescription = styled.div`
font-size: 17px;
padding: 0.25rem 0 0.25rem 1rem;
`;