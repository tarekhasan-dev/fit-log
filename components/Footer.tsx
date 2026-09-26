

import { Dumbbell } from "lucide-react";

import Link from "next/link";

export default function Footer() {
    
    return (

        <footer className=" mt-auto text-white ">

            <div className= " mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center  sm:justify-between  " >


                <Link rel="" href="/"  className="inline-flex item-center  gap-2 font-bold">
                

                <Dumbbell size={18} className="text-[#D9FF00]" />

                FITLOG
                
                </Link>

                <p className="text-sm text-gray-500  sm:text-right ">

                    © 2026 FitLog — Workout Library. Train hard, log honest.
                    
                </p>

            </div>
            
        </footer>
        
    )
}