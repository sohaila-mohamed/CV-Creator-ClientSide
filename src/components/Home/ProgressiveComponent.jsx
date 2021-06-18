import React, { useEffect, useState } from "react";
import './Progressive.css'
const ProgressiveRender = (props) => {
    const [visible,setVisibility]=useState(false);
    const elementRef = React.useRef();

    useEffect(()=>{
        const intersection_observer=new IntersectionObserver((elements)=>{
            elements.forEach((element)=>setVisibility(element.isIntersecting))
        });
        intersection_observer.observe(elementRef.current);
    },[]);
    

    return ( 
<div className={`w-100 d-flex fade-in-section ${visible ? 'is-visible' : ''}`}
 ref={elementRef}
>
{props.children}
</div>
     );
}
 
export default ProgressiveRender;