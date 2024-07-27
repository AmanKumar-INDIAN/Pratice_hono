import { client } from "@/lib/Honoclint";
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";


async function getauthors(){
    const res=await client.api.authors.$get();
    const data=await res.json()
    console.log(data)
    return data
}

 export function getAllauthors(){
   const querydata= useQuery({
    queryKey:["authors"],
    queryFn:getauthors
   })

   return querydata

}