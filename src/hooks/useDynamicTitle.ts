import { useEffect } from 'react';

export function useDynamicTitle(defaultTitle: string, inactiveTitle: string) {
  useEffect(() => {
    let originalTitle = document.title;
    
    // Set initially
    if (defaultTitle) {
      document.title = defaultTitle;
      originalTitle = defaultTitle;
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = inactiveTitle;
        // Optionally swap favicon here
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (link) {
            link.dataset.originalHref = link.href;
            // You can replace with an empty or sad face favicon
        }
      } else {
        document.title = originalTitle;
        const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
        if (link && link.dataset.originalHref) {
            link.href = link.dataset.originalHref;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.title = originalTitle;
    };
  }, [defaultTitle, inactiveTitle]);
}
