import React, {useEffect} from 'react';

const ScrollTop = ({pathname}) => {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
        })
    }, [pathname])
    return null;
}

export default ScrollTop;