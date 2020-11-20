import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion'
import {Fade} from '../animation';
import {useScroll} from './useScroll';

const FaqSection = () => {
    const [element, controls] = useScroll();
 
    return (
        <Faq variants={Fade} ref={element} initial='hidden' animate={controls}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title='How do I Start?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim.</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim.
                            </p>
                        </div>
                </Toggle>
                <Toggle title='Diffent Payment Methods'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim.
                            </p>
                        </div>
                </Toggle>
                <Toggle title='What Products do you Offer?'>
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, enim.
                            </p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
  display: block;
  span{
      display: block;
  }
  h2{
      padding-bottom: 1.4rem;
      font-weight: lighter;
  }
  .faq-line{
      background: #cccccc;
      height: 0.2rem;
      margin-top: 0.4rem;
      width: 100%;
  }

  .question{

      padding: 3rem 0rem;
      cursor: pointer;
  }

  .answer{
      padding: 2rem 0rem;
      p{
          padding: 1rem 0rem;
      }
  }

`

export default FaqSection;