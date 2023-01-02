import Image from "next/image"
export default function Card(props) {
    return (<>
    <div className="m-5 grid grid-cols-3 grid-flow-row gap-4"  >
    { props.result.map(item=>{
       return( 
       <div class="max-w-sm rounded overflow-hidden shadow-lg border-[#270D0B] border-2 ">
       <Image
           src="/assets/cookie.png"
           width={300}
           height={300}
           className='content-center'
       />

       <div class="px-6 py-4">
           <div class="font-bold text-xl mb-2">{item.location}</div>
           <p class="text-gray-700 text-base">
                         <p> minumimCookie: {item.minumimCookie}</p> 
        
                          <p>maxumimCookie: {item.maxumimCookie}</p> 
                           <p>avgCookie:{item.avgCookie}</p>

           </p>
       </div>
       
   </div>) 

    })}
        
    </div> 
    {(props.result.length == 0) &&
                <div  className="items-center'">
                    <p className=" font-bold text-[#270D0B] text-3xl text-center m-4">No cookiee</p>
                    <Image
                        src="/assets/wait.gif"
                        width={500}
                        height={500}

                    />
                </div>

            }
    

        

    </>)

}