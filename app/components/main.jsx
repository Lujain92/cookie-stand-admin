import Form from './Form'
import Card from './card'
import { useState } from "react";
import Image from 'next/image';
import ReportTable from './ReportTable';

export default function Main() {

    const [location, setlocation] = useState("");
    const [maxumimCookie, setmaxumimCookie] = useState("");
    const [minumimCookie, setminumimCookie] = useState("");
    const [avgCookie, setavgCookie] = useState("");
    const [result, setresult] = useState([])


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

    return (

        <main className='bg-[#EFE2B2] flex g-10 m-10 '>
            <Form allInfo={submitFuction} />
            <Card
                result={result}

            />
           <button>
            Overview
           </button>  


        <ReportTable/>

           


        </main>
    )

}