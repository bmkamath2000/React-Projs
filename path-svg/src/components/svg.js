import React from 'react';
function Parabola() {
    return <path d="M 100 350 q 150 -300 300 0" stroke="blue"
    stroke-width="5" fill="none" />;
  }
function Line()
{
    return <path d='M 175 200 l 150 0' stroke='green' stroke-width='3'
    fill='none' />;
}
class SVG extends React.Component
{
    render()
    {
        
        return(
            <svg width="400" height="450">
            <Line/>
            <Parabola/> </svg>
        );
    }
}
export default SVG;