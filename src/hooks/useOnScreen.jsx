import React, { useState, useEffect, useRef } from "react";

export default function useOnScreen(options) {
  console.log({ options });
  const ref = useRef();
  const [showHeader, setShowHeader] = useState(false);
  console.log({ showHeader });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log({ entry });
      setShowHeader(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, showHeader];
}
