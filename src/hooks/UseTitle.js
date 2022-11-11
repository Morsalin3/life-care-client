import React, { useEffect } from 'react';

const UseTitle = (title) => {
   useEffect(()=>{
    document.title =`${title}-Life Care`
   },[title])
};

export default UseTitle;


// const data =
// [
//    {
//       "service_id": "01",
//       "title": "Physiotherapy",
//       "img": "https://i.postimg.cc/3JKpMc2P/physiotherapy-3.jpg",
//       "price": "50",
//       "rating": "4.5",
//       "details": "Physiotherapy is an evidence-based healthcare profession that views human movement as central to health and wellbeing. Physiotherapy aims to maintain, restore and improve your function after disease or injury, so you can get back to doing what you love and enjoy an injury-free lifestyle that doesn’t hold you back."
//    },
//    {
//       "service_id": "02",
//       "title": "Musculoskeletal Physiotherapy",
//       "img": "https://i.ibb.co/0XJr74N/Musculoskeletal-physiotherapy.jpg",
//       "price": "65",
//       "rating": "4.5",
//       "details": "Musculoskeletal (or Manipulative) Physiotherapists are experts in the management of musculoskeletal and particularly spinal-related pain. A Musculoskeletal Physiotherapist uses their expert assessment skills to diagnose the problem and provide holistic and effective, evidence-based treatment. Treatment provided can include specific manual therapy such as mobilisation or joint manipulation, graded and individualised exercise rehabilitation, and pain neurophysiology education."
//    }
// ]