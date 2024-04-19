import PropTypes from "prop-types";
import MetaDecor from "./MetaDecor";

const BlogMetaDecorator = ({ title, description, url, imageAlt, imageUrl }) => {

  return (
    <MetaDecor
      imageUrl={imageUrl}
      title={title}
      description={description}
      imageAlt={imageAlt}
      url={url}
    />
  );
};

BlogMetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

export default BlogMetaDecorator;
