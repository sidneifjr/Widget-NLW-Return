import { Widget } from './components/Widget';

// As propriedades do botão e suas tipagens.
interface ButtonProps {
  text?: string; // o símbolo de ? denota algo opcional.
}

function Button(props: ButtonProps) {
  console.log(props.text);

  // Após digitar bg-, apertar CTRL + espaço exibe uma lista de opções do Tailwind.
  return <button className="bg-[#82e657] px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <Widget />
    </div>
  )
}

export default App
