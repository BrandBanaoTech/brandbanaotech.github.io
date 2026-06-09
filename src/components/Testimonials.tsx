import { Star } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 'rev-1',
      name: 'Steven Chao',
      role: 'Creative Director at Studio Ten',
      quote: "Brand Banao really has the most consistent delivery of clean code I've ever known! It makes our production cycles so smooth, with absolute trust in regression safety.",
      rating: 5,
      avatarInitials: 'SC'
    },
    {
      id: 'rev-2',
      name: 'Seo Hyun Choi',
      role: 'Full-stack Developer',
      quote: "I was skeptical about hiring an external engineering team, but the speed of modular release is amazing. They configured the entire React + Node system perfectly.",
      rating: 5,
      avatarInitials: 'SH'
    },
    {
      id: 'rev-3',
      name: 'Michael Davis',
      role: 'Financial Analyst',
      quote: "The interface of our custom SaaS panel is incredibly polished. Registering dynamic blueprint scopes is instant, and tracking the dev progress is highly visual.",
      rating: 5,
      avatarInitials: 'MD'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Grid Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs text-[#528221] font-bold uppercase tracking-wider block mb-2">
              Verified User Reviews
            </span>
            <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              What <span className="text-[#A3D953]">Our Customers</span> are Saying about Our Services?
            </h2>
          </div>
          <p className="lg:col-span-5 text-left font-sans text-slate-500 font-medium text-[15px] leading-relaxed">
            Leading startup creators, product founders, and global tech innovators trust Brand Banao to deliver fully responsive websites and secure codebase architectures.
          </p>
        </div>

        {/* Testimonials Bento Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div 
              key={t.id} 
              className="bg-slate-50/50 hover:bg-slate-55 border border-slate-100 hover:border-slate-200 rounded-[24px] p-6.5 md:p-8 flex flex-col justify-between text-left transition-all duration-300 shadow-xs hover:shadow-md hover:-translate-y-1 relative group"
            >
              {/* Highlight double quote visual banner */}
              <div className="absolute top-4 right-6 text-slate-100 font-serif text-7xl select-none leading-none group-hover:text-amber-100/60 transition-colors">
                “
              </div>

              {/* Review Text */}
              <p className="font-sans text-[14.5px] text-slate-600 font-medium leading-relaxed relative z-10 mb-8 italic">
                "{t.quote}"
              </p>

              {/* User Meta Row */}
              <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-slate-100">
                {/* Styled Initial Avatar */}
                <div className="w-11 h-11 rounded-full bg-indigo-600/5 text-indigo-700 flex items-center justify-center font-bold font-display text-[13.5px] border border-indigo-100 shrink-0">
                  {t.avatarInitials}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-slate-900 text-[14.5px] leading-none mb-1">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider leading-none">
                    {t.role}
                  </p>
                  
                  {/* Rating Stars and Score */}
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="flex items-center text-amber-400 gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-slate-400 font-black leading-none font-sans">
                      5.0
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
