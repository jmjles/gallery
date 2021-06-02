import { useState } from "react";

const GalleryF = () => {
  const [grid, setGrid] = useState(false);
  const handleGrid = () => setGrid((prev) => !prev);
  return { grid, handleGrid };
};

export default GalleryF;
