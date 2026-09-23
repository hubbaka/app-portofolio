'use client';
import React, { useState } from 'react';
import {
  HiOutlineBriefcase,
  HiOutlineOfficeBuilding,
  HiOutlineExternalLink,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from 'react-icons/hi';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

interface CompanyExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  projects?: {
    title: string;
    description: string;
    techStack: string[];
    mobileDetails?: string[];
    webDetails?: string[];
    responsibilities?: string[];
    links?: { label: string; url: string; icon?: 'play' | 'apple' | 'web' }[];
  }[];
  simpleResponsibilities?: string[];
}

const experiences: CompanyExperience[] = [
  {
    company: 'PT Prima Karya Sarana Sejahtera',
    location: 'South Jakarta, Indonesia',
    role: 'Full-Stack Developer',
    period: 'Mei 2023 — Sekarang',
    isCurrent: true,
    projects: [
      {
        title: '1. HRIS – Prima Super Apps',
        description:
          'Aplikasi HRIS multi-tenant (iOS & Android) yang mengakomodir ±50.000 pengguna aktif dengan transaksi data berskala besar serta terintegrasi dengan berbagai sistem internal perusahaan.',
        techStack: [
          'Golang (Fiber)',
          'Next.js',
          'PostgreSQL Cluster',
          'Redis',
          'RabbitMQ',
          'Docker',
          'Kubernetes',
          'Nginx',
          'OCR',
        ],
        mobileDetails: [
          'Modul Attendance (Photo verification, Geolocation, Correction, Shifting schedule)',
          'Modul Time-Off, Overtime, Reliever, Pay Slip, dan Activity Record',
          'Fitur Patroli (verifikasi lokasi via QR Code) khusus tim security',
          'Bagan Struktur Organisasi, Push Notification, dan Klaim/Reimbursement',
          'Fitur Live Tracking lokasi pengemudi / driver',
        ],
        webDetails: [
          'Arsitektur White Label Company (multi-tenant / multiple company)',
          'Single Sign-On (SSO) otentikasi lintas aplikasi internal',
          'Sistem otorisasi Role-Based Access Control (RBAC) & alur approval Maker-Checker-Signer (MCS)',
          'Dashboard approval kehadiran, cuti, lembur, klaim, slip gaji, patroli, dan manajemen akun',
        ],
        links: [
          {
            label: 'Google Play Store',
            url: 'https://play.google.com/store/apps/details?id=com.pkss.app&hl=id',
            icon: 'play',
          },
          {
            label: 'Apple App Store',
            url: 'https://apps.apple.com/id/app/prima-super-apps/id6474478418',
            icon: 'apple',
          },
        ],
      },
      {
        title: '2. Microservice Integration',
        description:
          'Layanan microservice penghubung antara ekosistem Prima Super Apps, sistem Payroll, dan layanan pihak ketiga.',
        techStack: [
          'Golang (Fiber)',
          'PostgreSQL',
          'Redis',
          'RabbitMQ',
          'Docker',
          'Git',
        ],
        responsibilities: [
          'Mengembangkan integrasi Webhook dan bespoke API integration antar-sistem internal secara real-time dan secure.',
        ],
      },
      {
        title: '3. Fleet Management',
        description:
          'Platform manajemen dan pemantauan armada operasional kendaraan serta penugasan pengemudi secara real-time.',
        techStack: [
          'Node.js (TypeScript)',
          'Next.js',
          'Flutter',
          'PostgreSQL',
          'Redis',
          'RabbitMQ',
          'Docker',
          'Nginx',
        ],
        responsibilities: [
          'Integrasi API Prima Super Apps untuk otentikasi SSO dan Live Tracking.',
          'Fitur monitoring kendaraan: visualisasi riwayat perjalanan (route tracking), estimasi konsumsi bahan bakar/daya, kecepatan, riwayat pengeluaran, dan pelaporan insiden.',
          'Sistem notifikasi pengingat jatuh tempo pajak kendaraan dan jadwal penugasan driver.',
          'Aplikasi antarmuka Head Unit berbasis Android khusus pada kendaraan.',
        ],
        links: [
          {
            label: 'fleet.pkss.co.id',
            url: 'https://fleet.pkss.co.id/',
            icon: 'web',
          },
        ],
      },
      {
        title: '4. Prima Academy (Academy Management)',
        description:
          'Aplikasi web untuk mendukung lini bisnis KPO (Knowledge Process Outsourcing) dalam penilaian, sertifikasi, dan asesmen kompetensi pekerja yang mampu menangani lonjakan beban ±5.000 concurrent users per sesi ujian online.',
        techStack: [
          'Node.js (TypeScript)',
          'Next.js',
          'PostgreSQL',
          'Redis',
          'RabbitMQ',
          'Docker',
          'Nginx',
        ],
        responsibilities: [
          'Mengembangkan manajemen ujian online (Online Examination Engine) dan bank soal tersinkronisasi.',
          'Dashboard analitik hasil ujian dan generator sertifikat digital otomatis.',
          'Integrasi otentikasi terpusat berbasis SSO Prima Super Apps.',
        ],
      },
      {
        title: '5. Digital Office',
        description:
          'Sistem otomasi persuratan internal, pengajuan nota dinas, perjalanan dinas, dan pengarsipan digital terintegrasi.',
        techStack: [
          'Node.js (TypeScript)',
          'Next.js',
          'PostgreSQL',
          'Redis',
          'RabbitMQ',
          'Docker',
          'Nginx',
        ],
        responsibilities: [
          'Alur persuratan digital, template dinamis, dan sistem delegasi wewenang pejabat berwenang.',
          'Implementasi RBAC dan workflow approval berjenjang Maker-Checker-Signer (MCS).',
        ],
      },
      {
        title: '6. Contact Center & Ticket Management',
        description:
          'Platform monitoring dan penanganan tiket pengaduan pelanggan baik internal maupun eksternal.',
        techStack: [
          'Node.js (TypeScript)',
          'Next.js',
          'PostgreSQL',
          'Docker',
          'Nginx',
          'Git',
        ],
        responsibilities: [
          'Alur eskalasi tiket pengaduan berbasis batasan SLA (Service Level Agreement).',
          'Dashboard pemantauan tiket dan pelaporan performa agen secara periodik.',
          'Integrasi otentikasi SSO Prima Super Apps.',
        ],
        links: [
          {
            label: 'dashboardcontactbri.pkss.co.id',
            url: 'https://dashboardcontactbri.pkss.co.id/',
            icon: 'web',
          },
        ],
      },
      {
        title: '7. Invitation & Event Management',
        description:
          'Aplikasi otomasi manajemen undangan multi-event perusahaan.',
        techStack: [
          'Node.js (TypeScript)',
          'Next.js',
          'PostgreSQL',
          'Docker',
          'Nginx',
          'Git',
        ],
        responsibilities: [
          'Fitur blast undangan otomatis via WhatsApp dan Email dengan template dinamis.',
          'Modul pendaftaran event, absensi kehadiran QR code, dan sistem pengundian doorprize acak.',
        ],
      },
    ],
  },
  {
    company: 'PT Laju Omega Digital',
    location: 'Jakarta, Indonesia',
    role: 'Full-Stack Developer',
    period: 'Agustus 2022 — Maret 2023',
    projects: [
      {
        title: 'Web Processing & Influencer Engagement Platform',
        description:
          'Platform analitik metrik performa dan sentimen media sosial untuk evaluasi Key Opinion Leader (KOL).',
        techStack: [
          'Python (Flask)',
          'React.js',
          'MySQL',
          'Docker',
          'Selenium',
          'BeautifulSoup',
          'Pandas',
          'NLTK',
          'Seaborn',
        ],
        responsibilities: [
          'Data ingestion / consumption API dari Instagram (Meta Graph API), TikTok, dan X/Twitter.',
          'Algoritma kalkulasi metrik engagement dan valuasi kampanye KOL.',
          'Pemrosesan Natural Language Processing (NLP) untuk analisis sentimen audiens menggunakan NLTK.',
          'Modul manajemen influencer dan visualisasi data performa interaktif.',
        ],
      },
    ],
  },
  {
    company: 'PT Telematic Multisystem',
    location: 'Indonesia',
    role: 'DevOps Intern',
    period: 'Januari 2022 — Maret 2022',
    simpleResponsibilities: [
      'Konfigurasi dan pemeliharaan server / infrastruktur virtual machine (Linux OS dan konfigurasi jaringan).',
      'Deployment dan setup environment kontainer menggunakan Docker dan Kubernetes.',
      'Instalasi, konfigurasi, dan tuning basic database MySQL, PostgreSQL, dan MongoDB.',
    ],
  },
];

const ExperienceSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="pt-20 pb-16">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Career History
        </span>
        <h2 className="font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
          Work Experience
        </h2>
        <div className="w-12 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
          Jejak kontribusi profesional dalam merancang dan mengembangkan sistem
          skala enterprise.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, expIdx) => {
          const isExpanded = expandedIndex === expIdx;
          return (
            <div
              key={expIdx}
              className="bg-white dark:bg-stone-800/80 rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm overflow-hidden transition-all duration-200"
            >
              {/* Card Header */}
              <div
                onClick={() => toggleExpand(expIdx)}
                className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-neutral-50/80 dark:hover:bg-stone-750 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 mt-1">
                    <HiOutlineOfficeBuilding size={28} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-extrabold text-xl text-neutral-900 dark:text-neutral-100">
                        {exp.company}
                      </h3>
                      {exp.isCurrent && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                      {exp.role}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {exp.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-100 dark:bg-stone-700 text-neutral-700 dark:text-neutral-300">
                    {exp.period}
                  </span>
                  <button
                    aria-label="Toggle details"
                    className="p-2 text-neutral-500 hover:text-teal-600 dark:hover:text-teal-400"
                  >
                    {isExpanded ? (
                      <HiOutlineChevronUp size={22} />
                    ) : (
                      <HiOutlineChevronDown size={22} />
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="px-6 pb-6 pt-2 border-t border-neutral-100 dark:border-stone-700/60 space-y-6">
                  {/* For company with structured projects */}
                  {exp.projects && (
                    <div className="space-y-6">
                      {exp.projects.map((proj, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-5 rounded-xl bg-neutral-50 dark:bg-stone-850/60 border border-neutral-200/70 dark:border-stone-700/50"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                            <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                              {proj.title}
                            </h4>
                            {proj.links && proj.links.length > 0 && (
                              <div className="flex flex-wrap gap-2">
                                {proj.links.map((link, lIdx) => (
                                  <a
                                    key={lIdx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md bg-white dark:bg-stone-700 border border-neutral-200 dark:border-stone-600 hover:border-teal-500 text-teal-600 dark:text-teal-400 transition"
                                  >
                                    {link.icon === 'play' && (
                                      <FaGooglePlay size={12} />
                                    )}
                                    {link.icon === 'apple' && (
                                      <FaApple size={13} />
                                    )}
                                    {link.icon === 'web' && (
                                      <HiOutlineExternalLink size={13} />
                                    )}
                                    {link.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>

                          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 leading-relaxed">
                            {proj.description}
                          </p>

                          {/* Tech stack badges */}
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {proj.techStack.map((stack, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-xs px-2 py-0.5 rounded font-mono bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/50 dark:border-teal-800/40"
                              >
                                {stack}
                              </span>
                            ))}
                          </div>

                          {/* Detailed bullets: Mobile & Web Admin */}
                          {proj.mobileDetails && (
                            <div className="mb-3">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-200 mb-1.5">
                                Tanggung Jawab Mobile:
                              </h5>
                              <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                                {proj.mobileDetails.map((item, mIdx) => (
                                  <li key={mIdx} className="leading-relaxed">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {proj.webDetails && (
                            <div className="mb-2">
                              <h5 className="text-xs font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-200 mb-1.5">
                                Tanggung Jawab Web Admin:
                              </h5>
                              <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                                {proj.webDetails.map((item, wIdx) => (
                                  <li key={wIdx} className="leading-relaxed">
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Regular responsibilities */}
                          {proj.responsibilities && (
                            <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-1">
                              {proj.responsibilities.map((item, rIdx) => (
                                <li key={rIdx} className="leading-relaxed">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Simple responsibilities (e.g., DevOps intern) */}
                  {exp.simpleResponsibilities && (
                    <ul className="list-disc list-inside text-sm text-neutral-600 dark:text-neutral-300 space-y-2 p-2">
                      {exp.simpleResponsibilities.map((item, rIdx) => (
                        <li key={rIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
