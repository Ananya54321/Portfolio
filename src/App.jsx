"use client";
import { useState, useEffect } from "react";
import Button from "./components/Button.jsx";
import Navbar from "./components/Navbar.jsx";
import working from "./assets/working.svg";

const App = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      return data?.products ?? [];
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log(fetchedData); // Check fetched data in console
    }
    getData();
  }, []);

  return (
    <div className="bg-[#0075A7] w-full h-screen">
      <Navbar />
      <div className="flex justify-between w-full items-center">
        <div className="m-10 ml-20 w-[40%] flex flex-col">
          <p className="rancho text-3xl md:text-7xl">Hello There, I'm Ananya!</p>
          <p className="pt-[1.5rem] text-2xl imprima">
            I am a full stack web developer who is passionate about creating
            impactful projects and finds peace in creating digital art.
          </p>
          <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
            <Button />
          </div>
        </div>
        <div className="m-20">
          <img src={working} alt="a woman working on code and sipping tea" />
        </div>
      </div>
    </div>
  );
};

export default App;
