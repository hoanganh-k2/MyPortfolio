import nestImg from "assets/project/nestjs.png";
import react from "assets/project/React.PNG";
import php from "assets/project/PHPLaravel.png";
import topikMate from "assets/project/TOPIKMate.png";
import kBridge from "assets/project/kbridge.png";
import novaMart from "assets/project/NovaMart.png";

export type TLanguage = "vi" | "en" | "ko";

type LocalizedText = Record<TLanguage, string>;

export const CONTACT = {
  GITHUB_URL: "https://github.com/hoanganh-k2",
  LINKEDIN_URL: "https://www.linkedin.com/in/anh-phung-a92b7a3b3/",
  EMAIL: "anhph.work1@gmail.com",
  PHONE: "0362918698",
  PHONE_DISPLAY: "0362.918.698",
  CV_URL:
    "https://drive.google.com/file/d/1zZ1oc1Q8BFg6XQZdrMjIuOvYul0mUsV6/view?usp=sharing",
};

export interface IExperience {
  id: number;
  title: LocalizedText;
  company: LocalizedText;
  duration: LocalizedText;
}

export const EXPERIENCES: IExperience[] = [
  {
    id: 1,
    title: {
      vi: "Fresher KRSE (Tiếng Hàn)",
      en: "Fresher KRSE (Korean)",
      ko: "신입 KRSE (한국어)",
    },
    company: {
      vi: "FPT Software",
      en: "FPT Software",
      ko: "FPT 소프트웨어",
    },
    duration: {
      vi: "Tháng 6/2026 - Hiện tại",
      en: "Jun 2026 - Present",
      ko: "2026년 6월 - 현재",
    },
  },
  {
    id: 2,
    title: {
      vi: "Thực tập sinh KRSE (Tiếng Hàn)",
      en: "Intern KRSE (Korean)",
      ko: "인턴 KRSE (한국어)",
    },
    company: {
      vi: "FPT Software",
      en: "FPT Software",
      ko: "FPT 소프트웨어",
    },
    duration: {
      vi: "Tháng 1/2026 - 6/2026",
      en: "Jan 2026 - Jun 2026",
      ko: "2026년 1월 - 6월",
    },
  },
  {
    id: 3,
    title: {
      vi: "Sinh viên Công nghệ thông tin",
      en: "Information Technology Student",
      ko: "정보기술학과 학생",
    },
    company: {
      vi: "Đại học Phenikaa",
      en: "Phenikaa University",
      ko: "프에니카 대학교",
    },
    duration: {
      vi: "2022 - Hiện tại",
      en: "2022 - Present",
      ko: "2022년 - 현재",
    },
  },
];

export interface IProject {
  id: number;
  imgPath: string;
  title: LocalizedText;
  description: LocalizedText;
  githubLink: string;
  demoLink: string;
}

