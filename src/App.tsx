import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
// import "overlayscrollbars/overlayscrollbars.css";

const lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, quasi dolorum quos, nostrum excepturi voluptas error, vitae enim molestiae consectetur perspiciatis saepe voluptatum dolorem delectus maiores est. Sunt, accusantium quo?";

const tempdata = [
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
  {
    name: "Jane",
    age: 20,
    job: "developer",
  },
];
function App() {
  const navigate = useNavigate();
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-full h-full '>
        {/* <div>
          <p onClick={() => navigate("/fabric")}>fabric</p>
          <p onClick={() => navigate("/konva")}>konva</p>
          <p onClick={() => navigate("/leaflet")}>leaflet</p>
        </div> */}
        {/* <div className='h-full mx-40pxr bg-blue-100 flex flex-row'> */}
        {/* <div className='bg-yellow-100 layout-8 h-500pxr rounded-xl'>
          <div className='h-50pxr bg-gray-100 w-full flex flex-row rounded-t-xl'>
            <div className='w-[40%]'>이름</div>
            <div className='w-[20%]'>나이</div>
            <div className='w-[40%]'>직업</div>
          </div>
          <OverlayScrollbarsComponent className='w-full h-450pxr overflow-y-auto'>
            {tempdata.map((o, i) => (
              <div className={"h-50pxr w-full flex flex-row " + (i % 2 === 0 ? "bg-pink-100" : "")}>
                <div className='w-[40%]'>{o.name}</div>
                <div className='w-[20%]'>{o.age}</div>
                <div className='w-[40%]'>{o.job}</div>
              </div>
            ))}
          </OverlayScrollbarsComponent>
        </div> */}
        {/* </div> */}
        <Outlet />
      </div>
    </div>
  );
}

export default App;
