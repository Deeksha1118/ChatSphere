import { Lock } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ChatPlaceHolder = () => {
	return (
		<div className='w-3/4 bg-gray-secondary flex flex-col items-center justify-center py-10'>
			<div className='flex flex-col items-center w-full justify-center mt-20'>
				<Image src={"/logo.png"} alt='Hero' width={350} height={350} className="border-black"/>
				<p className='text-3xl font-extralight pt-10'>Welcome to ChatSphere!!</p>
				<p className='w-1/2 text-center text-gray-primary text-sm text-muted-foreground mt-10'>
					Login, And Stay Connected with your Friends And Family
				</p>

				<Button className='rounded-full mt-10 bg-blue-500 border'>
					Login
				</Button>
			</div>
			<p className='w-1/2 mt-auto text-center text-gray-primary text-xs text-muted-foreground flex items-center justify-center gap-1 py-10'>
				<Lock size={10} /> Your personal messages are end-to-end encrypted
			</p>
		</div>
	);
};
export default ChatPlaceHolder;