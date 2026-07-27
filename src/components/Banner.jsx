import { Separator } from "@heroui/react";

const Banner = () => {
    return (
        <div className="bg-[url('/assets/banner.png')] text-white flex justify-between flex-col items-center gap-5 h-185">
            <div className="p-10 text-center flex justify-center flex-col items-center gap-6 flex-1">
                <h1 className="text-8xl mb-3">
                    Discover Your <br /> Next Adventure
                </h1>

                <p className="text-xl max-w-165.5 text-[#EDFCFF] mb-6">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-5">
                    <button className="uppercase bg-cyan-500 px-5 py-3 cursor-pointer">
                        Explore Now
                    </button>

                    <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
                        View Destination
                    </button>
                </div>
            </div>

            <div className="bg-white/40 flex justify-between gap-5 w-full items-center">
                <div className="px-6">
                    <h3 className="text-xl font-medium">Location</h3>
                    <p className="text-sm">Address, City or Zip</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div className="px-6">
                    <h3 className="text-xl font-medium">Date/Duration</h3>
                    <p className="text-sm">Anytime/3 Days</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div className="px-6">
                    <h3 className="text-xl font-medium">Budget</h3>
                    <p className="text-sm">$0-$3000</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div className="px-6 py-4">
                    <h3 className="text-xl font-medium">People</h3>
                    <p className="text-sm">5-10</p>
                </div>



                <div className="bg-cyan-500 px-12 py-6.5 flex justify-center">
                    <h3 className="text-xl font-semibold">Search</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;