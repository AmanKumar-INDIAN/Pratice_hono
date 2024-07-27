"use client"
import { getalldata } from "@/lib/Honoclint";
import { getAllauthors } from "@/quries/getAuthor";
import Image from "next/image";

export default  function Home() {
  const {data,isLoading}= getAllauthors()
  if(isLoading){
    return <h1>...loading</h1>
  }

  console.log(data?.data)
  return (
  <div className="">
{data?.data.map((daa)=>(
  <div className=" flex gap-2" key={daa.id}>
    <h1>{daa.id}</h1>
    <h1>{daa.name}</h1>
  </div>
 
))}
  </div>
  );
}
