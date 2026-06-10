import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, state, search } = useLocation();

  useEffect(() => {
    // ❌ If coming with service selection → don't scroll
    if (state?.id || search.includes("id=")) {
      return;
    }

    // ✅ Otherwise scroll to top
    window.scrollTo(0, 0);

  }, [pathname, state, search]);

  return null;
}

export default ScrollToTop;