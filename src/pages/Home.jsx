import React from "react";
import Navbar from "../components/navbar/Navbar";
import Slider from "../components/slider/Slider";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Slider />
      <Category />
    </div>
  );
}
