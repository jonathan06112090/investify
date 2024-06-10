'use client';
import Image from 'next/image'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { buttonVariants } from './ui/button';



export default function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  

  const { user, error, isLoading } = useUser();

  
  return (
    <>
      <nav className='sticky top-0 z-30 w-full bg-white border-b border-gray-200 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
          <div className='flex items-center justify-between h-14 border-b border-zinc-200'>
            <Link href='/' className='flex font-semibold'>
                  <Image
                    src='/pixelcut-export.jpg'
                    alt='LOGO'
                    width={50}
                    height={50}
                    className='object-none rounded-3xl '
                  />
            </Link>
            
            {/* todo: add mobile navbar */}
            
            {user ? (
              <div className='flex items-center space-x-4 md:space-x-8 mt-4 md:mt-0'>
                <button className="hover:text-black transition duration-300 ease-in-out cursor-pointer flex items-center relative"  onClick={toggleDropdown}>
                  Mere
                  <svg width="20" height="20" viewBox="28 28" focusable="false" className="NMm5M">
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
                {isDropdownOpen && (
                <div className="absolute top-14 left-0 w-40 bg-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <div className="py-1">
                    <Link href="/Tilpasning">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Tilpasning
                    </span>
                    </Link>
                    <Link href="/AfkastBeregner">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Afkast beregner
                    </span>
                    </Link>
                    <Link href="/aktier">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Aktier
                    </span>
                    </Link>
                  </div>
                </div>
                )}
                </button>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'><Link href="/NyProfile">{user.name}</Link></div>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'><Link href="/FAQ">FAQ</Link></div>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'><Link href="/pricing">Pris</Link></div>
                <Link href="/api/auth/logout">
                  Logout
                </Link>
              </div>
            ) : (
              <div  className='flex items-center space-x-4 md:space-x-8 mt-4 md:mt-0'>
                <button className="hover:text-black transition duration-300 ease-in-out cursor-pointer flex items-center relative"  onClick={toggleDropdown}>
                  Mere
                  <svg width="20" height="20" viewBox="28 28" focusable="false" className="NMm5M">
                  <path d="M7 10l5 5 5-5H7z"></path>
                </svg>
                {isDropdownOpen && (
                <div className="absolute top-14 left-0 w-40 bg-white rounded-md shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
                  <div className="py-1">
                    <Link href="/Tilpasning">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Tilpasning
                    </span>
                    </Link>
                    <Link href="/AfkastBeregner">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Afkast beregner
                    </span>
                    </Link>
                    <Link href="/aktier">
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={closeDropdown}>
                      Aktier
                    </span>
                    </Link>
                  </div>
                </div>
                )}
                </button>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'><Link href="/FAQ">FAQ</Link></div>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'><Link href="/pricing">Pris</Link></div>
                
                <Link href="/api/auth/login">
                  Login
                </Link>
                <div className='hover:text-black transition duration-300 ease-in-out cursor-pointer'>
                  <Link className={buttonVariants()} href='/porfolio' target='_blank'>
                    Kom igang  <ArrowRight className='ml-2 h-5 w-5'/>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </MaxWidthWrapper>
      </nav>
      <div className="sm:flex hidden fixed bottom-0 left-0 text-teal-600"> {/* on small devices it's to be flex (meaning visible) but usually it's going to be hidden */}
        &copy;JHC 
      </div>
    </>
  );
}
