import styled from "styled-components"
import { useScrollMonitor } from 'scrollmonitor-hooks';
import React, { useRef } from "react"


const SectionContainerBase = styled.div`
width: 100%;
height: 900px;
max-width: 1600px;
margin: auto;
`

const SectionContainer = ({children, callbacks}) => {
    const ref = useRef(null);
    useScrollMonitor(ref, callbacks, -300);
    return (
        <SectionContainerBase ref={ref} className="content-wrap">
            {children}
        </SectionContainerBase>
    );
}
export default SectionContainer;