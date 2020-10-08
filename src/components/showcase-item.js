import React from 'react';
import styled from 'styled-components'

const ShowcaseItemFlex = styled.div`
display: flex;
flex-direction: column;
margin: 0px 50px;
`

const ShowcaseImage = styled.img`
height: 300px;
width: 300px;
`

const ItemTitleContainer = styled.div`
width: 300px;
height: 80px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`
const ItemTitle = styled.div`
font-family: Nunito Sans;
font-style: normal;
font-weight: bold;
font-size: 36px;
margin-top: -10px;
color: white;
`

const Showcase = ({ props }) => {
    return (
        <ShowcaseItemFlex>
            <ShowcaseImage src={props.imgsrc} alt={props.alt} />
            <ItemTitleContainer>
                <ItemTitle>{props.alt}</ItemTitle>
            </ItemTitleContainer>
        </ShowcaseItemFlex>
    )
}

export default Showcase;