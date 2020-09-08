import React from 'react';
import styled from 'styled-components'
import ShowcaseItem from "./showcase-item"


const ShowcaseContainer = styled.div`
display: flex;
max-width: 1600px;
justify-content: space-evenly;
margin: auto;
flex-wrap: wrap;
`

const Showcase = ({props}) => {
    var items = [];
    for(var i = 0; i < props.itemProps.length; i++) {
        items[i] = <ShowcaseItem key={i} props={props.itemProps[i]}/>
    }

    return (
        <ShowcaseContainer>
            {items}
        </ShowcaseContainer>
    )
}

export default Showcase;