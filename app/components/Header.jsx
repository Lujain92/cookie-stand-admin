import Image from 'next/image';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.js'

export default function Header() {
    const {isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
    console.log(useContext(ThemeContext));



    return (


        <header className='dark:bg-[#808080]'>
            <div className='bg-[#270D0B] dark:bg-black flex justify-between  italic'>
                <Image
                    src="/assets/cookie.png"
                    width={50}
                    height={50}


                />
                <span className='p-3 text-[#EFE2B2] dark:text-white text-5xl'>Cookie Stand Admin</span>

                {/* <Image
                    src="/assets/cookie.png"
                    width={50}
                    height={50}

                /> */}
 <button
                onClick={toggleThemeHandler} 
                class='bg-[#EFE2B2] hover:bg-[#270D0B] darkhover:bg-[#FFFBEB] dark:bg-white dark:text-black text-[#270D0B] font-semibold dark:hover:text-slate-900 hover:text-[#EFE2B2] py-2 px-4 border dark:border-black border-[#EFE2B2] hover:border-transparent rounded mt-5 m-5'>
                toggle
            </button>
            </div>
           
        </header>
    )

}