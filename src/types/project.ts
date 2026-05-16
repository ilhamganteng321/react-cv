// types/project.ts
export interface ProjectTag {
  name: string;
  color: string;
}

export interface Project {
  icon: string;
  photoUrl?: string;
  iconGradient: string;
  title: string;
  type: "web" | "mobile" | "desktop" | "design";
  description: string;
  features?: string[];
  tags: ProjectTag[];
  liveUrl: string | null;
  githubUrl: string | null;
}

export const projects: Project[] = [
  {
    icon: "fas fa-cash-register",
    iconGradient: "from-blue-500 to-indigo-700",
    title: "Electron POS",
    type: "desktop",
    photoUrl: "/images/pos.png",
    description:
      "Modern desktop Point of Sales (POS) application built with Electron and Vite, featuring SQLite local database integration, cashier transaction management, and interactive sales analytics dashboard powered by ECharts.",
    tags: [
      {
        name: "Electron",
        color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      },
      {
        name: "Vite",
        color: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      },
      {
        name: "SQLite",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      },
      {
        name: "ECharts",
        color: "bg-green-500/10 text-green-400 border border-green-500/20",
      },
      {
        name: "Tailwind CSS",
        color: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
      },
    ],
    liveUrl: "",
    githubUrl: "https://github.com/ilhamganteng321/electron-pos",
  },
  {
    icon: "fas fa-toolbox",
    photoUrl: "/images/tools.png",
    iconGradient: "from-blue-500 to-indigo-700",
    title: "Digital Tools Hub",
    type: "web",
    description:
      "All-in-one productivity suite featuring digital signature generator, JSON formatter & validator, QR code creator, image compressor, and file converter. Built with modern UI/UX principles including drag-drop upload, real-time preview, batch processing, and one-click download.",
    features: [
      "Digital Signature: Draw, type, or upload signature with transparent background export",
      "JSON Tools: Format, minify, validate, and convert JSON to CSV/XML/YAML",
      "QR Code: Generate and customize QR codes with logo embedding",
      "Image Tools: Compress, resize, convert between formats, and apply filters",
      "File Converter: Convert between 50+ formats including PDF, DOCX, XLSX, and images",
      "Batch Processing: Handle multiple files simultaneously with progress tracking",
    ],
    tags: [
      {
        name: "React 19",
        color: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
      },
      {
        name: "TypeScript",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      },
      {
        name: "shadcn/ui",
        color: "bg-zinc-500/10 text-zinc-400 border border-zinc-500/20",
      },
    ],
    liveUrl: "https://tools.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/neermala_tools",
  },
  {
    icon: "fas fa-chart-line",
    photoUrl: "/images/sales.png",
    iconGradient: "from-green-500 to-emerald-700",
    title: "Realtime Sales Dashboard",
    type: "web",
    description:
      "Real-time sales monitoring dashboard that streams live e-commerce data via Socket.IO, with interactive charts and searchable order history.",
    tags: [
      {
        name: "Node.js",
        color: "bg-green-500/10 text-green-400 border border-green-500/20",
      },
      {
        name: "Socket.IO",
        color: "bg-gray-500/10 text-gray-300 border border-gray-500/20",
      },
      {
        name: "Chart.js",
        color: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
      },
      {
        name: "DataTables",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      },
    ],
    liveUrl: "https://noderealtimedashboard-production.up.railway.app",
    githubUrl: "https://github.com/ilhamganteng321/node_realtime_dashboard",
  },
  {
    icon: "fas fa-users-cog",
    photoUrl: "/images/hris.png",
    iconGradient: "from-emerald-500 to-teal-600",
    title: "HRIS Mini (Ham)",
    type: "web",
    description:
      "Human Resource Information System with role-based access, real-time attendance tracking, and automated salary calculation for small organizations.",
    tags: [
      {
        name: "Next.js",
        color: "bg-gray-500/10 text-gray-300 border border-gray-500/20",
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      },
      {
        name: "Zustand",
        color: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
      },
      {
        name: "PostgreSQL",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      },
    ],
    liveUrl: "https://employe.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/employee_management",
  },
  {
    icon: "fas fa-film",
    photoUrl: "/images/cinema.png",
    iconGradient: "from-red-500 to-purple-600",
    title: "HamCinema",
    type: "web",
    description:
      "Modern movie & TV streaming platform powered by TMDB API, with discover, trending content, personal watchlist, and real-time search.",
    tags: [
      {
        name: "React",
        color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      },
      {
        name: "Tailwind CSS",
        color: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      },
      {
        name: "TMDB API",
        color: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      },
      {
        name: "Framer Motion",
        color: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
      },
    ],
    liveUrl: "https://movie.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/movie-TMDB",
  },
  {
    icon: "fas fa-wallet",
    photoUrl: "/images/finance.png",
    iconGradient: "from-blue-500 to-black",
    title: "Aplikasi Pelacak Keuangan",
    type: "web",
    description:
      "Personal finance tracker to manage expenses, monitor budgets, and visualize spending patterns, built with React and Firebase.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Firebase",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://finance.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/finance_tracker",
  },
  {
    icon: "fas fa-blog",
    photoUrl: "/images/blog.png",
    iconGradient: "from-red-800 to-black",
    title: "Aplikasi Blog Pribadi",
    type: "web",
    description:
      "Modern blogging platform with real-time post creation, editing, and management, built with React and Firebase.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Firebase",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://blog.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/blog_app",
  },
  {
    icon: "fas fa-trophy",
    photoUrl: "/images/tour.png",
    iconGradient: "from-green-800 to-black",
    title: "Aplikasi Manajer Turnamen",
    type: "web",
    description:
      "Tournament management web app supporting team registration, match scheduling, and real-time standings, powered by Firebase.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Firebase",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://tour.ngacir.my.id",
    githubUrl: "https://github.com/ilhamganteng321/tourneyku",
  },
  {
    icon: "fas fa-cloud-sun",
    photoUrl: "/images/weather.png",
    iconGradient: "from-yellow-300 to-black",
    title: "Dashboard Analitik Cuaca",
    type: "web",
    description:
      "Elegant weather dashboard visualizing real-time temperature, wind, and humidity data from the Open-Meteo API.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Open-Meteo API",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://wea.ngacir.my.id/",
    githubUrl: "https://github.com/ilhamganteng321/weather_app",
  },
  {
    icon: "fas fa-coins",
    photoUrl: "/images/crypto.png",
    iconGradient: "from-purple-500 to-black",
    title: "Dashboard Analitik Crypto",
    type: "web",
    description:
      "Modern crypto analytics dashboard with dynamic charts and real-time market data from the CoinGecko API.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Chart.js",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "CoinGecko API",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://crypto.ngacir.my.id/",
    githubUrl: "https://github.com/ilhamganteng321/crypto-dashboard",
  },
  {
    icon: "fas fa-pen-nib",
    photoUrl: "/images/note.png",
    iconGradient: "from-black to-red-300",
    title: "Aplikasi Catatan",
    type: "web",
    description:
      "Smart note-taking web app with AI integration to enhance, rewrite, or auto-generate notes intelligently.",
    tags: [
      {
        name: "React",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Rest Api",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Tailwind CSS",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "AI Integration",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: "https://note-app-cyan-xi.vercel.app/",
    githubUrl: null,
  },
  {
    icon: "fas fa-heartbeat",
    photoUrl: "/images/image.png",
    iconGradient: "from-gray-800 to-black",
    title: "Aplikasi Prediksi Diabetes",
    type: "mobile",
    description:
      "AI-powered mobile app using Flutter and a Flask ML backend to predict diabetes risk from user health data.",
    tags: [
      {
        name: "Flutter",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Firebase",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Flask",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: null,
    githubUrl: "https://github.com/ilhamganteng321/project-2",
  },
  {
    icon: "fas fa-robot",
    photoUrl: "/images/chat.png",
    iconGradient: "from-gray-800 to-black",
    title: "Chatbot Edukasi",
    type: "web",
    description:
      "NLP-powered chatbot for interactive JavaScript Q&A, helping students learn programming concepts conversationally.",
    tags: [
      {
        name: "JavaScript",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "NLP",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
      {
        name: "Node.js",
        color:
          "bg-white/80 text-gray-800 border border-gray-300 backdrop-blur-sm",
      },
    ],
    liveUrl: null,
    githubUrl: null,
  },
];
