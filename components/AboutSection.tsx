'use client';
import React from 'react';
import { HiOutlineAcademicCap, HiOutlineCheckCircle } from 'react-icons/hi';

const expertiseList = [
  {
    category: 'Bahasa',
    items: 'Indonesia & Inggris',
  },
  {
    category: 'Prinsip & Metodologi',
    items:
      'Clean Code, Maintainability, Scalability, Problem Solving, Team Communication',
  },
  {
    category: 'Backend',
    items: 'Golang (Fiber), Node.js (TypeScript), Python (Flask)',
  },
  {
    category: 'Frontend',
    items: 'Next.js, React.js, Flutter',
  },
  {
    category: 'Database',
    items: 'PostgreSQL (Clustering), MySQL, Supabase, MongoDB',
  },
  {
    category: 'Caching & Message Broker',
    items: 'Redis, RabbitMQ, Kafka',
  },
  {
    category: 'Infrastructure & Orchestration',
    items:
      'Docker, Kubernetes (Container Orchestration), Rancher (Multi-Cluster Management)',
  },
  {
    category: 'Reverse Proxy & Web Server',
    items: 'Nginx',
  },
  {
    category: 'Networking & Security',
    items: 'Cloudflare, DNS Management, SSL/TLS',
  },
  {
    category: 'Version Control & CI/CD',
    items: 'GitHub Actions, GitLab CI/CD',
  },
  {
    category: 'OS & Environment',
    items: 'Linux, macOS, Windows',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-12 sm:pt-16 pb-8 sm:pb-12">
      {/* Key Accomplishments Section */}
      <div id="accomplishments" className="scroll-mt-24 mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-extrabold text-2xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight">
            Key Accomplishments
          </h2>
          <div className="w-12 h-1 mx-auto my-2.5 sm:my-3 bg-teal-500 rounded-full" />
        </div>

        <div className="space-y-4">
          <div className="p-4 sm:p-7 bg-white dark:bg-stone-800/90 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm">
            <h3 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1.5 sm:mb-2">
              Mengembangkan Sistem HRIS (Prima Super Apps)
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Menggantikan sistem pihak ketiga berbayar (GreatDay senilai ±Rp
              1,2 Miliar/tahun) dengan mengelola operasional ±50.000 pekerja
              secara mandiri, sekaligus membuka peluang pendapatan baru.
            </p>
          </div>

          <div className="p-4 sm:p-7 bg-white dark:bg-stone-800/90 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm">
            <h3 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1.5 sm:mb-2">
              Mengembangkan Sistem Tracking Driver &amp; Fleet Management
            </h3>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Mengoptimalkan pelacakan armada dan profil pengemudi, berhasil
              mengefisiensikan biaya operasional kendaraan hingga{' '}
              <strong>40%</strong> tanpa mengurangi performa operasional.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of Expertise */}
      <div className="mb-12 sm:mb-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-extrabold text-2xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight">
            Areas of Expertise
          </h2>
          <div className="w-12 h-1 mx-auto my-2.5 sm:my-3 bg-teal-500 rounded-full" />
        </div>

        <div className="bg-white dark:bg-stone-800/90 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm divide-y divide-neutral-200 dark:divide-stone-700/80">
          {expertiseList.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4"
            >
              <div className="sm:w-1/3 flex items-center gap-2">
                <HiOutlineCheckCircle className="text-teal-600 dark:text-teal-400 shrink-0 text-sm sm:text-base" />
                <span className="font-bold text-xs sm:text-base text-neutral-900 dark:text-neutral-100">
                  {item.category}
                </span>
              </div>
              <div className="sm:w-2/3 text-xs sm:text-base text-neutral-700 dark:text-neutral-300 font-medium">
                {item.items}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="p-4 sm:p-8 bg-white dark:bg-stone-800/80 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400 shrink-0">
            <HiOutlineAcademicCap size={28} />
          </div>
          <div>
            <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100">
              Politeknik Negeri Jakarta — Jakarta
            </h3>
            <p className="text-xs sm:text-sm font-medium text-teal-600 dark:text-teal-400">
              Diploma 4 (D4) - Teknik Informatika dan Komputer
            </p>
          </div>
        </div>
        <div className="text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-neutral-100 dark:bg-stone-700 text-neutral-700 dark:text-neutral-300">
          Agustus 2017 — Agustus 2021
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
