import type {ReactNode} from 'react';
import {useEffect} from 'react';

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

const CRISP_WEBSITE_ID = 'bec75be0-a5bd-48af-918b-1f2e88797781';

type RootProps = {
  children: ReactNode;
};

export default function Root({children}: RootProps): ReactNode {
  useEffect(() => {
    window.$crisp = window.$crisp ?? [];
    window.CRISP_WEBSITE_ID = CRISP_WEBSITE_ID;

    const existingScript = document.querySelector<HTMLScriptElement>('script[data-crisp-chat="true"]');
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    script.dataset.crispChat = 'true';
    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
}
