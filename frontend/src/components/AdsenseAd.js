import { useEffect } from "react";

const AdsenseAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1427277154820976"
      data-ad-slot="1124418556"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default AdsenseAd;