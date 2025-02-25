import LeftPanel from "@/components/home/left-panel";
import RightPanel from "@/components/home/right-panel";

export default function Home() {

	return (
		<div className="w-full h-full flex justify-center bg-left-panel">
      <div className='flex w-full h-full max-w-[1700px]'>
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
	);
}