import logo from './assets/in-orbit-logo.svg';
import letsStart from './assets/rocket-launch-illustration.svg';


export function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="Logo minhas metas" />
      <img src={letsStart} alt="imagem minhas metas" />
    </div>
  );
}

