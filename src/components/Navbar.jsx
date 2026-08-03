'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { PiUserBold } from 'react-icons/pi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user
    // console.log(user)

    const handleSignOut = async () => {
        await authClient.signOut();
    }

    return (
        <div className='absolute top-4 left-0 right-0 z-50 px-4'>
            <nav className="max-w-352 mx-auto flex justify-between items-center bg-white px-6 py-3.5 text-[#0C0B0B]">

                {/* Left */}
                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-8 text-base font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/destinations">Destinations</Link></li>
                    <li><Link href="/my-bookings">My Bookings</Link></li>
                    <li><Link href="/admin">Admin</Link></li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-2xl"
                >
                    {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>


                {/* Center Logo */}
                <Image
                    src="/assets/Wanderlast.png"
                    alt="Wanderlast logo"
                    width={162}
                    height={24}
                />


                {/* Right */}
                <ul className="flex items-center gap-5 text-base font-medium">
                    {
                        user ? <>
                            <li>
                                <Link href="/profile" className="flex items-center gap-1">
                                    <PiUserBold className="h-4 w-4" />
                                    <span className="hidden sm:inline">Profile</span>
                                </Link>
                            </li>
                            <li onClick={handleSignOut} className='hidden lg:block'>
                                <Link href="/login">
                                    Logout
                                </Link>
                            </li>
                        </>
                            : <>
                                <li className='hidden lg:block'>
                                    <Link href="/login">Login</Link>
                                </li>

                                <li className='hidden lg:block'>
                                    <Link href="/signup">Sign Up</Link>
                                </li>
                            </>

                    }
                </ul>
            </nav>


            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute left-0 top-full mt-3 w-sm rounded-xl bg-white shadow-xl border z-50">
                    <ul className="flex flex-col py-2 text-base font-medium">

                        <li>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="block px-6 py-3 hover:bg-gray-100"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/destinations"
                                onClick={() => setIsOpen(false)}
                                className="block px-6 py-3 hover:bg-gray-100"
                            >
                                Destinations
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/my-bookings"
                                onClick={() => setIsOpen(false)}
                                className="block px-6 py-3 hover:bg-gray-100"
                            >
                                My Bookings
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/admin"
                                onClick={() => setIsOpen(false)}
                                className="block px-6 py-3 hover:bg-gray-100"
                            >
                                Admin
                            </Link>
                        </li>

                        <hr className="my-2" />
                        {
                            user ?
                                <>
                                    <li onClick={handleSignOut} >
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-xs mx-auto text-center rounded-full bg-black text-white py-3"
                                        >
                                            Logout
                                        </Link>
                                    </li>
                                </>
                                :
                                <>

                                    <li>
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="block px-6 py-3 hover:bg-gray-100"
                                        >
                                            Login
                                        </Link>
                                    </li>

                                    <li className="p-4">
                                        <Link
                                            href="/signup"
                                            onClick={() => setIsOpen(false)}
                                            className="block w-xs text-center rounded-full bg-black text-white py-3"
                                        >
                                            Sign Up
                                        </Link>
                                    </li>
                                </>

                        }

                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;