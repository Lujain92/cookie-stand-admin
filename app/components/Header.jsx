import Image from 'next/image';
export default function Header() {
    return (

        <header>
            <div className='bg-[#270D0B] flex justify-between text-5xl italic'>
                <Image
                    src="/assets/cookie.png"
                    width={50}
                    height={50}
                    

                />
                <span className='p-3 text-[#EFE2B2]'>Cookie Stand Admin</span>
                
                <Image
                    src="/assets/cookie.png"
                    width={50}
                    height={50}

                />
            </div>

        </header>
    )

}