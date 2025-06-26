import {Dispatch, SetStateAction} from "react";

type RegisterProps = {
	setRegistering?: Dispatch<SetStateAction<boolean>>
}


export default function Register({setRegistering}: RegisterProps) {
	return <div className={"p-4"} onClick={() => setRegistering?.(false)}>register</div>

}

