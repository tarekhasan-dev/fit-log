import Hero from "@/components/Hero";

const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

import Library from "@/components/Library";




export default function Home() {

    return (

        <main className="min-h-screen bg-black text-white ">
            

            <div className="mx-auto w-full max-w-7xl px-6 ">


           

            <Hero />

                <Library />
                
                 </div>

        </main>

    );

}