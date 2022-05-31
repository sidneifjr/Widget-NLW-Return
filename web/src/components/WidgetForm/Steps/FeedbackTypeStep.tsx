import { FeedbackType, feedbackTypes } from "../";
import { CloseButton } from "../../CloseButton";

/* Este componente recebe uma função "FeedbackTypeStepProps" como propriedade; ela recebe o tipo do feedback (que é FeedbackType) e ela não possui retorno.
Portanto, usa-se o void após a arrow function. */
interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep(props: FeedbackTypeStepProps){
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {
          Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                key={key}
                className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => props.onFeedbackTypeChanged(key as FeedbackType)} // é necessário usar arrow function; senão você passa a execução de uma função, mas não seu valor retornado, causando um erro.
                type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          })
        }
      </div>
    </>
  )
}