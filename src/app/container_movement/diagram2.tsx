'use client';

import Image from 'next/image';
import {
    FaChartBar,
    FaClock,
    FaCogs,
    FaTruckMoving,
    FaHeadset,
    FaBoxOpen,
} from "react-icons/fa";
const FCLvsLCLDiagram2 = () => {
    return (
        <section className="py-1 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto ">
            <h3 className="text-xl font-semibold mb-4">FCL vs LCL – Diagram 2</h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
                standard dummy text ever since the 1500s... It has survived not only five centuries, but also the leap into
                electronic typesetting.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto mb-10">
                Remaining essentially unchanged, it was popularised in the 1960s... including versions of Lorem Ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde earum illum ipsum amet sequi modi doloremque et. Iusto, mollitia itaque.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-10">
                <div>
                    
                    <Image src="/full-container-load-0.png" alt="FCL Truck" width={600} height={400} className="mx-auto" />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-black mb-6">
                <div className="flex items-center gap-3">
                    <FaChartBar className="text-orange-500 text-xl" />
                    <span>Competitive rates</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaClock className="text-orange-500 text-xl" />
                    <span>always on time</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaCogs className="text-orange-500 text-xl" />
                    <span>advanced technology</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaTruckMoving className="text-orange-500 text-xl" />
                    <span>fast and reliable</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaHeadset className="text-orange-500 text-xl" />
                    <span>24/7 support</span>
                </div>
                <div className="flex items-center gap-3">
                    <FaBoxOpen className="text-orange-500 text-xl" />
                    <span>safe packaging</span>
                </div>
            </div>

            <p className="text-gray-600 text-xs">
                We are proud to serve more than 3,000 customers and are the most
                environment friendly mode of land transportation, so our rail
                freight service is always the top choice.
            </p>
        </section>
    );
};

export default FCLvsLCLDiagram2;
