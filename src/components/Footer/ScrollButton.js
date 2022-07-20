import React, { useState } from 'react';
import { ButtonContainer, Button, ButtonText } from './ButtonStyle';

const ScrollButton = () => {

    const [setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <ButtonContainer>
            <Button>
                <ButtonText onClick={scrollToTop}>TOP</ButtonText>
            </Button>
        </ButtonContainer>
    );
}

export default ScrollButton;

