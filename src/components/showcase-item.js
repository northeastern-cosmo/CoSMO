import React from 'react';
import styled from 'styled-components'

const ShowcaseItemFlex = styled.div`
display: flex;
flex-direction: column;
`

const ShowcaseImage = styled.img`
height: 300px;
width: 300px;
margin: 50px 100px;
`

const ItemTitle = styled.div`
width: 300px;
height: 80px;
margin: 50px 100px;
border-radius: 10px;
background: #FFFFFF;
text-align: center;
`
const ShowcaseButton = styled.button

const Showcase = ({ props }) => {
    return (
        <ShowcaseItemFlex>
            <ShowcaseImage src={props.imgsrc} alt={props.alt} />
            <ItemTitle></ItemTitle>
        </ShowcaseItemFlex>
    )
}

export default Showcase;