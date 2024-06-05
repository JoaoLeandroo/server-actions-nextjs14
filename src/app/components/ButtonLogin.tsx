"use client"

import { useFormStatus } from "react-dom";

interface Props {
    text: string
}

const ButtonLogin = ({text}: Props) => {

    const { pending } = useFormStatus()

    return ( 
        <button
            disabled={pending} 
            type="submit" 
            className="w-full bg-neutral-800/60 text-white h-11 rounded mt-2">
            {pending ? <span className="loader"></span> : `${text}`}
        </button> );
}
 
export default ButtonLogin;