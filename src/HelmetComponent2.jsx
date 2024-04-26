import React from "react";
import { Helmet } from "react-helmet";
import img from "./asserts/previewWebImgResult.png"
function HelmetComponent2() {
  return (
    <div>
      <Helmet>
        <title>{"Component 2"}</title>
        <meta property="og:image" content={img} />
        <meta property="og:title" content={"Component 2"} />
        <meta name="description" content={"Đay là component 2"} />
        <meta property="og:description" content={"Đay là component 2"} />
        <meta property="og:url" content={"https://test-helmet-eight.vercel.app/2"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={"anhr 2"} />
      </Helmet>
      );
      <h2>COMPONENT 1</h2>
    </div>
  );
}

export default HelmetComponent2;
