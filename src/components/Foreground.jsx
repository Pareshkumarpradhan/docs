/* eslint-disable react/jsx-key */
import { useRef } from "react";
import Card from "./Card";


function Foreground() {

    const ref = useRef(null);

  const data = [
    {
      head: "What is Leadership?",
      desc: "Leadership is a philosophy it's a mentality. it's a state of mind. it's a way of opening. and it's available to each one of us.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green-600" },
    },
    {
      head: "How made success a bad word?",
      desc: "To be a leader is not to have a huge position. to be a leader is to see your job as a chance to impact the world. No matter what your job is.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      head: "The Power of a daily practices",
      desc: "Huge acievements is less is about your genetics and more about your rituals.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Upload", tagColor: "green-600" },
    },
    {
      head: "World-class language",
      desc: "inside every problem lies a precious opportunity to improve things.",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green-600" },
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item) => (
       <Card data={item} reference={ref}/>
    ))}
    </div>
  );
}

export default Foreground;
