'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { FC } from 'react';

interface ServiceItem {
  label: string;
  href: string;
}

const services: ServiceItem[] = [
  { label: 'Container Movement', href: '/container_movement' },
  { label: 'Wharf Cartage', href: '/wharf_cartage' },
  { label: 'LCL Freight Movement', href: '/lcl_freight' },
  { label: 'Inventory Management', href: '/inventory' },
  { label: 'Bio Security', href: '/bio_security' },
];

const SidebarServices: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-full md:max-w-[240px] lg:max-w-[280px] xl:max-w-[300px] p-4 space-y-10 border-r">
      {/* Service List */}
      <div>
        <h3 className="text-sm font-semibold text-gray-800 mb-4 border-b pb-2">Other Services</h3>
        <ul className="space-y-4">
          {services.map((service, index) => {
            const isActive = pathname === service.href;
            return (
              <li
                key={index}
                className={`pl-3 border-l-2 text-sm cursor-pointer transition-all duration-200 ${
                  isActive
                    ? 'border-orange-600 text-black font-semibold'
                    : 'border-transparent text-gray-500 hover:text-orange-600'
                }`}
                onClick={() => router.push(service.href)}
              >
                {service.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Support Box */}
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <Image
          src="/support.png" // Make sure this image is placed in public/image.png
          alt="Support"
          width={400}
          height={300}
          className="w-full h-auto object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start px-4 py-6">
          <p className="text-white text-lg font-semibold mb-2">Do you need support?</p>
          <button
            onClick={() => router.push('/contact')}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 rounded"
          >
            📞 Contact us now
          </button>
        </div> */}
      </div>
    </aside>
  );
};

export default SidebarServices;
