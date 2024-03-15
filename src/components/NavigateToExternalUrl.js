import { useEffect } from "react";

const NavigateToExternalUrl = ({ url }) => {
  useEffect(() => {
    window.location.href = url;
  }, [url]);

  return null; // or any other content you want to render
};

export default NavigateToExternalUrl;
