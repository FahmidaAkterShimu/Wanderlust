import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch("http://localhost:5000/destination");
    const destinations = await res.json();

    return (
        <div className='max-w-7xl mx-auto mt-20 py-20 px-4 lg:px-2'>
            <h1 className='text-6xl mb-4'>Explore All Destinations</h1>
            <p className='text-lg text-[#6C696D] mb-10'>Find your perfect travel experience from our curated collection</p>
            <p className='text-lg text-[#6C696D] mb-10'>Showing 6 destinations</p>

            <div className='grid grid-cols-3 gap-6'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;