import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';


const Toggle = ({children, title}) => {

    const [toggle, setToggle] = useState(false);

    return(
        <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
          <Question layout>{title}</Question>
          {toggle ? children : ''}
          <div className="faq-line"></div>
        </motion.div>
    )
}


const Question = styled(motion.h4)`
    font-size: 1.7rem;
    color: white;
    cursor: pointer;

`

export default Toggle;