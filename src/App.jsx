import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  ArrowLeft,
  Camera,
  Code,
  ExternalLink,
  Menu,
  X,
  Moon,
  Sun,
} from "lucide-react";

// --- DADOS DOS PROJETOS ---
const devProjects = [
  {
    id: 5,
    title: "Caraval Game Control",
    description:
      "Aplicação interativa desenvolvida em React para gerenciar a experiência de um Clube do Livro temático baseado em 'Caraval'",
    tags: ["React", "Tailwind", "BroadcastChannel API", "Lucide React"],
    image: "print_caraval.jpg",
    demo: "Projeto não permite o pages",
    repo: "https://github.com/GutyerrezRoger/caraval-game-control",
    featured: true,
  },
  {
    id: 3,
    title: "Docinhos de Mainha",
    description:
      "Plataforma completa de encomendas com cálculo automático e integração WhatsApp.",
    tags: ["React", "Tailwind", "Vite"],
    image: "print_bolo.jpg",
    demo: "https://gutyerrezroger.github.io/Decore-Seu-Bolo",
    repo: "https://github.com/GutyerrezRoger/Decore-Seu-Bolo",
    featured: false,
  },
  {
    id: 1,
    title: "Bikcraft",
    description:
      "E-commerce de bicicletas elétricas com foco em UI Design e acessibilidade.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "print_bike.jpg",
    demo: "https://gutyerrezroger.github.io/BikeCraft_Origamid",
    repo: "https://github.com/GutyerrezRoger/BikeCraft_Origamid",
    featured: false,
  },
  {
    id: 2,
    title: "Cronômetro de Estudos",
    description:
      "PWA (Progressive Web App) para gerenciar tempo líquido de estudo com foco total.",
    tags: ["React", "TailwindCSS", "Firebase"],
    image: "print_crono.jpg",
    demo: "https://gutyerrezroger.github.io/cronometro-estudos/",
    repo: "https://github.com/GutyerrezRoger/cronometro-estudos",
    featured: false,
  },
  {
    id: 4,
    title: "Simulado Polícia Federal",
    description:
      "Sistema de quiz com validação imediata e feedback visual para concurseiros.",
    tags: ["JavaScript", "Local Storage", "CSS3"],
    image: "print_simulado.jpg",
    demo: "https://gutyerrezroger.github.io/SimuladoPF",
    repo: "https://github.com/GutyerrezRoger/SimuladoPF",
    featured: false,
  },
];

// --- DADOS DAS FOTOS ---
const photos = [
  {
    id: "urbano",
    title: "Ensaio Urbano",
    description:
      "Retratos urbanos explorando luz, textura e a cidade como cenário.",
    cover: "ensaios/capa_urbano.jpg",
    tech: ["Canon T6i", "18-55mm", "Lightroom"],
    images: [
      "ensaios/urbano/img1.jpg",
      "ensaios/urbano/img2.jpg",
      "ensaios/urbano/img3.jpg",
      "ensaios/urbano/img4.jpg",
      "ensaios/urbano/img5.jpg",
    ],
  },
  {
    id: "casamento",
    title: "Fotografia de Casamento",
    description: "Momentos inesquecíveis com foco em espontaneidade e emoção.",
    cover: "ensaios/capa_casamento.jpg",
    tech: ["Canon 500D", "50mm", "Photoshop"],
    images: [
      "ensaios/casamento/img1.jpg",
      "ensaios/casamento/img2.jpg",
      "ensaios/casamento/img3.jpg",
      "ensaios/casamento/img4.jpg",
      "ensaios/casamento/img5.jpg",
    ],
  },
];

