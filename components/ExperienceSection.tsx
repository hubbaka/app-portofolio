'use client';
import React from 'react';
import { HiOutlineOfficeBuilding, HiOutlineExternalLink } from 'react-icons/hi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

interface ProjectDetail {
  title: string;
  description: string;
  techStack: string;
  mobileDetails?: string[];
  webDetails?: string[];
  responsibilities?: string[];
  links?: {
    label: string;
    url: string;
    type: 'play' | 'apple' | 'web';
  }[];
}

interface CompanyExperience {
  company: string;
  location?: string;
  role: string;
  period: string;
  projects?: ProjectDetail[];
  responsibilities?: string[];
}

const experiences: CompanyExperience[] = [
  {
    company: 'PT Prima Karya Sarana Sejahtera',
    location: 'South Jakarta',
    role: 'Full-Stack Developer',
    period: 'Mei 2023 — Sekarang',
    projects: [
      {
        title: '1. HRIS – Prima Super Apps',
        description:
          'Aplikasi HRIS multi-tenant (iOS & Android) yang mengakomodir ±50.000 pengguna aktif dengan transaksi data berskala besar serta terintegrasi dengan berbagai sistem internal perusahaan.',
        techStack:
          'Golang (Fiber), Next.js, PostgreSQL (Cluster DB), Redis, RabbitMQ, Git, CI/CD, Docker, Kubernetes, Nginx, OCR.',
        mobileDetails: [
          'Mengembangkan modul Attendance (Photo verification, Geolocation, Correction, Shifting schedule).',
          'Mengembangkan modul Time-Off, Overtime, Reliever, Pay Slip, dan Activity Record.',
          'Mengembangkan fitur Patroli (verifikasi lokasi via QR Code) khusus tim pengamanan/security.',
          'Mengembangkan bagan Struktur Organisasi, Push Notification, dan modul Claim/Reimbursement.',
          'Mengembangkan fitur Live Tracking lokasi untuk driver.',
        ],
        webDetails: [
          'Merancang arsitektur White Label Company (multi-tenant/multiple company support).',
          'Mengembangkan Single Sign-On (SSO) untuk otentikasi lintas aplikasi internal.',
          'Mengembangkan sistem otorisasi Role-Based Access Control (RBAC) dan alur approval MCS (Maker, Checker, Signer).',
          'Mengembangkan modul dashboard approval kehadiran, cuti, lembur, klaim, slip gaji, patroli, dan manajemen akun pengguna.',
        ],
        links: [
          {
            label: 'Google Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.pkss.app&hl=id',
            type: 'play',
          },
          {
            label: 'Apple App Store',
            url: 'https://apps.apple.com/id/app/prima-super-apps/id6474478418',
            type: 'apple',
          },
        ],
      },
      {
        title: '2. Microservice Integration',
        description:
          'Layanan microservice penghubung antara ekosistem Prima Super Apps, sistem Payroll, dan layanan pihak ketiga.',
        techStack: 'Golang (Fiber), PostgreSQL, Redis, RabbitMQ, Docker, Git.',
        responsibilities: [
          'Mengembangkan integrasi Webhook dan bespoke API integration antar-sistem internal.',
        ],
      },
      {
        title: '3. Fleet Management',
        description:
          'Platform manajemen dan pemantauan armada operasional kendaraan serta penugasan pengemudi secara real-time.',
        techStack:
          'Node.js (TypeScript, Next.js), Flutter, PostgreSQL, Redis, RabbitMQ, Docker, Nginx, Git.',
        responsibilities: [
          'Integrasi API Prima Super Apps untuk otentikasi SSO dan Live Tracking.',
          'Mengembangkan fitur monitoring kendaraan: visualisasi riwayat perjalanan (route tracking), estimasi konsumsi bahan bakar/daya, kecepatan, riwayat pengeluaran, serta pelaporan insiden/kendala.',
          'Mengembangkan sistem notifikasi pengingat jatuh tempo pajak kendaraan dan jadwal penugasan driver.',
          'Mengembangkan aplikasi antarmuka Head Unit berbasis Android khusus pada kendaraan.',
        ],
        links: [
          {
            label: 'fleet.pkss.co.id',
            url: 'https://fleet.pkss.co.id/',
            type: 'web',
          },
        ],
      },
      {
        title: '4. Prima Academy (Academy Management)',
        description:
          'Aplikasi web untuk mendukung lini bisnis KPO (Knowledge Process Outsourcing) dalam penilaian, sertifikasi, dan asesmen kompetensi pekerja yang mampu menangani lonjakan beban ±5.000 concurrent users per sesi ujian online.',
        techStack:
          'Node.js (TypeScript, Next.js), PostgreSQL, Redis, RabbitMQ, Docker, Nginx, Git.',
        responsibilities: [
          'Mengembangkan manajemen ujian online (Online Examination Engine) dan bank soal.',
          'Membangun dashboard analitik hasil ujian dan generator sertifikat digital otomatis.',
          'Mengintegrasikan otentikasi terpusat berbasis SSO Prima Super Apps.',
        ],
        links: [
          {
            label: 'primaacademy.pkss.co.id',
            url: 'https://primaacademy.pkss.co.id/',
            type: 'web',
          },
        ],
      },
      {
        title: '5. Digital Office',
        description:
          'Sistem otomasi persuratan internal, pengajuan nota dinas, perjalanan dinas, dan pengarsipan digital terintegrasi.',
        techStack:
          'Node.js (TypeScript, Next.js), PostgreSQL, Redis, RabbitMQ, Docker, Nginx, Git.',
        responsibilities: [
          'Mengembangkan alur persuratan digital, template dinamis, dan sistem delegasi wewenang.',
          'Mengimplementasikan RBAC serta workflow approval berjenjang Maker-Checker-Signer (MCS).',
        ],
      },
      {
        title: '6. Contact Center & Ticket Management',
        description:
          'Platform monitoring dan penanganan tiket pengaduan pelanggan baik internal maupun eksternal.',
        techStack:
          'Node.js (TypeScript, Next.js), PostgreSQL, Docker, Nginx, Git.',
        responsibilities: [
          'Mengembangkan alur eskalasi tiket pengaduan berbasis batasan SLA (Service Level Agreement).',
          'Membangun dashboard pemantauan tiket dan pelaporan performa agen.',
          'Integrasi SSO Prima Super Apps.',
        ],
        links: [
          {
            label: 'dashboardcontactbri.pkss.co.id',
            url: 'https://dashboardcontactbri.pkss.co.id/',
            type: 'web',
          },
        ],
      },
      {
        title: '7. Invitation & Event Management',
        description:
          'Aplikasi otomasi manajemen undangan multi-event perusahaan.',
        techStack:
          'Node.js (TypeScript, Next.js), PostgreSQL, Docker, Nginx, Git.',
        responsibilities: [
          'Mengembangkan fitur blast undangan otomatis via WhatsApp dan Email dengan template dinamis.',
          'Mengembangkan modul pendaftaran event, absensi kehadiran, dan sistem pengundian doorprize.',
        ],
      },
    ],
  },
  {
    company: 'PT Laju Omega Digital',
    location: 'Jakarta',
    role: 'Full-Stack Developer',
    period: 'Agustus 2022 — Maret 2023',
    projects: [
      {
        title: 'Web Processing & Influencer Engagement Platform',
        description:
          'Platform analitik metrik performa dan sentimen media sosial untuk evaluasi Key Opinion Leader (KOL).',
        techStack:
          'Python (Flask, BeautifulSoup, Selenium, Pandas, NLTK, Seaborn), React.js, MySQL, Docker, Git.',
        responsibilities: [
          'Mengembangkan data ingestion / consumption API dari Instagram (Meta Graph API), TikTok, dan X/Twitter.',
          'Merancang algoritma kalkulasi metrik engagement dan valuasi kampanye KOL.',
          'Menerapkan pemrosesan Natural Language Processing (NLP) untuk analisis sentimen audiens menggunakan NLTK.',
          'Mengembangkan modul manajemen influencer dan visualisasi data performa.',
        ],
      },
    ],
  },
  {
    company: 'PT Telematic Multisystem',
    role: 'DevOps Intern',
    period: 'Januari 2022 — Maret 2022',
    responsibilities: [
      'Melakukan konfigurasi dan pemeliharaan server/infrastruktur virtual machine (Linux OS dan konfigurasi jaringan).',
      'Melakukan deployment dan setup environment kontainer menggunakan Docker dan Kubernetes.',
      'Melakukan instalasi, konfigurasi, dan tuning basic database MySQL, PostgreSQL, dan MongoDB.',
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="pt-16 pb-20 scroll-mt-24">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight">
          Work Experience
        </h2>
        <div className="w-12 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
      </div>

      <div className="space-y-12">
        {experiences.map((exp, expIdx) => (
          <div
            key={expIdx}
            className="bg-white dark:bg-stone-800/80 rounded-3xl border border-neutral-200 dark:border-stone-700 shadow-sm p-6 sm:p-8"
          >
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-200 dark:border-stone-700/80">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 mt-1">
                  <HiOutlineOfficeBuilding size={32} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100">
                    {exp.company} {exp.location ? `— ${exp.location}` : ''}
                  </h3>
                  <p className="text-base font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                    <em>{exp.role}</em> | <strong>{exp.period}</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Projects */}
            {exp.projects && (
              <div className="mt-8 space-y-8">
                {exp.projects.map((proj, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-6 rounded-2xl bg-neutral-50 dark:bg-stone-900/60 border border-neutral-200/80 dark:border-stone-700/60 shadow-sm"
                  >
                    <h4 className="font-bold text-lg sm:text-xl text-neutral-900 dark:text-neutral-100 mb-2">
                      {proj.title}
                    </h4>

                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="mb-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <strong>Tech Stack</strong>: {proj.techStack}
                    </div>

                    {proj.mobileDetails && (
                      <div className="mb-4">
                        <strong className="text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 block mb-1">
                          Tanggung Jawab:
                        </strong>
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 ml-2 mb-1">
                          Mobile:
                        </div>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-1 ml-4 leading-relaxed">
                          {proj.mobileDetails.map((item, mIdx) => (
                            <li key={mIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.webDetails && (
                      <div className="mb-4">
                        <div className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 ml-2 mb-1">
                          Web Admin:
                        </div>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-1 ml-4 leading-relaxed">
                          {proj.webDetails.map((item, wIdx) => (
                            <li key={wIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.responsibilities && (
                      <div className="mb-4">
                        <strong className="text-xs sm:text-sm text-neutral-900 dark:text-neutral-100 block mb-1">
                          Tanggung Jawab:
                        </strong>
                        <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 space-y-1 ml-2 leading-relaxed">
                          {proj.responsibilities.map((item, rIdx) => (
                            <li key={rIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Prominent Large Action Buttons */}
                    {proj.links && proj.links.length > 0 && (
                      <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-stone-700/80">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            Tautan Portofolio:
                          </span>
                          <div className="flex flex-wrap gap-3">
                            {proj.links.map((link, lIdx) => {
                              if (link.type === 'play') {
                                return (
                                  <a
                                    key={lIdx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 active:scale-95 shadow-md hover:shadow-lg transition-all"
                                  >
                                    <FaGooglePlay className="text-base" />
                                    <span>{link.label}</span>
                                    <span className="text-xs font-normal opacity-80">
                                      ↗
                                    </span>
                                  </a>
                                );
                              }

                              if (link.type === 'apple') {
                                return (
                                  <a
                                    key={lIdx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-stone-900 dark:bg-stone-700 hover:bg-black dark:hover:bg-stone-600 active:scale-95 shadow-md hover:shadow-lg transition-all border border-stone-700/50"
                                  >
                                    <FaApple className="text-lg" />
                                    <span>{link.label}</span>
                                    <span className="text-xs font-normal opacity-80">
                                      ↗
                                    </span>
                                  </a>
                                );
                              }

                              return (
                                <a
                                  key={lIdx}
                                  href={link.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-teal-600 hover:bg-teal-700 active:scale-95 shadow-md hover:shadow-lg transition-all"
                                >
                                  <HiOutlineExternalLink className="text-lg" />
                                  <span>{link.label}</span>
                                  <span className="text-xs font-normal opacity-80">
                                    ↗
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Simple Responsibilities */}
            {exp.responsibilities && (
              <div className="mt-6">
                <ul className="list-disc list-inside text-sm sm:text-base text-neutral-700 dark:text-neutral-300 space-y-2 leading-relaxed">
                  {exp.responsibilities.map((item, rIdx) => (
                    <li key={rIdx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
