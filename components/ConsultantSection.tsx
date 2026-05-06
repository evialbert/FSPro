"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ConsultantSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Poza - Design "Glass-Border" */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl bg-slate-100">
              <Image 
                src="/poza-claudiu.jpg" 
                alt="Claudiu - Expert Consultanță"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>

          {/* Text - Stil Minimalist */}
          <div className="lg:col-span-7 space-y-8">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-stone-500">
              Profil Profesional
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-stone-900 tracking-tighter">
              Expert Consultanță: <span className="text-stone-600">Claudiu</span>
            </h2>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-2xl">
              Într-o lume a afacerilor în continuă schimbare, succesul depinde de claritate. 
              Prin expertiza mea, transform complexitatea operațională în vectori de creștere predictibili.
            </p>

            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-stone-900">15+</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest">Ani Experiență</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-stone-900">100%</p>
                <p className="text-sm text-stone-500 uppercase tracking-widest">Focus Strategie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}