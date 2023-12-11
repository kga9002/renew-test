import React, { useEffect, useRef, useState } from "react";
import { Image } from "react-konva";

type Props = {
  url: string;
  x: number;
  y: number;
};

function URLImage(props: Props) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  function loadImage() {
    const img = new window.Image();
    img.src = props.url;
    img.crossOrigin = "Anonymous";
    imageRef.current = img;
    imageRef.current.addEventListener("load", handleLoad);
  }

  function handleLoad() {
    setImage(imageRef.current);
  }

  useEffect(() => {
    loadImage();
    return () => {
      if (imageRef.current) {
        imageRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return <Image x={props.x} y={props.y} image={image ? image : undefined} />;
}

export default URLImage;
