import { useEffect } from "react";

const ScrollManagement = ({ children }) => {
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.hash) {
      const hash_id = url.hash.replace(/^#/, "");
      if (hash_id) {
        const element = document.getElementById(hash_id);
        element.scrollIntoView();
      }
    }
  }, []);

  return children;
};

export default ScrollManagement;
