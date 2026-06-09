import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import MobileMockup from './MobileMockup';
import { GuideStep } from '../types';

export default function GuideWalkthrough() {
  const [currentStepIndex, setCurrentStepIndex] = useState(3); // Default index 3 is step "04" from screenshot

  const guideSteps: GuideStep[] = [
    {
      id: 'step-1',
      stepNumber: '01',
      title: 'Modular Upgrades',
      subtitle: 'Simulate Scalable Component Releases Instantly',
      description: 'Our customized Client Portal lets you trigger database attachments or custom OAuth keys right to the container with a single tap.',
      points: [
        'Select target framework or container host platform e.g. GCP, AWS, or Vercel.',
        'Choose customized premium feature upgrades like secure Stripe checkout nodes.',
        'Click "Deploy Feature Stack" to watch automated server nodes verify configuration.'
      ],
      mockupState: 'topup'
    },
    {
      id: 'step-2',
      stepNumber: '02',
      title: 'Telemetry Tracker',
      subtitle: 'Track Completed Milestones & Live System Status',
      description: 'Keep a transparent, direct watch on overall project design system approvals, integration steps, and CD pipelines.',
      points: [
        'Observe active agile sprint velocity charts and status meters updated hourly.',
        'Review current deployment uptime metrics and live QA checklists.',
        'Validate component structures without jumping across multiple source lines.'
      ],
      mockupState: 'dashboard'
    },
    {
      id: 'step-3',
      stepNumber: '03',
      title: 'Speed Benchmarks',
      subtitle: 'Audit and Speed-Up Your Application Live',
      description: 'Compare bundle sizes and loading durations between standard server layouts and ultra-optimized ISR configurations instantly.',
      points: [
        'Open the Custom Platform Speed telemetry pane underneath secondary actions.',
        'Observe regular load speeds vs optimized sub-0.2 second edge renders.',
        'Claim speed optimization modules with direct server caching.'
      ],
      mockupState: 'promo'
    },
    {
      id: 'step-4',
      stepNumber: '04',
      title: 'SaaS Architecture Sets',
      subtitle: 'Match Technology Tiers to Core Budget Criteria',
      description: 'Determine precise technology stacks from React frontend configurations to SQL databases matched directly to your budget criteria.',
      points: [
        'Review the structural framework configuration for responsive layouts or backend endpoints.',
        'Analyze included database systems from lightweight Firestore to relational Postgres schemas.',
        'Press "Request Architecture Set" to submit configured elements to our development lead.'
      ],
      mockupState: 'detail'
    }
  ];

  const nextStep = () => {
    setCurrentStepIndex((prev) => (prev + 1) % guideSteps.length);
  };

  const prevStep = () => {
    setCurrentStepIndex((prev) => (prev - 1 + guideSteps.length) % guideSteps.length);
  };

  const activeStep = guideSteps[currentStepIndex];

  return (
    <section className="w-full bg-slate-50/50 py-16 md:py-24 border-y border-slate-100" id="guide">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16 md:mb-20">
        <h3>This site is under construction. Come back soon!</h3>
          <h2 className="font-display font-extrabold text-slate-900 text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Simplify Your Experience with Our <br className="hidden sm:inline" />
            <span className="text-[#A3D953]">Easy-to-Follow Guides!</span>
          </h2>
          <p className="font-sans text-[15px] text-slate-500 font-medium">
            Whether you're a tech-savvy individual or a complete beginner, our guides are accessible to all. Check out step-by-step app operations.
          </p>
        </div>

        {/* Step Slider Navigation Tabs (01 - 04) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          {guideSteps.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setCurrentStepIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 ${
                idx === currentStepIndex 
                  ? 'bg-slate-950 text-[#A3D953] shadow-xs' 
                  : 'bg-white text-slate-500 hover:text-slate-800 border border-slate-100'
              }`}
            >
              <span className={idx === currentStepIndex ? 'text-white' : 'text-[#A3D953]'}>
                {step.stepNumber}
              </span>
              <span className="hidden md:inline">{step.title}</span>
            </button>
          ))}
        </div>

        {/* The Main Slider Sheet Box */}
        <div className="relative max-w-5xl mx-auto bg-white rounded-[32px] border border-slate-100 p-6 md:p-10 shadow-lg flex flex-col lg:flex-row items-center gap-10 md:gap-14">
          
          {/* Left Arrow Controller */}
          <button 
            onClick={prevStep}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-md border border-slate-100 flex items-center justify-center cursor-pointer active:scale-95 transition-transform z-30"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Controller */}
          <button 
            onClick={nextStep}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-600 shadow-md border border-slate-100 flex items-center justify-center cursor-pointer active:scale-95 transition-transform z-30"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Left Block: Interactive Mockup Canvas with active state */}
          <div className="w-full lg:w-1/2 flex justify-center py-4 bg-slate-50/50 rounded-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-50 via-transparent to-transparent opacity-50"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.mockupState}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative z-10"
              >
                <MobileMockup screenState={activeStep.mockupState} className="shadow-xl" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Block: Explanatory Card */}
          <div className="w-full lg:w-1/2 text-left flex flex-col justify-center gap-5">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col gap-4"
              >
                {/* Visual Step Badge index */}
                <div className="font-display font-extrabold text-[44px] md:text-5xl text-[#F2A154] leading-none antialiased select-none">
                  {activeStep.stepNumber}
                </div>

                {/* Step Subtitle & Title */}
                <div>
                  <span className="text-xs text-[#528221] font-bold uppercase tracking-wider block mb-1">
                    {activeStep.title} Guide
                  </span>
                  <h3 className="font-display font-extrabold text-slate-900 text-xl sm:text-2xl md:text-3xl tracking-tight leading-snug">
                    {activeStep.subtitle}
                  </h3>
                </div>

                <p className="font-sans text-[14px] md:text-[15px] text-slate-500 font-medium leading-relaxed">
                  {activeStep.description}
                </p>

                {/* Points list item layout matching Image */}
                <div className="flex flex-col gap-3.5 mt-2">
                  {activeStep.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-[22px] h-[22px] rounded-full bg-slate-950 text-[#A3D953] flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="font-sans text-[13.5px] text-slate-600 font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
