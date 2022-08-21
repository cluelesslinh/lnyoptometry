import React, { useState } from 'react';
import { IoChevronUp } from 'react-icons/io5';
import { ButtonContainer, Button } from './ButtonStyle';

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
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <ButtonContainer>
            <Button>
                <IoChevronUp onClick={scrollToTop} />
            </Button>
        </ButtonContainer>
    );
}

export default ScrollButton;

