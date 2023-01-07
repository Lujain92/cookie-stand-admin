import { hours ,data} from "./Data"
export default function ReportTable() {
    const totalOf=(arr)=>{
        const res=arr.reduce((acc,curr)=>{
            return acc+curr
        },0

        )
return res
    }


    // const totalPerTime=(time)=>{
    //     let arr =data.map(item=>{
    //         return item.time_sale.time
    //     }
    //         )
    //         console.log(arr)

    // }



    
    return (
        <>
            <table class="text-left text-[#270D0B]">

                <thead  class="text-xs uppercase bg-[#BD8C61]">
                    <tr>                
                    <th  class="px-6 py-3">Location</th>
                    { hours.map(item=>{
                        return( <th  class="px-6 py-3">{item}</th>
                        )
                    })

                    }
                    <th  class="px-6 py-3">Total</th>
                    </tr>
                </thead>


                <tbody >
                {data.map(item=>{
                            return (
                            <tr>
                                  
                                <td class="px-6 py-3">{item.location}</td>

                                     {Object.values(item.time_sale).map(val=>{
                                        return <td class="px-6 py-3">{val}</td>
                                     })}

                             <td  class="px-6 py-3">{totalOf(Object.values(item.time_sale))} </td>
                            </tr>
                          )
                        })}
                    


                </tbody>


                <tfoot>
                    <tr>
                        <td  class="px-6 py-3">Total</td>
                    </tr>

                    {/* {hours.map(time=>{
                        <td>{totalPerTime(time)}</td>

                    })} */}
                </tfoot>
            </table>



        </>
    )
}