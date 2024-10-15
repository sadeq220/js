"use client"
import Meteors from "@/components/ui/meteors";
import HyperText from "@/components/ui/hyper-text";
export default function Home({name}:{name:string}) {

    return (
        <>
            <div
                className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Meteors number={30}/>
                <HyperText text={name} className='text-3xl font-black text-green-600'/>
            </div>
        </>
    );
}
