/**
 * Analytics utility for tracking page views and custom events.
 * This can be integrated with Google Analytics (GA4) or any other provider.
 */

const GA_ID = import.meta.env.VITE_GA_ID;

export const initAnalytics = () => {
  if (!GA_ID) {
    console.log('[Analytics] No GA ID found. Analytics is in development mode.');
    return;
  }

  // Load GA script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
};

export const trackPageView = (path: string) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  } else {
    console.log(`[Analytics] Page View: ${path}`);
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (GA_ID && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.log(`[Analytics] Event: ${action} | Category: ${category} | Label: ${label} | Value: ${value}`);
  }
};

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
