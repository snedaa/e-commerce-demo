import SliderItem from "react-slick";


export default function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <SliderItem {...settings} className="w-full relative">
        <div className="slider-photos">
          <img
            src="https://themewagon.github.io/cozastore/images/banner-01.jpg"
            alt=""
          />
        </div>
        <div className="slider-photos">
          <img
            src="https://media.istockphoto.com/id/658912662/photo/handsome-dude.jpg?s=612x612&w=0&k=20&c=XYv3P84G2yl48KpKI7w98TBISJ4YuyELCG0cfCXis30="
            alt=""
          />
        </div>
        <div className="slider-photos">
          <img
            src="https://p4.wallpaperbetter.com/wallpaper/972/401/138/rosie-huntington-whiteley-blonde-model-photo-shoot-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="slider-photos">
          <img
            src="https://capitalregionclassical.org/wp-content/uploads/2022/02/Jackiweb.webp"
            alt=""
          />
        </div>
      </SliderItem>

      <div className="absolute top-64  left-11 flex flex-col">
        <h1 className="text-[27px] tracking-widest uppercase font-thin">
          Fall Collection
        </h1>
        <span className="text-[30px] uppercase text-6xl">New Season</span>
        <button className=" border rounded uppercase !border-black transition-all text-black w-1/3 p-3 mt-4 hover:text-white hover:bg-black">
          Shop
        </button>
      </div>
    </div>
  );
}
