import { Typography as Font } from "@material-ui/core";

const Img = (props) => {
  const {
    picture: { src, title, desc, shortDesc, alt },
  } = props;
  return (
    <div className="Image">
      <Font variant="h5">{title}</Font>
      <img src={src} alt={alt} />
      <Font variant="body2">{shortDesc}</Font>
      <div className="Shadow"></div>
    </div>
  );
};

export default Img;