export const PROJECTS: IProject[] = [
  {
    id: 1,
    imgPath: novaMart,
    title: {
      vi: "NovaMart — Nền tảng thương mại điện tử",
      en: "NovaMart — Premium E-Commerce Platform",
      ko: "NovaMart — 프리미엄 이커머스 플랫폼",
    },
    description: {
      vi: `Nền tảng thương mại điện tử với danh mục sản phẩm, tìm kiếm & lọc, giỏ hàng, thanh toán, quản lý đơn hàng và trang quản trị. Giao diện SPA xây dựng bằng ReactJS, triển khai trên Vercel.`,
      en: `An e-commerce platform with product catalog, search & filtering, shopping cart, checkout, order management and an admin dashboard. SPA built with ReactJS and deployed on Vercel.`,
      ko: `상품 카탈로그, 검색·필터, 장바구니, 결제, 주문 관리 및 관리자 대시보드를 갖춘 이커머스 플랫폼입니다. ReactJS로 구축한 SPA이며 Vercel에 배포했습니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/NovaMart-e-commerce.git",
    demoLink: "https://nova-mart-e-commerce.vercel.app",
  },
  {
    id: 2,
    imgPath: kBridge,
    title: {
      vi: "KBRIDGE — Kết nối việc làm Hàn Quốc",
      en: "KBRIDGE — CareerMatch Korean",
      ko: "KBRIDGE — 한국 채용 매칭 플랫폼",
    },
    description: {
      vi: `Nền tảng kết nối ứng viên với cơ hội việc làm tại các công ty Hàn Quốc: tạo hồ sơ, tìm kiếm tin tuyển dụng và gợi ý việc làm phù hợp theo kỹ năng và trình độ tiếng Hàn. Xây dựng theo hướng fullstack với ReactJS.`,
      en: `A platform connecting candidates with jobs at Korean companies: profile building, job search and skill/Korean-level based matching recommendations. Built as a fullstack app with ReactJS.`,
      ko: `지원자와 한국 기업의 채용 공고를 연결하는 플랫폼입니다. 프로필 작성, 채용 검색 및 역량·한국어 수준 기반 매칭 추천을 제공하며 ReactJS로 풀스택 구현했습니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/carrerMatch-korean.git",
    demoLink: "https://github.com/hoanganh-k2/carrerMatch-korean.git",
  },
  {
    id: 3,
    imgPath: topikMate,
    title: {
      vi: "TOPIKMate — Web ôn thi TOPIK II",
      en: "TOPIKMate — TOPIK II Practice App",
      ko: "TOPIKMate — TOPIK II 학습 웹",
    },
    description: {
      vi: `Ứng dụng web hỗ trợ ôn luyện kỳ thi TOPIK II: luyện đề, từ vựng & ngữ pháp, thi thử có tính giờ và theo dõi tiến độ học tập. Giao diện SPA xây dựng bằng ReactJS, triển khai trên Vercel.`,
      en: `A web app for TOPIK II exam preparation: practice questions, vocabulary & grammar, timed mock exams and study progress tracking. SPA built with ReactJS and deployed on Vercel.`,
      ko: `TOPIK II 시험 대비 웹 앱입니다. 문제 풀이, 어휘·문법, 시간제 모의고사 및 학습 진도 추적을 제공하며 ReactJS로 구축하고 Vercel에 배포했습니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/TOPIKMate.git",
    demoLink: "https://topik-mate.vercel.app",
  },
  {
    id: 4,
    imgPath: nestImg,
    title: {
      vi: "Nền tảng Website tuyển dụng",
      en: "Recruitment Website Platform",
      ko: "채용 웹사이트 플랫폼",
    },
    description: {
      vi: `Hệ thống backend cho nền tảng tuyển dụng việc làm, cung cấp đầy đủ API quản lý người dùng, công ty, tin tuyển dụng, hồ sơ và phân quyền. Xây dựng theo kiến trúc modular với NestJS, JWT/RBAC, tài liệu Swagger và các thực hành bảo mật.`,
      en: `Backend system for a job recruitment platform with full APIs for users, companies, job postings, resumes and role-based access. Built with NestJS using a modular architecture, JWT/RBAC, Swagger docs and security best practices.`,
      ko: `채용 플랫폼을 위한 백엔드 시스템으로 사용자, 회사, 채용공고, 이력서 및 권한 관리를 위한 전체 API를 제공합니다. NestJS 모듈러 아키텍처, JWT/RBAC, Swagger 문서 및 보안 모범 사례로 구축했습니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/Backend-nestjs.git",
    demoLink: "https://github.com/hoanganh-k2/Backend-nestjs.git",
  },
  {
    id: 5,
    imgPath: react,
    title: {
      vi: "Hệ thống quản lý Quiz online",
      en: "Online Quiz Management System",
      ko: "온라인 퀴즈 관리 시스템",
    },
    description: {
      vi: `Hệ thống thi trắc nghiệm trực tuyến hoàn chỉnh: quản lý câu hỏi, bài thi, theo dõi kết quả học viên. SPA dựng bằng ReactJS + Redux, hỗ trợ đa ngôn ngữ (Việt/Anh), đếm giờ thi thời gian thực và bảng điều khiển quản trị riêng.`,
      en: `A complete online quiz platform: question management, examinations and learner performance tracking. SPA built with ReactJS + Redux, multilingual (VI/EN), real-time countdown timers and a dedicated admin dashboard.`,
      ko: `문제 관리, 시험, 학습자 성과 추적을 지원하는 완전한 온라인 퀴즈 플랫폼입니다. ReactJS + Redux로 구축한 SPA로 다국어(베트남어/영어), 실시간 카운트다운 타이머 및 전용 관리자 대시보드를 제공합니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/Frontend-react.git",
    demoLink: "https://github.com/hoanganh-k2/Frontend-react.git",
  },
  {
    id: 6,
    imgPath: php,
    title: {
      vi: "Website quản lý đặt phòng khách sạn",
      en: "Hotel Booking Management Website",
      ko: "호텔 예약 관리 웹사이트",
    },
    description: {
      vi: `Website quản lý khách sạn trên nền TALL Stack (Tailwind CSS, Alpine.js, Laravel Livewire, Laravel). Phục vụ Phenikaa Hotel với đặt phòng trực tuyến, quản lý vận hành cho nhân viên và chatbot AI hỗ trợ khách hàng tích hợp Google Gemini.`,
      en: `A hotel management website on the TALL Stack (Tailwind CSS, Alpine.js, Laravel Livewire, Laravel). Built for Phenikaa Hotel with online booking, staff operations management and an AI support chatbot powered by Google Gemini.`,
      ko: `TALL 스택(Tailwind CSS, Alpine.js, Laravel Livewire, Laravel)으로 구축한 호텔 관리 웹사이트입니다. Phenikaa Hotel을 위해 온라인 예약, 직원 운영 관리 및 Google Gemini 기반 AI 지원 챗봇을 제공합니다.`,
    },
    githubLink: "https://github.com/hoanganh-k2/DALN.git",
    demoLink: "https://github.com/hoanganh-k2/DALN.git",
  },
];

export const SKILLS_DATA = [
  "C#",
  "Typescript",
  "Javascript",
  "PHP",
  "React",
  "Node JS",
  "MongoDB",
  "MySQL",
  "Docker",
  "Git",
  "Bootstrap",
  "HTML",
  "CSS",
  "C++",
  "Figma",
];

export interface ILanguageSkill {
  id: number;
  name: LocalizedText;
  level: LocalizedText;
}

export const LANGUAGES_DATA: ILanguageSkill[] = [
  {
    id: 1,
    name: { vi: "Tiếng Hàn", en: "Korean", ko: "한국어" },
    level: { vi: "TOPIK Cấp 5", en: "TOPIK Level 5", ko: "TOPIK 5급" },
  },
  {
    id: 2,
    name: { vi: "Tiếng Anh", en: "English", ko: "영어" },
    level: { vi: "TOEIC 795", en: "TOEIC 795", ko: "TOEIC 795" },
  },
];
