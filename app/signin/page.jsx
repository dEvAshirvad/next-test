"use client";
import { useRouter } from "next/navigation";

function SignInPage() {
	const router = useRouter();
	async function Redirect() {
		setTimeout(() => {
			router.replace("/");
		}, 3000);
	}
	return (
		<div>
			<button onClick={Redirect}>Redirect Home</button>
		</div>
	);
}

export default SignInPage;
