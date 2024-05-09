import { SliderFilledTrack } from "@chakra-ui/react";
const theAamAadmiFamilyTrailer =
  process.env.PUBLIC_URL + "/videos/The_Aam_Aadmi_Family.mp4";
const ghoomerTrailer = process.env.PUBLIC_URL + "/videos/Ghoomer.mp4";
const gadarTrailer = process.env.PUBLIC_URL + "/videos/Gadar2.mp4";
const durangaTrailer = process.env.PUBLIC_URL + "/videos/Duranga.mp4";
const khudaHaafizTrailer =
  process.env.PUBLIC_URL + "/videos/KHUDA_HAAFIZ_2.mp4";
const dummy_video = process.env.PUBLIC_URL + "/videos/Dummy_Video.mp4";

const SliderPics = [
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5454041/cover/1920x7701164cd9a3a114beda17aff22a7b434d8e43b8378bef84371a98d39e76e88643f.jpg",
    videoSrc: ghoomerTrailer,
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x770631cb1ff047c46cabaf54bdd76966f607e94e3df124b4cedac8e3aea379fc3e1.jpg",
    videoSrc: gadarTrailer,
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3351/cover/1920x770fd892d16d0b54a9880685f3642f66fc7eee9b9f1bc1f4355916f907d173c5b53.jpg",
    videoSrc: theAamAadmiFamilyTrailer,
  },
  // {
  //     image:"https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-6-366/cover/1920x770126fa06f926048bf8125944ea2814207.jpg"
  // },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1420,h_569,c_scale,f_webp,q_auto:eco/resources/0-0-1z5206274/cover/1920x770624681d282d348569ae038134fb002f847561990dc274badb1e1b41c74423b34.jpg",
    videoSrc: khudaHaafizTrailer,
  },
  {
    image:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5458039/cover/1920x770cb0796c286904c23973a9b8366d383f5e92ab6f2ecaa4c82a15a193ed117727f.jpg",
    videoSrc: durangaTrailer,
  },
];

export default SliderPics;
