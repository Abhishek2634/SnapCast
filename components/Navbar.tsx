'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


const user = {};
const Navbar = () => {
    const router = useRouter();
    return (
        <header className='navbar'>
            <nav>
                <Link href='/'>
                    <Image src="/assets/icons/logo.svg" height={32} width={32} alt='Logo' />
                    <h1>SnapCast</h1>
                </Link>
                {user && (
                    <figure>
                    <button onClick={() => router.push('/profile/234')} className='cursor-pointer'>
                      <Image 
                        src="/assets/images/dummy.jpg" 
                        height={36} 
                        width={36} 
                        alt='User' 
                        className='rounded-full aspect-square' 
                      />
                    </button>
                    <button className='cursor-pointer'>
                      <Image 
                        src="/assets/icons/logout.svg" 
                        height={24} 
                        width={24} 
                        alt='logout' 
                        className='rotate-180' 
                      />
                    </button>
                  </figure>
                )}
            </nav>
        </header>
    )
}

export default Navbar
