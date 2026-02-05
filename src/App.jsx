import { useState } from "react";
import fotoPerfil from './src/fotoprincipal.JPG';
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
} from "lucide-react";

// --- SEUS DADOS REAIS AQUI ---
const devProjects = [
  {
    id: 1,
    title: "Bikcraft: Bicicletas Elétricas",
    description:
      "Site de vendas de bicicletas elétricas com foco em design e usabilidade exclusiva.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://gutyerrezroger.github.io/BikeCraft_Origamid",
    repo: "https://github.com/GutyerrezRoger/BikeCraft_Origamid",
  },
  {
    id: 2,
    title: "Cronômetro de Estudos",
    description:
      "PWA (Progressive Web App) para gerenciar tempo líquido de estudo com foco total.",
    tags: ["React", "TailwindCSS", "Firebase"],
    demo: "https://gutyerrezroger.github.io/cronometro-estudos/",
    repo: "https://github.com/GutyerrezRoger/cronometro-estudos",
  },
  {
    id: 3,
    title: "Cake Builder",
    description:
      "Montador de bolos interativo: o cliente monta e vê o orçamento em tempo real.",
    tags: ["HTML5", "CSS3", "JS Vanilla"],
    demo: "https://gutyerrezroger.github.io/Decore-Seu-Bolo",
    repo: "https://github.com/GutyerrezRoger/Decore-Seu-Bolo",
  },
  {
    id: 4,
    title: "Simulado Polícia Federal",
    description:
      "Plataforma direta e eficiente para preparação de concursos públicos.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://gutyerrezroger.github.io/SimuladoPF",
    repo: "https://github.com/GutyerrezRoger/SimuladoPF",
  },
];

