
import logoMagno from '../assets/logo-magno.jpeg'; 
import fotoMestre from '../assets/image_e4d163.png'; 

export const HeroSection = () => {
  return (
    <div className="bg-white min-h-screen text-zinc-900 font-sans flex flex-col">
      
      {/* Container principal que cresce para empurrar o footer */}
      <main className="flex-grow">
        {/* HEADER AJUSTADO */}
        <header className="border-b border-zinc-200 py-4 px-6 md:px-12 flex justify-between items-center bg-white sticky top-0 z-50 shadow-sm">
          <div className="flex items-center gap-3">
            <img src={logoMagno} alt="Logo Magno Alves" className="h-10 w-auto object-contain mix-blend-multiply" />
            <div className="font-bold text-xl tracking-tight mt-1 hidden sm:block">
              MÉTODO <span className="text-zinc-500 font-normal">MAGNO ALVES</span>
            </div>
          </div>
          <nav className="hidden md:flex gap-8 text-base text-zinc-600 font-medium mr-8">
            <a href="#curso" className="hover:text-zinc-900 transition-colors">O Curso</a>
            <a href="#modulos" className="hover:text-zinc-900 transition-colors">Módulos</a>
            <a href="#mestre" className="hover:text-zinc-900 transition-colors">O Mestre</a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section id="curso" className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6">
            <span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Formação Profissionalizante</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-zinc-900">
              Eleve o nível do seu corte com o Método Magno Alves.
            </h1>
            <p className="text-base md:text-lg text-zinc-600 leading-relaxed max-w-xl">
              Aprenda técnicas avançadas de barbearia, visagismo e conquiste a confiança e a autoridade que o mercado de alta performance exige. Um método direto ao ponto para quem busca a excelência.
            </p>
            <div className="pt-4">
              <button className="bg-zinc-900 text-white font-bold py-4 px-10 rounded-md hover:bg-zinc-800 transition-colors shadow-md text-center text-base w-full sm:w-auto">
                Inscreva-se no Método Agora
              </button>
            </div>
          </div>
          <div className="md:col-span-5 w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden border border-zinc-200 shadow-xl relative">
            <iframe className="w-full h-full absolute inset-0 border-0" src="https://www.youtube.com/embed/9_ZH4uGmTmM?rel=0" title="Universidade do Cabelo Magno Alves" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </section>

        {/* SEÇÃO DE MÓDULOS */}
        <section id="modulos" className="bg-zinc-50 py-16 px-6 md:px-12 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-zinc-900 mb-1">O que você vai aprender em seguida(AINDA VOU MUDAR ISSO)</h2>
            <p className="text-zinc-500 text-sm mb-8">Do básico às técnicas de alta performance que ditam o ritmo do mercado.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg border border-zinc-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col">
                  <div className="h-32 bg-zinc-200 flex items-center justify-center">
                    <span className="text-xs text-zinc-400 font-medium">[ Capa Módulo {i} ]</span>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="font-bold text-zinc-900 leading-tight mb-1 text-sm">Título do Módulo {i}</h3>
                    <p className="text-xs text-zinc-500 mb-2">Magno Alves</p>
                    <div className="text-xs font-bold text-zinc-700 mt-auto bg-zinc-100 w-fit px-2 py-1 rounded">Módulo {i} • 4 Aulas</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO O MESTRE (TEXTO PRESERVADO) */}
        <section id="mestre" className="py-20 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 text-center mb-16">Magno Alves</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <img src={fotoMestre} alt="Magno Alves" className="w-full rounded-2xl shadow-lg object-cover" />
              <div className="flex flex-col gap-6">
                <p className="text-zinc-600 leading-relaxed text-lg">Magno iniciou sua trajetória ainda muito jovem, guiado pela paixão pela transformação que a beleza é capaz de proporcionar. Com o passar dos anos, consolidou uma carreira de destaque como cabeleireiro, educador e criador de uma metodologia própria.</p>
                <p className="text-zinc-600 leading-relaxed text-lg">Movido pela busca constante por aperfeiçoamento, uniu estudo, prática e experiência para desenvolver uma técnica exclusiva de corte — posteriormente registrada e patenteada pela Fundação Biblioteca Nacional do Ministério da Cultura — reforçando sua autoridade e relevância no mercado da beleza.</p>
                <div className="space-y-3 mt-2">
                  <h4 className="font-bold text-zinc-900">Sua metodologia se tornou referência por unir:</h4>
                  {['Estrutura técnica clara e organizada', 'Leitura estratégica do formato de rosto', 'Mais segurança e precisão na execução', 'Resultados consistentes e reproduzíveis no salão'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-zinc-700"><span className="text-green-600 font-bold">✔</span> {item}</div>
                  ))}
                </div>
                <p className="text-zinc-600 leading-relaxed italic mt-2">Ao longo da sua trajetória, Magno Alves impactou e inspirou gerações de profissionais, deixando sua marca na formação de cabeleireiros em todo o Brasil.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER FIXO */}
      <footer className="bg-white border-t border-zinc-200 py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="flex justify-start">
            <img src={logoMagno} alt="Logo Magno Alves" className="h-64 w-auto object-contain mix-blend-multiply" />
          </div>
          <div className="flex flex-col gap-6 text-zinc-800 text-lg">
            <div>
              <h4 className="font-bold text-zinc-900 text-xl mb-3">Contato & Localização</h4>
              <div className="space-y-2">
                <p>CNPJ: 52.287.247/0001-34</p>
                <p>Horário: 9h às 17h, segunda à sexta-feira</p>
                <p>Endereço: Av. Batista Botelho, 722, Centro, Sala 01, Santa Cruz do Rio Pardo/SP</p>
                <p className="font-bold text-zinc-900 pt-2">Contato: +55 (14) 99106-1606</p>
              </div>
            </div>
            <div className="flex gap-6 text-base font-medium">
              <a href="https://www.instagram.com/universidademagnoalves/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Instagram</a>
              <a href="https://www.facebook.com/universidadedocabelo" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">Facebook</a>
              <a href="https://www.youtube.com/@UniversidadedoCabeloMagnoAlves" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">YouTube</a>
            </div>
          </div>
          <div className="md:text-right text-zinc-400 text-sm mt-auto">
            <p>© 2026 por Samuel Fontes</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
