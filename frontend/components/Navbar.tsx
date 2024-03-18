"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState,useEffect } from 'react';

const Nav = () => {
  const [toggleDropdown,setToggleDropdown]=useState(false);
  return (
    <nav className='flex-between w-full mb-16 pt-3' >
        <Link href="/" className='flex gap-2 flex-center'>
            <Image 
            src="/images/logo.png"
            alt="SahAIta Logo"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>
            SahAIta
            </p>
        </Link>

        {/*Desktop Naviagtion */}
        <div className='sm:flex hidden'>
        <div className='flex gap-3 md:gap-5'>
              <Link href="/product-chat"
              className='black_btn'>
                Product Details Chat 
              </Link>
              <Link href="/customer-care"
              className='black_btn'>
                Customer Care Chat 
              </Link>
              <Link href=""
              className='black_btn'>
                Dashboard
              </Link>
              <button type='button'  className='outline_btn'>
                Sign Out
              </button>
              
        </div>
          <div className='flex gap-5 md:gap-7'>
              <Link href="">
                <Image src="/images/user.jpeg"
                width={37}
                height={37}
                className='rounded-full'
                alt="profile"
                style={{ marginLeft: '13px' }}
                />
              </Link>
          </div>
          
        </div>
    </nav>
)
}

export default Nav