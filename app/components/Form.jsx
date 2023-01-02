export default function Form(props) {

    




    return (
        <>
            <form onSubmit={props.allInfo} className='' >

                <div className='flex flex-col items-center gap-5 p-5 text-center  border-[#270D0B] border-2 shadow-md rounded mx-20  my-10'>

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


            {/* <p>{(location || minumimCookie || maxumimCookie || avgCookie) && `{'location' : ${location},'minCustomers':${minumimCookie}, 'maxCustomers':${maxumimCookie}, 'avgCookie':${avgCookie}}`}</p> */}

        </>
    )

}