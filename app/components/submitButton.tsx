
import { Send } from "lucide-react";
// @ts-expect-error
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none active:scale-105 focus:scale-110 hover:scale-110 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-60"
      disabled={pending}
    >
      {pending ? (
     <div className="spinner absolute -top-[87px]">  
     <div  className="bounce1"></div>
     <div  className="bounce2"></div>
     <div  className="bounce3"></div>
   </div>
      ) : ( 
        <>
          Submit {" "}
          <Send
            size={"12px"}
            className=" opacity-70 transition-all
  group-hover:translate-x-1
  group-hover:-translate-y-1
  "
          />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitButton;
