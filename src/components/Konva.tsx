import React, { useEffect, useRef, useState } from "react";
import { Stage, Layer, Rect, Text, Star, Shape, Image } from "react-konva";
import sampleImg from "../assets/farmImage.png";
import URLImage from "./URLImage";

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

function TestKonva() {
  const [stars, setStars] = useState(INITIAL_STATE);
  const imageRef = useRef(null);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      }),
    );
  };
  const handleDragEnd = (e: any) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      }),
    );
  };

  // useEffect(() => {
  //   const image = new window.Image();
  //   image.src = "URL_이나_이미지_경로"; // 이미지의 URL 또는 경로를 지정하세요

  //   image.onload = () => {
  //     // 이미지가 로드된 후에 Stage를 다시 렌더링하도록 업데이트
  //     imageRef.current?.image(image);
  //     imageRef.current?.getLayer().batchDraw();
  //   };
  // }, []);

  return (
    <Stage width={1500} height={700}>
      <Layer>
        <URLImage
          url='https://t3.ftcdn.net/jpg/05/02/18/64/360_F_502186443_Kubg3Wl76uE8BYl1tcAuYYXgGKAaO6r4.jpg'
          x={1500}
          y={700}
        />
        <Text text='try to drag' />
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill='#89b717'
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor='black'
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
    </Stage>
  );
}

export default TestKonva;
