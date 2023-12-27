import { useEffect, useState } from 'react';

import '../styles/global.css';

export default function App({ Component, pageProps }) {
    const [timer, setTimer] = useState(0);

    // TODO re-eval.. do I need?
    useEffect(() => {
      const pageLeaveTime = localStorage.getItem('pageLeaveTime');
      if (pageLeaveTime) {
        const totalTime = localStorage.getItem('totalTime');
        const timeAway = new Date().getTime() - Number(pageLeaveTime);
        setTimer(Number(totalTime) + timeAway);
      }
    }, []);

    // TODO re-eval.. do I need?
    useEffect(() => {
      const handleUnload = () => {
        localStorage.setItem('pageLeaveTime', new Date().getTime());
        localStorage.setItem('totalTime', Number(timer));
      };
      window.addEventListener('beforeunload', handleUnload);
      return () => window.removeEventListener('beforeunload', handleUnload);
    }, []);

    return <Component {...pageProps} timer={timer} />;
  }