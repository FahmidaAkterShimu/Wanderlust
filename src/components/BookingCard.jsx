'use client'
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookingCard = ({ destination }) => {
    const { _id, destinationName, imageUrl, country, price, departureDate } = destination;

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleBooking = async () => {
        const bookingData = {
            userId: user?.id,
            userImage: user?.image,
            userName: user?.name,
            destinationId: _id,
            destinationName,
            price,
            imageUrl,
            country,
            departureDate
        }

        // For client component token will be given:
        const { data: tokenData } = await authClient.token()
        console.log(tokenData);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        });

        const data = await res.json()

        if (data) {
            toast.success("Booking completed successfully! 🎉");
        }
        else {
            toast.error(error);
        }
    }

    return (
        <Card>
            <div className='space-y-1 mb-5'>
                <p className='text-base text-[#6C696D]'>Starting from</p>
                <h2 className='text-4xl font-semibold text-[#15A1BF]'>${price}</h2>
                <p className='text-base text-[#6C696D]'>per person</p>
            </div>

            <div className='mt-7 p-4 border border-[#EEEEEE] bg-[#F8FAFC]'>{departureDate}</div>


            <hr className='text-[#EFEFEF] my-5' />

            <button
                onClick={handleBooking}
                className='btn bg-[#15A1BF] text-base font-medium text-white w-full rounded-none py-4 px-6'>Book Now <FaArrowRight /></button>
        </Card>
    );
};

export default BookingCard;