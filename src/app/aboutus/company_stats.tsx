'use client';

import { Truck, Users, Trophy, UserCheck } from 'lucide-react';
import ContentWrapper from '../../../utils/ContentWrapper';
import { ReactNode } from 'react';

interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    icon: <Truck className="w-6 h-6 text-orange-500" />,
    value: '950',
    label: 'Completed Delivery',
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    value: '1250',
    label: 'Satisfied Clients',
  },
  {
    icon: <Trophy className="w-6 h-6 text-orange-500" />,
    value: '50+',
    label: 'Awards Winners',
  },
  {
    icon: <UserCheck className="w-6 h-6 text-orange-500" />,
    value: '120',
    label: 'Team Members',
  },
];

const CompanyStats = () => {
  return (
    <ContentWrapper>
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {stat.icon}
              <h3 className="text-2xl md:text-3xl font-bold mt-2">{stat.value}</h3>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </ContentWrapper>
  );
};

export default CompanyStats;
