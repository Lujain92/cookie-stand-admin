import Form from './Form'
import Card from './card'
import { useState } from "react";
import Image from 'next/image';
import ReportTable from './ReportTable';
import Login from './login';

export default function Main() {

    const [location, setlocation] = useState("");
    const [maxumimCookie, setmaxumimCookie] = useState("");
    const [minumimCookie, setminumimCookie] = useState("");
    const [avgCookie, setavgCookie] = useState("");
    const [result, setresult] = useState([])
    const [flag, setflag] = useState(false)



    const submitFuction = (e) => {
        e.preventDefault()


        setlocation(e.target.location.value)
        setmaxumimCookie(e.target.max.value)
        setminumimCookie(e.target.min.value)
        setavgCookie(e.target.avg.value)

        let objResult = {
            location: location || "enter location",
            maxumimCookie: maxumimCookie || "enter maxium cookie",
            minumimCookie: minumimCookie || "enter minium cookie",
            avgCookie: avgCookie || "enter avg cookie"
        }

        setresult([...result, objResult])




    }


    const handleOverview = () => {
        setflag(true)
    }
    return (<>
<div className='dark:bg-[#808080] flex justfiy-center flex-col'>
    <div >
        <center><button
        onClick={handleOverview}
        class='bg-transparent hover:bg-[#270D0B] darkhover:bg-[#FFFBEB] dark:bg-white dark:text-black text-[#270D0B] font-semibold dark:hover:text-slate-900 hover:text-[#EFE2B2] py-2 px-4 border dark:border-black border-[#270D0B] hover:border-transparent rounded mt-5'>
        Overview
    </button></center>
    </div>

        <main className='bg-[#EFE2B2] dark:bg-[#808080]  flex g-10 py-10'>
            
            <Form allInfo={submitFuction} />

            <Card result={result}/>
           


        </main>
        {flag && <ReportTable /> }
        </div>

    </>
       
    )

}