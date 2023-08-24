import { useEffect, useState } from 'react';

export const useDevice = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.matchMedia('(pointer:coarse)').matches);

        // Initial call to handleResize was missing parentheses
        handleResize();

        // Add an event listener to track window resize events
        window.addEventListener('resize', handleResize);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return isMobile;
};
