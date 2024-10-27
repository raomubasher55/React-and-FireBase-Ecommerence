import { logEvent} from 'firebase/analytics';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from '../../firebase/firebaseCongif';

const PageTracker = () => {
    const location = useLocation();

    useEffect(() => {
        logEvent(analytics, 'page_view', {
            page_location: window.location.href,
            page_path: location.pathname,
            page_title: document.title,
        });
    }, [location]);

    return null;
};

export default PageTracker;
