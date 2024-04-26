import React from "react";
import { Helmet } from "react-helmet";
import img from "./asserts/previewWebImg.png"

function HelmetComponent1() {
  return (
    <div>
      <Helmet>
        <meta property="og:image" content={img} />
        <title>{"Component 1"}</title>
        <meta property="og:title" content={"Component 1"} />
        <meta name="description" content={"Đay là component 1"} />
        <meta property="og:description" content={"Đay là component 1"} />
        <meta property="og:url" content={"https://test-helmet-eight.vercel.app/1"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={"anhr 1"} />
      </Helmet>
      );
      <h2>COMPONENT 1</h2>
    </div>
  );
}

export default HelmetComponent1;
