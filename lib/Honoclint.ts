import { AppType } from '@/app/api/[[...route]]/route'
import { hc } from 'hono/client'

 export const client = hc<AppType>(' http://localhost:3001/')

export async function getalldata(){
    const res=await client.api.authors.$get();
    const data= await res.json()
      console.log(data)
    return data
    console.log(data)
}


