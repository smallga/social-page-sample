import { useEffect, useState } from "react";

const useElementOnScreen = (options: any, targetRef: any) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        }, options);

        observer.observe(targetRef.current);

        return () => {
            observer.disconnect();
        };
    }, [options, targetRef]);

    return isVisible;
}

export default useElementOnScreen;