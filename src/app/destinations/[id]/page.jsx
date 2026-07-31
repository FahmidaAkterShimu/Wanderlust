import { EditModal } from '@/components/EditModal';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { IoMdCheckmark } from 'react-icons/io';
import { PiCalendarBold, PiMapPinLineBold } from 'react-icons/pi';
import { RxArrowLeft } from 'react-icons/rx';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const { destinationName, country, imageUrl, price, duration, departureDate, description } = destination;

    return (
        <div className='max-w-7xl w-full mx-auto py-20 px-6 lg:px-2'>
            <div className='flex justify-between items-center mb-6'>
                <Link
                    href={'/destinations'}
                    className='text-xl text-[#6C696D] flex items-center gap-1'><RxArrowLeft className='w-6 h-6 text-[#B6B6B6]' /> Back to Destination</Link>


                {/* Buttons */}
                <div className='flex justify-between items-center gap-2'>
                    <EditModal destination={destination} />
                    <button className='border border-[#EF4444] text-[#EF4444] py-2.5 px-5 text-base font-medium flex items-center gap-1.5 cursor-pointer hover:bg-[#EF4444]/20'>
                        <Trash2 className='w-5 h-5' /> Cancel
                    </button>
                </div>
            </div>

            <Image
                src={imageUrl}
                alt='imageUrl'
                width={1280}
                height={500}
                className='h-125'
            />

            <hr className='text-[#EFEFEF] my-10' />

            <div className='grid grid-cols-3 gap-10'>

                {/* Left side */}
                <div className='col-span-2'>

                    <div className='text-base font-medium text-[#6C696D] flex items-center gap-1 mb-4'>
                        <PiMapPinLineBold className='w-5 h-5' /> <span>{country}</span>
                    </div>

                    <h4 className='text-4xl font-medium mb-4'>{destinationName}</h4>

                    <div className='flex items-center gap-4 mb-10'>
                        <p className='text-lg font-semibold flex items-center gap-2'>
                            <FaStar className='text-[#1E9E35]' /> 4.9
                            <span className='text-[#6C696D] text-lg font-normal'> (234 reviews)</span>
                        </p>

                        <p className='text-lg font-medium flex items-center gap-2'>
                            <PiCalendarBold className='w-4 h-4 text-[#6C696D]' /> <span>{duration}</span>
                        </p>
                    </div>


                    <h3 className='text-3xl font-medium mb-5'>Overview</h3>
                    <p className='text-lg text-[#6C696D] mb-10'>{description}</p>


                    <h3 className='text-3xl font-medium mb-5'>Highlights</h3>
                    <p className='text-lg text-[#6C696D] mb-5'>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.</p>
                    <div className='text-base text-[#6C696D] flex justify-between'>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'><IoMdCheckmark className='text-[#1E9E35] w-5 h-5' /> Luxury beachfront accommodation </li>
                            <li className='flex items-center gap-2'><IoMdCheckmark className='text-[#1E9E35] w-5 h-5' />  Traditional Balinese spa treatment</li>
                            <li className='flex items-center gap-2'><IoMdCheckmark className='text-[#1E9E35] w-5 h-5' /> Sunrise trek to Mount Batur</li>
                        </ul>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-2'><IoMdCheckmark className='text-[#1E9E35] w-5 h-5' />  Visit Uluwatu Temple at sunset</li>
                            <li className='flex items-center gap-2'><IoMdCheckmark className='text-[#1E9E35] w-5 h-5' /> Private beach dinner experience</li>
                        </ul>
                    </div>
                </div>


                {/* Right side */}
                <div className='col-span-1'>
                    <div className='space-y-1 mb-5'>
                        <p className='text-base text-[#6C696D]'>Starting from</p>
                        <h2 className='text-4xl font-semibold text-[#15A1BF]'>${price}</h2>
                        <p className='text-base text-[#6C696D]'>per person</p>
                    </div>

                    <div className='mt-7 p-4 border border-[#EEEEEE] bg-[#F8FAFC]'>{departureDate}</div>

                    <hr className='text-[#EFEFEF] my-5' />

                    <button className='btn bg-[#15A1BF]
                    text-base font-medium text-white w-full rounded-none py-4 px-6'>Book Now <FaArrowRight /></button>
                </div>
            </div>

        </div>
    );
};

export default DestinationDetailsPage;