export default function App() {
  // 1. LÓGICA DO TEMA
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined" && window.localStorage.getItem("theme")) {
      return window.localStorage.getItem("theme");
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // 2. ESTADOS DA APLICAÇÃO
  const [activeSection, setActiveSection] = useState("home");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Função auxiliar para navegar
  const navigateTo = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-100 dark:bg-[#1a2426] text-gray-900 dark:text-gray-100 font-sans selection:bg-primary selection:text-white">
      {/* HEADER / NAV */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-[#1a2426]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <span
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigateTo("home")}
            >
              Guty.Dev
            </span>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {/* Botão Tema */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-primary"
                title="Alternar Tema"
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </button>

              {/* Links de Navegação */}
              {activeSection !== "home" && (
                <button
                  onClick={() => navigateTo("home")}
                  className="hover:text-primary transition-colors font-medium"
                >
                  Início
                </button>
              )}

              <button
                onClick={() => navigateTo("dev")}
                className={`hover:text-primary transition-colors font-medium ${
                  activeSection === "dev" ? "text-primary font-bold" : ""
                }`}
              >
                Dev
              </button>

              <button
                onClick={() => navigateTo("photo")}
                className={`hover:text-primary transition-colors font-medium ${
                  activeSection === "photo" ? "text-primary font-bold" : ""
                }`}
              >
                Foto
              </button>

              {/* Ícones Sociais */}
              <div className="flex items-center gap-4 ml-4 border-l pl-6 border-gray-300 dark:border-gray-700">
                <a
                  href="https://www.instagram.com/mdsguty.raw/"
                  target="_blank"
                  className="text-gray-500 hover:text-[#E1306C] transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/gutyerrez-roger-426851155/"
                  target="_blank"
                  className="text-gray-500 hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/GutyerrezRoger"
                  target="_blank"
                  className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Botão Mobile */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="text-primary">
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-600 dark:text-gray-300"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* SIDEBAR MOBILE */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-[#1a2426] shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-gray-500 hover:text-primary"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg font-medium">
            <button
              onClick={() => navigateTo("home")}
              className="text-left hover:text-primary"
            >
              Início
            </button>
            <button
              onClick={() => navigateTo("dev")}
              className="text-left hover:text-primary flex items-center gap-2"
            >
              <Code size={20} /> Desenvolvedor
            </button>
            <button
              onClick={() => navigateTo("photo")}
              className="text-left hover:text-primary flex items-center gap-2"
            >
              <Camera size={20} /> Fotógrafo
            </button>
          </div>
        </div>
      </div>

      {/* OVERLAY DO MOBILE */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <main className="pt-20 min-h-screen">
        {/* SEÇÃO HOME (QUEM SOU EU) */}
        {activeSection === "home" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12 animate-in fade-in zoom-in duration-500">
            <div className="flex-1 space-y-6 order-2 md:order-1">
              <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide mb-2">
                DESENVOLVEDOR & FOTÓGRAFO
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Olá, sou <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Gutyerrez Roger
                </span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Transformo ideias em código e momentos em memórias. Especialista
                em criar experiências digitais modernas e capturar a essência do
                mundo através da lente.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setActiveSection("dev")}
                  className="px-8 py-3 bg-primary hover:bg-primary-dark text-background font-bold rounded-lg shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Code size={20} /> Ver Portfólio Dev
                </button>
                <button
                  onClick={() => setActiveSection("photo")}
                  className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-primary text-gray-800 dark:text-white font-bold rounded-lg shadow-sm transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Camera size={20} /> Ver Fotos
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm md:max-w-md order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
                  src="fotoprincipal.JPG"
                  alt="Gutyerrez Roger"
                  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </section>
        )}

        {/* SEÇÃO DEV */}
        {activeSection === "dev" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in slide-in-from-bottom-8 duration-500">
            <div className="flex items-center gap-4 mb-12">
              <button
                onClick={() => navigateTo("home")}
                className="p-2 hover:bg-gray-200 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h2 className="text-3xl font-bold">
                  Projetos de Desenvolvimento
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Soluções criativas com código limpo e performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {devProjects.map((project) => (
                <div
                  key={project.id}
                  className={`group bg-white dark:bg-card rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${
                    project.featured ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Imagem do Projeto */}
                  <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.src = `https://placehold.co/600x400/1a2426/a67951?text=${encodeURIComponent(
                          project.title,
                        )}`;
                      }}
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20 bg-primary text-background text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        Destaque
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mt-auto border-t border-gray-200 dark:border-gray-800 pt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-background text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wider font-bold rounded border border-gray-300 dark:border-gray-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {/* Lógica do Botão Demo */}
                        {project.demo.startsWith("http") ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-background font-bold rounded transition-all text-sm"
                          >
                            <ExternalLink size={16} /> Ver Projeto
                          </a>
                        ) : (
                          <span className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-200 dark:bg-gray-800 text-gray-500 font-bold rounded text-sm cursor-not-allowed opacity-70">
                            <ExternalLink size={16} /> Indisponível
                          </span>
                        )}
                        <a
                          href={project.repo}
                          target="_blank"
                          className="p-2 border border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-white rounded transition-all"
                          title="Ver Código"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SEÇÃO FOTO */}
        {activeSection === "photo" && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in slide-in-from-right-8 duration-500">
            {/* CABEÇALHO DA SEÇÃO */}
            <div className="flex items-center gap-4 mb-12">
              <button
                onClick={() => {
                  if (selectedAlbum) {
                    setSelectedAlbum(null); // Se tiver dentro de álbum, volta pra lista
                  } else {
                    navigateTo("home"); // Se tiver na lista, volta pra home
                  }
                }}
                className="p-2 hover:bg-gray-200 dark:hover:bg-white/5 rounded-full transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h2 className="text-3xl font-bold">
                  {selectedAlbum ? selectedAlbum.title : "Galeria de Álbuns"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedAlbum
                    ? "Explore os detalhes deste ensaio."
                    : "Selecione um álbum para ver as fotos."}
                </p>
              </div>
            </div>

            {/* LÓGICA: MOSTRAR LISTA DE ÁLBUNS OU FOTOS DO ÁLBUM? */}
            {!selectedAlbum ? (
              /* --- VISTA 1: GRID DE ÁLBUNS --- */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {photos.map((album) => (
                  <div
                    key={album.id}
                    onClick={() => setSelectedAlbum(album)}
                    className="group cursor-pointer bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Capa do Álbum */}
                    <div className="h-64 overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10" />
                      <img
                        src={album.cover}
                        alt={album.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="px-3 py-1 bg-white/90 dark:bg-black/80 text-xs font-bold rounded-full uppercase tracking-wider backdrop-blur-sm">
                          {album.images.length} Fotos
                        </span>
                      </div>
                    </div>

                    {/* Infos do Álbum */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {album.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {album.description}
                      </p>

                      {/* Equipamento usado (Tech) */}
                      <div className="flex flex-wrap gap-2">
                        {album.tech.map((item) => (
                          <span
                            key={item}
                            className="text-[10px] font-bold px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-gray-500 uppercase"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* --- VISTA 2: FOTOS DENTRO DO ÁLBUM --- */
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {selectedAlbum.images.map((imgSrc, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid rounded-xl overflow-hidden group relative"
                  >
                    <img
                      src={imgSrc}
                      alt={`Foto ${index}`}
                      className="w-full h-auto rounded-xl hover:opacity-90 transition-opacity cursor-zoom-in"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-gray-200 dark:border-secondary/20 text-center bg-white dark:bg-background text-sm transition-colors duration-300">
        <p className="text-gray-500 mb-4 font-medium">
          Me acompanhe nas redes:
        </p>
        <div className="flex justify-center gap-8 mb-6">
          <a
            href="https://www.instagram.com/mdsguty.raw/"
            target="_blank"
            className="text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gutyerrez-roger-426851155/"
            target="_blank"
            className="text-gray-400 hover:text-[#0A66C2] transition-colors transform hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/GutyerrezRoger"
            target="_blank"
            className="text-gray-400 hover:text-black dark:hover:text-white transition-colors transform hover:scale-110"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Gutyerrez Roger. Todos os direitos
          reservados.
        </p>
      </footer>
    </div>
  );
}
