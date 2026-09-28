"use client";

    import { useEffect, useState } from "react";

import Link from "next/link";


import { Dumbbell } from "lucide-react";

import { usePathname } from "next/navigation";



export default function Navbar() {


      const pathname = usePathname();


       const [planCount, setPlanCount] = useState(0);

        const [savedCount, setSavedCount] = useState(0);    

          const [menuOpen, setMenuOpen] = useState(false);



    useEffect(() => {

        function updateCounts() {
                    


            const workoutPlan = JSON.parse( localStorage.getItem("workoutPlan" ) || "[]"  ) ;
        
            const savedWorkouts = JSON.parse( localStorage.getItem("savedWorkouts" ) || "[]"  ) ;

            setPlanCount(workoutPlan.length);


            setSavedCount(savedWorkouts.length);



        }







           updateCounts();

              window.addEventListener("workoutUpdated", updateCounts);

        return () => { window.removeEventListener("workoutUpdated", updateCounts);};   }, []);

    
    
        
    return (
             



                 <nav className="bg-black">

            <div className="max-w-7xl mx-auto px-6 py-5">

                <div className="flex items-center justify-between md:hidden">




                    <Link href="/" className=" inline-flex items-center gap-2 font-bold ">
                        
                        <Dumbbell size={18} className="text-red-500"/>
                        
                        FITLOG


                    </Link>



               <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}   className="text-3xl text-white" >
                        
                            
                                 {menuOpen ? "×" : "☰"}
                        

                    </button>



                </div>






  {menuOpen && (

                  
       <div className="mt-5 flex flex-col gap-2 overflow-x-auto border-t border-gray-800 pt-5 md:hidden">
                        


                        <Link href="/" onClick={() => setMenuOpen(false)} className={ pathname === "/" ?  " font-bold text-[#92A9E1] px-1 py-0" : "text-white " }  >
                            

                            Workout


                        </Link>



                        
                        <Link href="/my-plan" className=" self-start border border-white-300 test-white-300   px-4 py-2 rounded-full font-semibold  ">
                            

                            My Plan

                        </Link>




                       <Link href="/my-plan" className=" self-start bg-red-500 text-white px-6 py-2 rounded-full font-semibold text-1xl  ">
                            

                           Plan {planCount}
                    
                        </Link>
                        



                            <Link href="/my-plan" className=" self-start border border-white-300 test-white-300   px-4 py-2 rounded-full font-semibold " >


                            Saved {savedCount}


                        </Link>

                    </div>

                )
                
                
                }

                <div className="hidden items-center justify-between md:flex">

                     

                    <Link href="/" className = "inline-flex w-full items-center  justify-center  gap-2 text-3xl  font-bold text-white md:w-auto md:justify-start ">
                        
                        <Dumbbell size={28} strokeWidth="2.5" className="text-red-500" />
                        
                        FITLOG

                        
                    </Link>

               

                    <div className="flex items-center gap-8">
                        


                        <Link href="/" className= {pathname === "/" ? "font-bold   text-[#92A9E1]" :"text-white hover:text-lime-400   transition" } >
                            
                            Workout
                            
                        </Link>
                        
                        
                                 <Link href="/my-plan" className={pathname === "/my-plan" ?   "font-bold text-[#92A9E1]" :"text-white hover:text-lime-400  transition" }>
                           
                            My Plan
        
                        </Link>



                    </div>
                    

                
                
                
                    <div className="flex items-center gap-4">

                        <Link href="/my-plan" className="bg-red-500 text-white text-1xl px-7 py-2 rounded-full font-semibold" >
                            

                            Plan {planCount}

                        </Link>

                        <Link href="/my-plan" className="border border-white-300 text-white-300 px-4 py-2 rounded-full font-semibold" >
                            

                            Saved {savedCount}


                        </Link>

                    </div>




                </div>





            </div>



        </nav>


        
        

    );



    
}