import { useState } from "react";
export default function Form() {

    const [location, setlocation] = useState("");
    const [maxumimCookie, setmaxumimCookie] = useState("");
    const [minumimCookie, setminumimCookie] = useState("");
    const [avgCookie, setavgCookie] = useState("");


    const submitFuction = (e) => {
        e.preventDefault()


        setlocation(e.target.location.value)
        setmaxumimCookie(e.target.max.value)
        setminumimCookie(e.target.min.value)
        setavgCookie(e.target.avg.value)
        //all



    }




    return (
        <>
            <form onSubmit={submitFuction} className='' >

                <div className='flex flex-col items-center gap-5 p-5 text-center  border-[#270D0B] border-2 shadow-md rounded mx-20 w-1/5 my-10'>

                    <label for="location"
                        className='text-center font-semibold text-[#270D0B]'
                    >Location</label>
                    <input type="text"
                        id="location"
                        name="location"
                        placeholder="Your location.."
                        className='text-center bg-[#BD8C61] placeholder-[#EFE2B2]  rounded border border-[#270D0B]'


                    />



                    <label for="min"
                        className='text-center font-semibold text-[#270D0B]'
                    >Minumim customer per hour</label>
                    <input type="text"
                        id="min"
                        name="min"
                        placeholder="Minumim .."
                        className='text-center bg-[#BD8C61] placeholder-[#EFE2B2] rounded border border-[#270D0B]'

                    />






                    <label for="max"
                        className='text-center font-semibold text-[#270D0B]'
                    >Maxumim customer per hour</label>
                    <input type="text"
                        id="max"
                        name="max"
                        placeholder="Maxumim.."
                        className='text-center bg-[#BD8C61] text-red placeholder-[#EFE2B2] rounded border border-[#270D0B]'
                    />




                    <label for="min"
                        className='text-center font-semibold text-[#270D0B]'


                    >avarge customer per hour</label>
                    <input type="text"
                        id="avg"
                        name="avg"
                        placeholder="average.."
                        className='text-center bg-[#BD8C61] placeholder-[#EFE2B2] rounded border border-[#270D0B]'
                    />


                    <input type="submit" value="Create" class="bg-transparent hover:bg-[#270D0B] text-black font-semibold hover:text-white py-2 px-4 border border-[#270D0B] hover:border-transparent rounded" />

                </div>







            </form>


            <p>{(location || minumimCookie || maxumimCookie || avgCookie) && `{'location' : ${location},'minCustomers':${minumimCookie}, 'maxCustomers':${maxumimCookie}, 'avgCookie':${avgCookie}}`}</p>

        </>
    )

}