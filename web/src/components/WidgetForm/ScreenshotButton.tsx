import { useState } from "react";

import { Camera, Trash } from "phosphor-react";
import { Loading } from "../Loading";
import html2canvas from "html2canvas";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps){
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot(){
    setIsTakingScreenshot(true);

    // O retorno do querySelector poderia ser um elemento ou nulo, fazendo o TypeScript disparar um erro; A exclamação é para dizer: esse valor nunca vai ser nulo, confia no pai!
    const canvas = await html2canvas(document.querySelector('html')!); // faz um print da tela.
    const base64Image = canvas.toDataURL('image/png'); // então, a converte para uma imagem .PNG no formato base64 (um formato de texto que representa uma imagem).

    // Chamando a função definida no componente pai, para enviarmos a imagem que criamos.
    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  }

  // Se a imagem já existir, ele irá retornar a mensagem com o elemento HTML definido, ao invés do button com o ícone da câmera.
  if(screenshot){
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        // Um par de chaves para indicar que estou incluindo código JavaScript dentro do HTML e outro par para indicar que é um objeto.
        style={{
          backgroundImage: `url(${screenshot})`,
          // Os estilos abaixo são para facilitar a visualização do widget.
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {/* Se a foto está sendo tirada, exibir o ícone de loading. */}
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}