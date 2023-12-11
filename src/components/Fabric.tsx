import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import * as fabric from "fabric"; // v6
import { fabric } from "fabric"; // v5
import { Canvas } from "fabric/fabric-impl";
import sampleData from "./sample.json";
// import sampleImg from "../assets/farmImage.png";
// import Tooltip from "@mui/material/Tooltip";

function FabricCanvas() {
  const fabricRef = useRef<Canvas | null>(null);
  const canvasRef = useRef(null);
  const [selectedColor, setSelectdColor] = useState("#000000");

  const sampleImg =
    "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J";
  // "https://res-console.cloudinary.com/dmsbnzlcf/media_explorer_thumbnails/975065ea2883c237dbfedd10f38512c5/detailed";

  const [sampleText, setSampleText] = useState("");

  const addRect = () => {
    // 아래는 rectangle + text를 따로 해서 group화 시켜서 추가(input에 작성한 text)
    // const text = new fabric.Text(sampleText, {
    //   left: 50,
    //   top: 50,
    //   fontSize: 20,
    //   textAlign: "center", // 텍스트 중앙 정렬
    //   originX: "center", // X 축 중심 위치
    //   originY: "center", // Y 축 중심 위치
    // });
    // const rect = new fabric.Rect({
    //   left: 50,
    //   top: 50,
    //   width: 100,
    //   height: 100,
    //   fill: "transparent",
    //   stroke: "black",
    // });
    // const textgroup = new fabric.Group([rect, text], {
    //   left: 50,
    //   top: 50,
    // });

    // 텍스트박스에 bg 넣어서 추가
    const textbox = new fabric.Textbox(sampleText, {
      left: 50,
      top: 50,
      width: 100,
      textAlign: "center",
      fill: "black",
      fontSize: 16,
      scaleX: 1,
      scaleY: 1,
      backgroundColor: "blue",
      fontFamily: "Pretendard",
      padding: 2,
    });
    fabricRef.current?.add(textbox);
  };

  // 이미지 background로 로드하는법
  const loadImg = () => {
    fabric.Image.fromURL(sampleImg, function (img) {
      img.scaleToWidth(fabricRef.current?.width!);
      img.scaleToHeight(fabricRef.current?.height!);

      fabricRef.current?.setBackgroundImage(img, fabricRef.current.renderAll.bind(fabricRef.current), {
        scaleX: fabricRef.current.width! / img.width!,
        scaleY: fabricRef.current.height! / img.height!,
        top: 0,
        left: 0,
      });
    });
  };

  // json으로 저장된 이전 정보 불러오기
  const loadJson = () => {
    fabricRef.current?.loadFromJSON(sampleData, fabricRef.current?.renderAll.bind(fabricRef.current));
  };

  // 캔버스 불러오기
  const initCanvas = () => {
    fabricRef.current = new fabric.Canvas(canvasRef.current);
    fabricRef.current.setWidth(1000);
    fabricRef.current.setHeight(500);
  };

  useEffect(() => {
    loadJson();
    loadImg();

    // 원래는 unmount시에 canvas dispose가 들어가야하는데, image가 background에 들어있으면 에러가 나는데 그게 beta 버전에서만 수정되어서,
    //  unmount할때 이전 canvas를 다시 불러오도록 함
    return () => {
      initCanvas();
    };
  }, []);

  // 원래는 이렇게 사용
  // useEffect(() => {
  //   initCanvas();
  //   loadJson();

  //   return () => {
  //     fabricRef.current?.dispose();
  //   };
  // }, []);

  // 캔버스의 움직임 감지
  useEffect(() => {
    // hover
    // fabricRef.current?.on("mouse:over", function (e) {
    //   e?.target?.set("fill", "red");
    //   fabricRef.current?.renderAll();
    // });
    // hover out
    // fabricRef.current?.on("mouse:out", function (e) {
    //   e?.target?.set("fill", "black");
    //   fabricRef.current?.renderAll();
    // });
    // resizing
    // fabricRef.current?.on("object:scaling", function (e) {
    //   if (e.target && e.target.height && e.target.scaleY) {
    //     const lastHeight = e.target.height * e.target.scaleY;
    //     e.target.set({
    //       height: lastHeight || e.target.height,
    //       scaleY: 1,
    //     });
    //     fabricRef.current?.renderAll();
    //   }
    // });
    // 리사이징시 텍스트 사이즈 유지??
    // fabricRef.current?.on("object:resizing", (e)=>{
    //   let lastHeight;
    //   e?.target?.
    // })
  }, [fabricRef]);

  // rect 선택후 색상 선택해서 bgcolor 바꾸기
  useEffect(() => {
    const selectedObj = fabricRef.current?.getActiveObject();
    if (selectedObj) {
      selectedObj.set("backgroundColor", selectedColor);
      fabricRef.current?.renderAll();
    }
  }, [selectedColor]);

  return (
    <div className='w-full h-full'>
      <canvas ref={canvasRef} className='' />
      <div className='flex flex-col items-start'>
        <button
          // 저장 누르면 콘솔에 json 확인 -> sample.json의 내용을 그걸로 변경하면 loadJson에서 그 내용으로 로드
          onClick={() => {
            const jsontoString = JSON.stringify(fabricRef.current?.toJSON());
            console.log(jsontoString);
          }}
        >
          저장
        </button>

        <input
          type='text'
          className='border-red-300 border border-solid'
          value={sampleText}
          onChange={(e) => setSampleText(e.target.value)}
        />
        <button
          onClick={() => {
            addRect();
          }}
        >
          추가
        </button>
        <input type='color' value={selectedColor} onChange={(e) => setSelectdColor(e.target.value)} />
      </div>
    </div>
  );
}

export default FabricCanvas;
