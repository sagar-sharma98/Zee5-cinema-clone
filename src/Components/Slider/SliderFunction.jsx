import React,{useState,useEffect} from "react";
// import axios from "axios";
import "../../Styles/Components.css";
import { Box, Center, Image } from "@chakra-ui/react";
import SliderPics from "./SliderPics";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
export default function SliderFunction() {
  const [current, setCurrent] = useState(0);
  // const [data,setData]=React.useState([])
  const slides = SliderPics;
  const length = SliderPics.length;
  let interval;

//   function get(){
//     return axios.get("https://glorious-tuna-outfit.cyclic.app/homepage")
// //  }

  useEffect(() => {
    // get()
    // .then((res)=>setData(res.data[0].bigposter));
    // console.log(data);

    interval = setTimeout(() => {
      autoSlideNext();
    }, 3000);
  }, [current])

  const autoSlideNext = ()=> {
    clearTimeout(interval);
    nextSlide();
  }
  

  const nextSlide = () => {
    clearTimeout(interval);
    setCurrent(current === length - 1 ? 0 : current + 1);
    
  };
  const prevSlide = () => {
    clearTimeout(interval);
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <Box className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {slides.map((item, index) => {
        return (
          <Center className={index === current ? 'slide active' : 'slide'}
          key={index} >
            {index === current && (
              <Image bg="#0f0617" src={item.image} alt='travel image' className='image' w="200vh"/>
            )}
          </Center>
        );
      })}
    </Box>
  );
}
