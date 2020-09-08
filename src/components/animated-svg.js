import React from 'react';
import styled from 'styled-components';

const Morph = styled.svg`
	position: relative;
	height: 100%;
	fill: var(--background-color-2);
  flex: none;
`
class AnimatedSVG extends React.Component {
    

    render(props) {
        return (
            <Morph className="morph" width="100%" height="100%" viewBox="0 0 1400 770">
                <path d={props.path} />
            </Morph>
        )
        /*return (
            <Morph>
                <Anime easing="easeOutElastic"
                    duration={shape.animation.path.duration}
                    direction="alternate"
                    loop={true}
                    autoplay={true}
                    d={shape.pathAlt}
                    scale={[shape.scaleX, shape.scaleY]}>
                    <path d={shape.path} />
                </Anime>
            </Morph>
        );
        */
    }
} export default AnimatedSVG;