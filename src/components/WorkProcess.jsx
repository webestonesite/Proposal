import React from 'react';
import { Search, Compass, Cpu, LineChart, TrendingUp } from 'lucide-react';

export default function WorkProcess() {
  const steps = [
    {
      id: '01',
      title: 'Discovery and Research',
      desc: 'We begin by understanding your business, audience, industry landscape, and growth objectives.',
      icon: Search,
      bg: 'bg-[#FFF9DB] border-2 border-[#FFC107]',
      titleColor: 'text-[#1E5631]',
      headerBg: 'bg-[#FFDE59]/40',
      align: 'top'
    },
    {
      id: '02',
      title: 'Strategy Development',
      desc: 'Our team builds a focused digital strategy designed to reach the right audience and support measurable outcomes.',
      icon: Compass,
      bg: 'bg-[#E8F8F0] border-2 border-[#48B83B]',
      titleColor: 'text-[#1E5631]',
      headerBg: 'bg-[#48B83B]/20',
      align: 'left'
    },
    {
      id: '03',
      title: 'Execution and Optimization',
      desc: 'Campaigns, content, and digital assets are developed and continuously refined for performance.',
      icon: Cpu,
      bg: 'bg-[#FFF9DB] border-2 border-[#FFC107]',
      titleColor: 'text-[#1E5631]',
      headerBg: 'bg-[#FFDE59]/40',
      align: 'right'
    },
    {
      id: '04',
      title: 'Measurement and Insights',
      desc: 'Performance data is analyzed to understand results, identify opportunities, and guide future improvements using data analytics.',
      icon: LineChart,
      bg: 'bg-[#FFF9DB] border-2 border-[#FFC107]',
      titleColor: 'text-[#1E5631]',
      headerBg: 'bg-[#FFDE59]/40',
      align: 'bottom-left'
    },
    {
      id: '05',
      title: 'Continuous Growth',
      desc: 'Strategies evolve over time to maintain momentum and support long term business growth.',
      icon: TrendingUp,
      bg: 'bg-[#E8F8F0] border-2 border-[#48B83B]',
      titleColor: 'text-[#1E5631]',
      headerBg: 'bg-[#48B83B]/20',
      align: 'bottom-right'
    }
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200 overflow-hidden" id="work-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto animate-fade-up">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#48B83B] text-xs font-black uppercase tracking-wider font-mono inline-block mb-2">
            SECTION 5.0 • AGENCY METHODOLOGY
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">
            Our Work Process
          </h2>
          <p className="text-slate-600 text-sm mt-1.5 font-medium leading-relaxed">
            A proven 5-stage strategic workflow engineered for continuous growth, organic authority, and measurable revenue scaling.
          </p>
        </div>

        {/* Work Process Diagram Layout */}
        <div className="relative max-w-5xl mx-auto p-4 sm:p-8 bg-emerald-50/30 rounded-3xl border-2 border-emerald-100/80 shadow-xs">
          
          {/* Top Stage */}
          <div className="flex justify-center mb-8">
            <div className="w-full sm:w-80 p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <Search className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">Discovery and Research</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                We begin by understanding your business, audience, industry landscape, and growth objectives.
              </p>
            </div>
          </div>

          {/* Central Process Node */}
          <div className="flex justify-center my-6">
            <div className="px-8 py-4 rounded-full bg-[#D4F4C7] border-2 border-[#48B83B] text-[#1E5631] font-black text-xl tracking-wider text-center shadow-md relative animate-pulse">
              <span className="text-slate-400 text-xs block font-bold font-mono tracking-normal mb-0.5">STRATEGIC FLOW</span>
              OUR WORK PROCESS
            </div>
          </div>

          {/* Middle Row (Left & Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-5 rounded-2xl bg-[#E8F8F0] border-2 border-[#48B83B] shadow-sm hover-lift transition-all">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
                <Compass className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">Strategy Development</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Our team builds a focused digital strategy designed to reach the right audience and support measurable outcomes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <Cpu className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">Execution and Optimization</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Campaigns, content, and digital assets are developed and continuously refined for performance.
              </p>
            </div>
          </div>

          {/* Bottom Row (Left & Right) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-5 rounded-2xl bg-[#FFF9DB] border-2 border-[#FFC107] shadow-sm hover-lift transition-all">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-amber-200">
                <LineChart className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">Measurement and Insights</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Performance data is analyzed to understand results, identify opportunities, and guide future improvements using data analytics.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#E8F8F0] border-2 border-[#48B83B] shadow-sm hover-lift transition-all">
              <div className="flex items-center gap-2 mb-2 pb-1.5 border-b border-emerald-200">
                <TrendingUp className="w-5 h-5 text-[#1E5631]" />
                <h3 className="font-extrabold text-base text-[#1E5631]">Continuous Growth</h3>
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed">
                Strategies evolve over time to maintain momentum and support long term business growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