const photoAlbums = [
  {
    id: "urbano",
    title: "Ensaio Urbano",
    description:
      "Retratos urbanos explorando luz, textura e a cidade como cenário.",
    cover: "/ensaios/capa_urbano.jpg",
    tech: ["Canon T6i", "18-55mm", "Lightroom"],
    images: [
      "/ensaios/urbano/img1.jpg",
      "/ensaios/urbano/img2.jpg",
      "/ensaios/urbano/img3.jpg",
      "/ensaios/urbano/img4.jpg",
      "/ensaios/urbano/img5.jpg",
    ],
  },
  {
    id: "casamento",
    title: "Fotografia de Casamento",
    description: "Momentos inesquecíveis com foco em espontaneidade e emoção.",
    cover: "/ensaios/capa_casamento.jpg",
    tech: ["Canon 500D", "50mm", "Photoshop"],
    images: [
      "/ensaios/casamento/img1.jpg",
      "/ensaios/casamento/img2.jpg",
      "/ensaios/casamento/img3.jpg",
      "/ensaios/casamento/img4.jpg",
      "/ensaios/casamento/img5.jpg",
    ],
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openGallery = (album) => {
    setSelectedAlbum(album);
    setActiveSection("gallery");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateTo = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-text font-sans flex flex-col">
      {/* HEADER */}
      <header className="px-6 py-4 flex justify-between items-center border-b border-secondary/30 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <h1
          className="text-xl md:text-2xl font-bold text-light hover:text-primary transition-colors cursor-pointer"
          onClick={() => navigateTo("home")}
        >
          Gutyerrez Roger
        </h1>

        {/* Menu Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-light"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex gap-6">
          {activeSection !== "home" && (
            <button
              onClick={() => navigateTo("home")}
              className="hover:text-primary transition-colors"
            >
              Início
            </button>
          )}
          <button
            onClick={() => navigateTo("dev")}
            className={`hover:text-primary transition-colors ${activeSection === "dev" ? "text-primary font-bold" : ""}`}
          >
            Dev
          </button>
          <button
            onClick={() => navigateTo("photo")}
            className={`hover:text-primary transition-colors ${activeSection === "photo" ? "text-primary font-bold" : ""}`}
          >
            Foto
          </button>
        </nav>
      </header>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-secondary/30 p-4 flex flex-col gap-4 fixed w-full z-40 top-[60px]">
          <button
            onClick={() => navigateTo("home")}
            className="text-left py-2 border-b border-gray-800"
          >
            Início
          </button>
          <button
            onClick={() => navigateTo("dev")}
            className="text-left py-2 border-b border-gray-800 text-primary"
          >
            Portfólio Dev
          </button>
          <button
            onClick={() => navigateTo("photo")}
            className="text-left py-2 text-primary"
          >
            Portfólio Foto
          </button>
        </div>
      )}

      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        {/* SEÇÃO INTRO (HOME) */}
        {activeSection === "home" && (
          <section className="flex flex-col md:flex-row items-center gap-8 md:gap-16 animate-fade-in-up max-w-5xl">
            <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-light">
                Quem sou eu?
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                Um criador que se divide entre dois mundos: o do{" "}
                <span className="text-primary font-semibold">
                  desenvolvimento web
                </span>{" "}
                e o da{" "}
                <span className="text-primary font-semibold">fotografia</span>.
                Explore meus dois lados e descubra como criatividade e técnica
                se complementam.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button
                  onClick={() => navigateTo("dev")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-background font-bold rounded shadow-lg hover:bg-secondary hover:text-light transition-all hover:-translate-y-1"
                >
                  <Code size={20} /> Portfólio Dev
                </button>
                <button
                  onClick={() => navigateTo("photo")}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-light text-light font-bold rounded hover:bg-light hover:text-background transition-all hover:-translate-y-1"
                >
                  <Camera size={20} /> Portfólio Foto
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-sm md:max-w-md order-1 md:order-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <img
  src={fotoPerfil} 
  alt="Gutyerrez Roger"
  className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]"
/>
              </div>
            </div>
          </section>
        )}

        {/* PORTFÓLIO DEV */}
        {activeSection === "dev" && (
          <section className="w-full max-w-5xl animate-fade-in-up">
            <div className="flex items-center gap-2 mb-8">
              <button
                onClick={() => navigateTo("home")}
                className="md:hidden text-gray-400"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-3xl font-bold text-light flex items-center gap-3">
                <Code className="text-primary" /> Projetos Dev
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {devProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-card p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/20 text-primary text-xs font-bold rounded border border-secondary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex-1 text-center py-2 bg-primary text-background text-sm font-bold rounded hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      className="flex-1 text-center py-2 border border-primary text-primary text-sm font-bold rounded hover:bg-primary hover:text-background transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://wa.me/5581985723833"
                className="inline-block px-8 py-3 bg-card border border-gray-700 hover:border-primary text-white rounded-full font-bold transition-all shadow hover:shadow-primary/20"
              >
                Vamos codar juntos? Entre em contato
              </a>
            </div>
          </section>
        )}

        {/* PORTFÓLIO FOTO */}
        {activeSection === "photo" && (
          <section className="w-full max-w-5xl animate-fade-in-up">
            <div className="flex items-center gap-2 mb-8">
              <button
                onClick={() => navigateTo("home")}
                className="md:hidden text-gray-400"
              >
                <ArrowLeft />
              </button>
              <h2 className="text-3xl font-bold text-light flex items-center gap-3">
                <Camera className="text-primary" /> Fotografia
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {photoAlbums.map((album) => (
                <div
                  key={album.id}
                  onClick={() => openGallery(album)}
                  className="group cursor-pointer bg-card rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-light/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors"></div>
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-light mb-1 group-hover:text-primary transition-colors">
                      {album.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {album.description}
                    </p>
                    <div className="flex gap-2 text-[10px] text-secondary font-mono uppercase tracking-wider">
                      {album.tech.join(" • ")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href="https://wa.me/5581985723833"
                className="inline-block px-8 py-3 bg-card border border-gray-700 hover:border-primary text-white rounded-full font-bold transition-all shadow hover:shadow-primary/20"
              >
                Orçamento para ensaio? Chama no Zap
              </a>
            </div>
          </section>
        )}

        {/* GALERIA DE FOTOS (SUB-SEÇÃO) */}
        {activeSection === "gallery" && selectedAlbum && (
          <section className="w-full max-w-6xl animate-fade-in">
            <div className="flex items-center gap-4 mb-6 sticky top-20 bg-background/95 p-2 z-30 backdrop-blur">
              <button
                onClick={() => setActiveSection("photo")}
                className="p-2 bg-card rounded-full text-light hover:text-primary transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl font-bold text-primary">
                {selectedAlbum.title}
              </h2>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 pb-8">
              {selectedAlbum.images.map((img, idx) => (
                <div
                  key={idx}
                  className="break-inside-avoid rounded-lg overflow-hidden group mb-4"
                >
                  <img
                    src={img}
                    alt="Foto galeria"
                    className="w-full h-auto rounded-lg transform transition duration-500 hover:scale-[1.02] hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="py-8 border-t border-secondary/20 text-center bg-background text-sm">
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
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-gray-600">
          © {new Date().getFullYear()} Gutyerrez Roger. Desenvolvido com React &
          Tailwind.
        </p>
      </footer>
    </div>
  );
}
