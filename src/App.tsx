import { HeroSection } from './components/HeroSection';

function App() {
  return (
    // Essa tag <main> vai ser o "corpo" de todo o nosso site
    <main className="bg-stone-100 min-h-screen font-sans">
      
      {/* Aqui estamos chamando a seção que você acabou de criar */}
      <HeroSection />

      {/* No futuro, as próximas seções vão entrar aqui embaixo */}
      
    </main>
  );
}

export default App;