import { useState } from "react";
export default function Form() {

    const [location, setlocation] = useState("");
    const [maxumimCookie, setmaxumimCookie] = useState("");
    const [minumimCookie, setminumimCookie] = useState("");
    const [avgCookie, setavgCookie] = useState("");

   
    const submitFuction =(e)=>{
        e.preventDefault()
        

        setlocation(e.target.location.value)
        setmaxumimCookie(e.target.max.value)
        setminumimCookie(e.target.min.value)
        setavgCookie(e.target.avg.value)
        //all



    }




    return (
        <>
            <form onSubmit={submitFuction} >

                <label for="location">Location</label>
                <input type="text"
                 id="location" 
                 name="location" 
                 placeholder="Your location.."
                 />

                <label for="min">Minumim customer per hour</label>
                <input type="text" id="min" name="min" placeholder="Minumim customer per hour.." />


                <label for="max">Maxumim customer per hour</label>
                <input type="text" id="max" name="max" placeholder="Maxumim customer per hour.." />

                <label for="min">avarge customer per hour</label>
                <input type="text" id="avg" name="avg" placeholder="average customer per hour.." />


                <input type="submit" value="Create" />
                <p>{(location || minumimCookie||maxumimCookie ||avgCookie ) && `{'location' : ${location},'minCustomers':${minumimCookie}, 'maxCustomers':${maxumimCookie}, 'avgCookie':${avgCookie}}`}</p>
            </form>
        </>
    )

}