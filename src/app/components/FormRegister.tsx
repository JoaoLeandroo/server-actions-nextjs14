"use client"

import { useFormState } from "react-dom";
import ButtonLogin from "./ButtonLogin";
import { CreatePerson } from "../../../lib/action";

const FormRegister = () => {

    const [state, formAction] = useFormState(CreatePerson, null);

    return ( 
        <form action={formAction} className="max-w-[500px] w-full bg-zinc-300 flex flex-col p-5 rounded shadow-lg gap-y-3">
            <div className="w-full flex items-center justify-center p-5">
                <h3>Register User</h3>
            </div>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input className="rounded h-11 px-2" type="text" name="name" id="name" placeholder="Insira um nome" />
          <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
            </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Seu email</label>
          <input className="rounded h-11 px-2" type="email" name="email" id="email" placeholder="emailexample@example.com" />
          <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.email}</p>
            </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Senha</label>
          <input className="rounded h-11 px-2" type="password" name="password" id="password" placeholder="Insira uma senha"/>
          <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">{state?.Error?.password}</p>
            </div>
        </div>
        <div>
          <ButtonLogin text="Registrar"/>
        </div>
      </form>
     );
}
 
export default FormRegister;