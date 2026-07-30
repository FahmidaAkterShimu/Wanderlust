import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { PiCalendarBold, PiMapPinLineBold } from 'react-icons/pi';

const DestinationCard = ({ destination }) => {
    const { _id, destinationName, country, imageUrl, price, duration } = destination;

    return (
        <div>
            <Image
                src={imageUrl}
                alt={imageUrl}
                width={410}
                height={231}
                className='mb-4'
            />

            <div className='text-base font-medium text-[#6C696D] flex items-center gap-1 mb-2'>
                <PiMapPinLineBold className='w-5 h-5' /> <span>{country}</span>
            </div>

            <div className='flex justify-between items-center mb-2'>
                <p className='text-2xl font-medium'>{destinationName}</p>
                <p className='
                text-2xl font-medium'>
                    ${price}<span className='text-sm text-[#6C696D]'>/person</span>
                </p>
            </div>

            <div className='text-base font-medium text-[#6C696D] flex items-center gap-1 mb-4'>
                <PiCalendarBold className='w-5 h-5' /> <span>{duration}</span>
            </div>

            <Link
                href={`/destinations/${_id}`}
                className='text-xl font-medium text-[#15A1BF] flex justify-start items-center gap-3'>
                BOOK NOW <MdArrowOutward className='w-7 h-7' />
            </Link>
        </div>
    );
};

export default DestinationCard;