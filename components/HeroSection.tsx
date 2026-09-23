'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import {
  HiArrowDown,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-6 pt-20 pb-8 sm:pt-32 sm:pb-20 md:flex-row md:space-x-8 md:text-left md:pt-40 md:pb-24">
        <div className="md:w-2/5 flex justify-center mb-6 md:mb-0">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Image
              src="/hubbaka.webp"
              alt="Hubbaka Ghoyati"
              fill
              sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
              priority
              className="rounded-full shadow-2xl ring-4 ring-teal-500/30 object-cover"
            />
          </div>
        </div>
        <div className="md:w-3/5 w-full">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-medium bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 mb-3">
            <HiOutlineLocationMarker className="text-teal-600 dark:text-teal-400" />
            Jakarta, Indonesia
          </div>

          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-neutral-900 dark:text-neutral-50">
            Hubbaka Ghoyati
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-1.5 text-teal-600 dark:text-teal-400">
            Full Stack Developer
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 mb-5 sm:mb-6 leading-relaxed">
            Sebagai <strong>Full-Stack Engineer</strong> yang adaptif dan
            komunikatif, saya memiliki pengalaman merancang dan mengembangkan
            perangkat lunak secara <em>end-to-end</em> untuk berkontribusi dalam
            memenuhi kebutuhan operasional serta bisnis perusahaan. Nyaman dan
            antusias berkolaborasi dalam tim untuk memecahkan tantangan teknis
            maupun non-teknis.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6 justify-center md:justify-start">
            <a
              href="mailto:hubbaka.ghoyati456@gmail.com"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-300 dark:border-stone-700 hover:border-teal-500 dark:hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400 font-medium transition-colors break-all sm:break-normal"
            >
              <HiOutlineMail className="text-base text-teal-600 dark:text-teal-400 shrink-0" />
              <span>hubbaka.ghoyati456@gmail.com</span>
            </a>
            <a
              href="https://wa.me/6282127030325"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-neutral-300 dark:border-stone-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors"
            >
              <FaWhatsapp className="text-base text-emerald-500 shrink-0" />
              <span>082127030325</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center md:justify-start">
            <Link
              to="experience"
              className="cursor-pointer text-white font-semibold px-5 py-2.5 sm:px-6 sm:py-3 bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md hover:shadow-lg active:scale-95 transition-all text-xs sm:text-base text-center"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Work Experience
            </Link>
            <Link
              to="accomplishments"
              className="cursor-pointer text-neutral-800 dark:text-neutral-100 font-semibold px-5 py-2.5 sm:px-6 sm:py-3 bg-neutral-100 dark:bg-stone-800 border border-neutral-300 dark:border-stone-700 hover:bg-neutral-200 dark:hover:bg-stone-700 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all text-xs sm:text-base text-center"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Key Accomplishments
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center mt-2 sm:mt-4">
        <Link
          to="accomplishments"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className="cursor-pointer text-neutral-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
          aria-label="Scroll to Key Accomplishments"
        >
          <HiArrowDown size={30} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
