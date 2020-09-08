import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../hooks/useWindowDimensions';
const MorphWrap = styled.div`
    position: relative;
    overflow: visible;
    width:100%;
    height:100%;
    min-width: 1800px`
    const Morph = styled.svg`
    position: absolute;
    margin: auto;`
const AnimatedSVG = (props) => {
    const { height, width } = useWindowDimensions();
    const scale = 1.1;
    const style = {
        top: (height/2) - 550
    };
    return (
        <MorphWrap>
            <Morph style={style} className="morph" viewBox={`${0} 0 ${1800} ${1100}`}>
                <path className="front-path" d={props.frontPath} />
                <path className="back-path" d={props.backPath} />
            </Morph>
        </MorphWrap>
    );
}
export default AnimatedSVG;