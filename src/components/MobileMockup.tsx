import React from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Search, 
  ArrowLeft, 
  Share2, 
  MoreHorizontal, 
  Home, 
  ShoppingBag, 
  History, 
  User, 
  Plus, 
  Phone, 
  MessageSquare, 
  Tv, 
  Globe, 
  Sparkles, 
  Gift, 
  CheckCircle2, 
  Zap, 
  ChevronRight,
  TrendingUp,
  CreditCard
} from 'lucide-react';

interface MobileMockupProps {
  screenState?: 'dashboard' | 'detail' | 'promo' | 'topup';
  className?: string;
}

export default function MobileMockup({ screenState = 'dashboard', className = '' }: MobileMockupProps) {
  return (
    <div className={`relative mx-auto w-[310px] h-[620px] rounded-[44px] border-8 border-gray-901 bg-black p-2.5 shadow-2xl ring-1 ring-gray-900/10 ${className}`}>
      {/* Dynamic Island / Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-full z-30 flex items-center justify-between px-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#121212]"></span>
        <span className="w-8 h-1 rounded-full bg-[#1c1c1c]"></span>
      </div>

      {/* Internal screen canvas */}
      <div className="w-full h-full rounded-[34px] overflow-hidden bg-slate-50 relative flex flex-col font-sans select-none text-slate-800">
        
        {/* Status Bar */}
        <div className="h-11 pt-3.5 px-6 flex justify-between items-center text-xs font-semibold z-20 shrink-0">
          <span className="text-slate-900">09:30</span>
          <div className="flex items-center gap-1.5 text-slate-900">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <div className="flex items-center gap-0.5">
              <span className="text-[10px] leading-none">88%</span>
              <Battery className="w-4 h-4 text-slate-900" />
            </div>
          </div>
        </div>

        {/* Content Panel depends on state */}
        <div className="flex-1 overflow-y-auto no-scrollbar pb-16">
          {screenState === 'dashboard' && (
            <div className="px-4 py-1 flex flex-col gap-4">
              {/* Profile Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs ring-2 ring-slate-200">
                    TM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-950 flex items-center gap-1">
                      Thomas Miller
                      <span className="bg-[#A3D953]/20 text-[#528221] text-[9px] font-extrabold px-1 rounded-sm uppercase tracking-wider">
                        PRODUCT TEAM
                      </span>
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">Project Tracker: brandbanao-v2</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 relative">
                    <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Balance Card */}
              <div className="bg-slate-950 text-white rounded-2xl p-4 shadow-lg relative overflow-hidden">
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-28 h-28 bg-[#A3D953]/15 rounded-full blur-2xl"></div>
                <p className="text-[10px] uppercase text-slate-400 font-bold tracking-widest leading-none">Sprint Deployment Status</p>
                <div className="mt-1 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-emerald-400 font-bold">KPI</span>
                    <span className="text-xl font-bold ml-0.5">99.9% Uptime</span>
                  </div>
                  <button className="bg-[#A3D953] hover:bg-lime-500 transition-colors text-slate-950 font-bold text-[10px] px-3.5 py-1.5 rounded-lg active:scale-95 leading-none">
                    Live Portal
                  </button>
                </div>
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Globe className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Completed Milestones</span>
                  </div>
                  <span className="font-bold text-[#F2A154] text-xs">12 / 15 Shipped</span>
                </div>
                <div className="mt-2 w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-[#A3D953] to-emerald-400 rounded-full"></div>
                </div>
                <p className="text-[9px] text-slate-400 mt-1.5">Production Branch: master (v2.1.0)</p>
              </div>

              {/* Action grid */}
              <div className="grid grid-cols-4 gap-2 text-center text-slate-700 font-semibold text-[10px] mt-1">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 hover:scale-105 transition-transform shadow-xs">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span>React SSR</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 hover:scale-105 transition-transform shadow-xs">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span>UI Blocks</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 hover:scale-105 transition-transform shadow-xs">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span>Sign-off</span>
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 hover:scale-105 transition-transform shadow-xs">
                    <MoreHorizontal className="w-5 h-5" />
                  </div>
                  <span>Telemetry</span>
                </div>
              </div>

              {/* Special Offers Section */}
              <div className="mt-2">
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-bold text-slate-950 text-[11px] uppercase tracking-wide">Digital Power Modules</h5>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
                <div className="bg-gradient-to-br from-indigo-900 via-slate-900 to-black text-white rounded-xl p-3.5 relative overflow-hidden shadow-md">
                  <span className="absolute top-1.5 right-1.5 bg-[#A3D953] text-slate-950 font-extrabold text-[8px] px-1.5 py-0.5 rounded-full uppercase leading-none">
                    Optimized
                  </span>
                  <p className="text-[9px] text-[#A3D953] font-bold">SEO & SPEED ENGINE</p>
                  <h6 className="font-extrabold text-sm mt-0.5 leading-tight text-white">Full SEO Core Package</h6>
                  <p className="text-[10px] text-slate-300 mt-1">Get 100/100 Lighthouse benchmark load speed built-in.</p>
                  <button className="mt-3.5 bg-white text-slate-950 font-bold text-[9px] px-3.5 py-1.5 rounded-lg hover:bg-slate-50 active:scale-95 transition-transform">
                    VIEW BENCHMARKS
                  </button>
                </div>
              </div>
            </div>
          )}

          {screenState === 'detail' && (
            <div className="px-4 py-1 flex flex-col gap-4">
              {/* Detail Header */}
              <div className="flex items-center justify-between">
                <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600">
                  <ArrowLeft className="w-4.5 h-4.5" />
                </button>
                <span className="font-bold text-xs text-slate-950">Detail Package</span>
                <button className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600">
                  <Share2 className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Package Hero */}
              <div className="bg-gradient-to-br from-slate-900 to-black text-white rounded-2xl p-4 shadow-lg text-center relative overflow-hidden">
                <Zap className="absolute top-2 left-2 text-[#A3D953]/40 w-12 h-12 rotate-12" />
                <span className="bg-[#A3D953] text-slate-950 text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                  SaaS Boilerplate
                </span>
                <h3 className="text-3xl font-extrabold text-white leading-none">Enterprise</h3>
                <p className="text-[11px] text-slate-400 mt-1 font-medium">Production Ready • Custom React Ecosystem</p>
              </div>

              {/* Quick Perks grid */}
              <div className="grid grid-cols-3 gap-2 mt-1 mx-0.5">
                <div className="bg-white border border-slate-100 rounded-xl p-2.5 text-center flex flex-col items-center gap-1 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[8px] uppercase tracking-wide text-slate-400 font-bold">Responsive</span>
                  <span className="text-[10px] font-extrabold text-[#528221] leading-none">Tailwind</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-2.5 text-center flex flex-col items-center gap-1 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#528221] flex items-center justify-center">
                    <Globe className="w-4.5 h-4.5 text-[#528221]" />
                  </div>
                  <span className="text-[8px] uppercase tracking-wide text-slate-400 font-bold">Backend</span>
                  <span className="text-[10px] font-extrabold text-slate-950 leading-none">Node API</span>
                </div>
                <div className="bg-white border border-slate-100 rounded-xl p-2.5 text-center flex flex-col items-center gap-1 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center">
                    <Tv className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-[8px] uppercase tracking-wide text-slate-400 font-bold">Database</span>
                  <span className="text-[10px] font-extrabold text-slate-950 leading-none">Firestore</span>
                </div>
              </div>

              {/* Extra Limits */}
              <div className="bg-white border border-slate-100 rounded-xl p-3 flex flex-col gap-2.5 shadow-2xs">
                <h5 className="font-bold text-[10px] uppercase text-slate-400 tracking-wider">Additional Integrations</h5>
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-800">
                  <div className="flex items-center gap-2">
                    <Tv className="w-4.5 h-4.5 text-[#528221]" />
                    <span className="font-semibold text-[11px]">Dynamic Charts (Recharts)</span>
                  </div>
                  <span className="font-extrabold text-slate-950">Included</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs text-slate-800">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4.5 h-4.5 text-amber-500" />
                    <span className="font-semibold text-[11px]">Unified Firebase Auth</span>
                  </div>
                  <span className="font-extrabold text-slate-950">Active</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-800">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4.5 h-4.5 text-emerald-500" />
                    <span className="font-semibold text-[11px]">Git Continuous Deploy</span>
                  </div>
                  <span className="font-extrabold text-slate-950">Setup</span>
                </div>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold p-3 rounded-xl shadow-md transition-colors mt-1 active:scale-98">
                Request Architecture Set
              </button>
            </div>
          )}

          {screenState === 'promo' && (
            <div className="px-4 py-1 flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-xs text-slate-950">Promo Details</span>
                <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">Limited</span>
              </div>              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-slate-900 via-slate-950 to-black text-white p-5 shadow-lg border border-slate-800">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
                
                <span className="bg-[#A3D953]/20 uppercase tracking-widest text-[8px] font-black px-2.5 py-1 rounded-full text-[#A3D953] inline-block">
                  Custom Platform Speed
                </span>

                <h3 className="text-xl font-black mt-3 leading-tight">Optimized Page Experience!</h3>
                <p className="text-xs text-slate-350 mt-1.5 font-medium">Deliver completely modular layouts with native compilation hooks.</p>
                
                <div className="mt-4 bg-slate-900/50 p-3 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center text-[10px] py-1 border-b border-slate-800/80">
                    <span>Standard Frame Load</span>
                    <span className="line-through text-slate-500">1.8s</span>
                  </div>
                  <div className="flex justify-between items-center text-xs py-1.5 font-bold">
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 fill-[#A3D953]" /> Next.js ISR Load
                    </span>
                    <span className="text-[#A3D953] text-sm">0.2s Fast!</span>
                  </div>
                </div>

                <p className="text-[9px] text-slate-400 mt-3 text-center">Optimized globally with Vercel and Cloud Run caching systems.</p>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <button className="w-full bg-[#F2A154] hover:bg-amber-600 text-slate-950 font-black p-3 rounded-xl text-xs flex justify-center items-center gap-1.5 shadow-md active:scale-98 transition-all">
                  Claim Speed Upgrade Setup <ChevronRight className="w-4 h-4" />
                </button>
                <p className="text-[9px] text-center text-slate-400">Custom tailored SLA targets with robust failover hooks.</p>
              </div>
            </div>
          )}

          {screenState === 'topup' && (
            <div className="px-4 py-1 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-xs text-slate-950">Add Project Feature Module</h4>
                <CreditCard className="w-4.5 h-4.5 text-slate-400" />
              </div>

              {/* Input for number */}
              <div className="bg-white border border-slate-100 p-3 rounded-xl flex flex-col gap-1.5 shadow-2xs">
                <label className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Enterprise System ID</label>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-400 text-xs font-bold">SYS-</span>
                  <input 
                    type="text" 
                    defaultValue="BANAO-APP-9101" 
                    className="w-full bg-transparent outline-hidden text-xs font-bold text-slate-900 border-b border-transparent focus:border-indigo-500 pb-0.5 pointer-events-none"
                  />
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Select Feature Upgrade Scope</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 border-2 border-slate-900 bg-slate-50 rounded-xl cursor-pointer text-center relative">
                    <span className="absolute top-1 right-1.5 text-[8px] bg-[#A3D953] text-slate-950 font-extrabold px-1 rounded-sm uppercase">Pro</span>
                    <p className="text-[9px] text-slate-400 font-medium">Stripe Gateway</p>
                    <p className="text-xs font-bold text-slate-950 mt-0.5">Secure Checkout</p>
                  </div>
                  <div className="p-3 border border-slate-200 hover:border-[#A3D953] rounded-xl cursor-pointer text-center">
                    <p className="text-[9px] text-slate-400 font-medium">OAuth Integration</p>
                    <p className="text-xs font-bold text-slate-950 mt-0.5">Google / GitHub</p>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold">Environment Target</span>
                <div className="bg-white border border-slate-100 p-2.5 rounded-xl flex items-center justify-between text-xs text-slate-800 shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-5 bg-[#A3D953]/20 text-[#528221] rounded flex items-center justify-center font-sans font-black text-[9px]">GCP</div>
                    <span className="font-semibold text-[11px]">Cloud Run Container</span>
                  </div>
                  <span className="text-[9px] text-[#528221] font-bold">Staging</span>
                </div>
              </div>

              <button className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold p-3 rounded-xl text-xs shadow-md active:scale-98 transition-colors mt-2">
                Deploy Feature Stack
              </button>
            </div>
          )}
        </div>

        {/* Real Mobile Nav-Bar Drawer */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-around px-2 z-20">
          <button className={`flex flex-col items-center gap-0.5 justify-center ${screenState === 'dashboard' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <Home className="w-[18px] h-[18px]" />
            <span className="text-[8px] font-bold">Home</span>
          </button>
          <button className={`flex flex-col items-center gap-0.5 justify-center ${screenState === 'detail' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <ShoppingBag className="w-[18px] h-[18px]" />
            <span className="text-[8px] font-bold">Shop</span>
          </button>
          <button className={`flex flex-col items-center gap-0.5 justify-center ${screenState === 'promo' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <TrendingUp className="w-[18px] h-[18px]" />
            <span className="text-[8px] font-bold">Promo</span>
          </button>
          <button className={`flex flex-col items-center gap-0.5 justify-center ${screenState === 'topup' ? 'text-indigo-600' : 'text-slate-400'}`}>
            <User className="w-[18px] h-[18px]" />
            <span className="text-[8px] font-bold">Profile</span>
          </button>
        </div>

        {/* Gestures pill */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-slate-350 rounded-full z-30"></div>
      </div>
    </div>
  );
}
