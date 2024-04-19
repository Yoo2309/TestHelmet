import React from "react";
import BlogMetaDecorator from "./BlogMetaDecor";

function HelmetComponent1({ title, description, imageUrl, imageAlt, url }) {
  return (
    <div>
      <BlogMetaDecorator
        imageUrl={imageUrl}
        title={title}
        description={description}
        imageAlt={imageAlt}
        url={url}
      />
      <h2>COMPONENT 2</h2>
    </div>
  );
}

export default HelmetComponent1;
