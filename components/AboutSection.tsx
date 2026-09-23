'use client';
import React from 'react';
import {
  HiOutlineAcademicCap,
  HiOutlineServer,
  HiOutlineDesktopComputer,
  HiOutlineDatabase,
  HiOutlineCube,
  HiOutlineShieldCheck,
  HiOutlineCheckCircle,
} from 'react-icons/hi';
import { TbMessageDots } from 'react-icons/tb';

const skillCategories = [
  {
    category: 'Backend',
    icon: <HiOutlineServer className="text-teal-500 text-xl" />,
    skills: [
      'Golang (Fiber)',
      'Node.js (TypeScript)',
      'Python (Flask)',
      'RESTful API',
      'Microservices',
    ],
  },
  {
    category: 'Frontend & Mobile',
    icon: <HiOutlineDesktopComputer className="text-teal-500 text-xl" />,
    skills: [
      'Next.js',
      'React.js',
      'Flutter',
      'Tailwind CSS',
      'TypeScript',
      'HTML/CSS/JS',
    ],
  },
  {
    category: 'Database & Storage',
    icon: <HiOutlineDatabase className="text-teal-500 text-xl" />,
    skills: ['PostgreSQL (Clustering)', 'MySQL', 'Supabase', 'MongoDB'],
  },
  {
    category: 'Caching & Message Broker',
    icon: <TbMessageDots className="text-teal-500 text-xl" />,
    skills: ['Redis', 'RabbitMQ', 'Kafka'],
  },
  {
    category: 'Infrastructure & DevOps',
    icon: <HiOutlineCube className="text-teal-500 text-xl" />,
    skills: [
      'Docker',
      'Kubernetes (K8s)',
      'Rancher',
      'Nginx',
      'GitHub Actions',
      'GitLab CI/CD',
    ],
  },
  {
    category: 'Networking, Security & OS',
    icon: <HiOutlineShieldCheck className="text-teal-500 text-xl" />,
    skills: [
      'Cloudflare',
      'DNS Management',
      'SSL/TLS',
      'Linux',
      'macOS',
      'Windows',
    ],
  },
];

const principles = [
  'Clean Code & Maintainability',
  'Scalability & High Availability (HA)',
  'Multi-Tenant Architecture',
  'Role-Based Access Control (RBAC)',
  'Maker-Checker-Signer (MCS) Workflow',
  'Team Collaboration & Problem Solving',
];

const AboutSection = () => {
  return (
    <section id="about" className="pt-20 pb-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-neutral-50 tracking-tight">
          About Me
        </h2>
        <div className="w-12 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-base sm:text-lg">
          Membangun solusi digital yang andal, efisien, dan berdampak nyata bagi
          pertumbuhan bisnis.
        </p>
      </div>

      {/* Professional Summary */}
      <div className="bg-neutral-50 dark:bg-stone-800/60 border border-neutral-200/80 dark:border-stone-700/80 rounded-2xl p-6 sm:p-8 mb-16 shadow-sm">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <span className="w-2.5 h-6 bg-teal-500 rounded-sm inline-block"></span>
          Professional Summary
        </h3>
        <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-base sm:text-lg">
          Sebagai <strong>Full-Stack Engineer</strong> yang adaptif dan
          komunikatif, saya memiliki pengalaman luas merancang dan mengembangkan
          perangkat lunak secara <em>end-to-end</em> untuk berkontribusi dalam
          memenuhi kebutuhan operasional serta bisnis perusahaan. Nyaman dan
          antusias berkolaborasi dalam tim lintas fungsi untuk memecahkan
          tantangan teknis maupun non-teknis.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-neutral-200 dark:border-stone-700">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mt-0.5">
              <HiOutlineServer size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                Backend Engine
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Golang, Node.js, Python dengan arsitektur microservices.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mt-0.5">
              <HiOutlineDesktopComputer size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                Frontend &amp; Mobile
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Next.js, React.js, dan Flutter untuk UX yang responsif.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 mt-0.5">
              <HiOutlineCube size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-neutral-900 dark:text-neutral-100 text-sm">
                High Availability (HA)
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Docker, Kubernetes, DB Clustering, Redis &amp; RabbitMQ.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Accomplishments Section */}
      <div id="accomplishments" className="pt-4 mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Impact &amp; Results
          </span>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 mt-1">
            Key Accomplishments
          </h3>
          <div className="w-10 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative group p-6 sm:p-7 bg-white dark:bg-stone-800/80 rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                ±Rp 1,2 Miliar / Tahun Efisiensi
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                50.000+ Pengguna
              </span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Sistem HRIS (Prima Super Apps)
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Berhasil menggantikan sistem pihak ketiga berbayar (GreatDay
              senilai ±Rp 1,2 Miliar/tahun) dengan mengelola operasional ±50.000
              pekerja secara mandiri, sekaligus membuka peluang{' '}
              <em>revenue stream</em> baru dari adopsi aplikasi antar-entitas.
            </p>
          </div>

          <div className="relative group p-6 sm:p-7 bg-white dark:bg-stone-800/80 rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm hover:shadow-md transition">
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
                40% Penghematan Biaya
              </span>
              <span className="text-xs text-neutral-400 font-mono">
                Real-Time IoT &amp; Telematika
              </span>
            </div>
            <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
              Tracking Driver &amp; Fleet Management
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Mengoptimalkan pelacakan armada kendaraan dan profiling penugasan
              pengemudi secara presisi, berhasil mengefisiensikan biaya
              operasional kendaraan hingga <strong>40%</strong> tanpa mengurangi
              performa operasional.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of Expertise / Skills */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Technical Arsenal
          </span>
          <h3 className="font-extrabold text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 mt-1">
            Areas of Expertise
          </h3>
          <div className="w-10 h-1 mx-auto my-3 bg-teal-500 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white dark:bg-stone-800/80 border border-neutral-200 dark:border-stone-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="p-2 rounded-lg bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100">
                    {cat.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700 dark:bg-stone-700 dark:text-stone-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Principles & Methodologies */}
        <div className="mt-8 p-6 bg-neutral-50 dark:bg-stone-800/50 rounded-xl border border-neutral-200 dark:border-stone-700/70">
          <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3 text-center sm:text-left">
            Prinsip &amp; Metodologi Kerja
          </h4>
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
            {principles.map((p, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950/40 dark:text-teal-300 border border-teal-200/60 dark:border-teal-800/60"
              >
                <HiOutlineCheckCircle className="text-sm text-teal-600 dark:text-teal-400" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="p-6 sm:p-8 bg-white dark:bg-stone-800/80 rounded-2xl border border-neutral-200 dark:border-stone-700 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-400">
            <HiOutlineAcademicCap size={32} />
          </div>
          <div>
            <h4 className="font-bold text-lg text-neutral-900 dark:text-neutral-100">
              Politeknik Negeri Jakarta
            </h4>
            <p className="text-sm font-medium text-teal-600 dark:text-teal-400">
              Diploma 4 (D4) - Teknik Informatika dan Komputer
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Jakarta, Indonesia
            </p>
          </div>
        </div>
        <div className="text-sm font-semibold px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-stone-700 text-neutral-600 dark:text-neutral-300">
          Agustus 2017 — Agustus 2021
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
