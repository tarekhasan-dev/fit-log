"use client";

import Link from "next/link";


import { useEffect, useState } from "react";


export default function MyPlanPage() {
    

    const [exercises, setExercises] = useState(0)
    

    const [minutes, setMinutes] = useState(0);


    const [calories, setCalories] = useState(0);
    

    const [activeTab, setActiveTab] = useState("plan");

            
    
    const [planWorkouts, setPlanWorkouts] = useState<any[]>([]);

    const [savedWorkouts, setSavedWorkouts] = useState<any[]>([]);








    useEffect(() => {



        function updateMetrics() {



            const workoutPlan = JSON.parse( localStorage.getItem("workoutPlan") || "[]" );

            const saved = JSON.parse(localStorage.getItem("savedWorkouts") || "[]");
            

            setPlanWorkouts(workoutPlan);

            setSavedWorkouts(saved);


            setExercises(workoutPlan.length);





            const totalMinutes = workoutPlan.reduce(  (total: number, workout: any) => {   return total + Number(workout.duration);  },

                0

            );



            setMinutes(totalMinutes);


            const totalCalories = workoutPlan.reduce(

                           (total: number, workout: any) => {

                     return total + Number(workout.caloriesBurned);

                },

                0
            );







                         setCalories(totalCalories);

        }

             updateMetrics();

        window.addEventListener("workoutUpdated", updateMetrics);

        return () => {

            window.removeEventListener("workoutUpdated", updateMetrics);
        };
        



    }, []);
    



    function handleRemove(id: number) {

        const currentPlan = JSON.parse(

            localStorage.getItem("workoutPlan") || "[]"

        );

                    const updatedPlan = currentPlan.filter((workout: any) => workout.id !== id);

        localStorage.setItem("workoutPlan", JSON.stringify(updatedPlan));

        window.dispatchEvent(new Event("workoutUpdated"));

    }


    function handleRemoveSaved(id: number) {

        const currentSaved = JSON.parse( localStorage.getItem("savedWorkouts") || "[]" );

        const updatedSaved = currentSaved.filter((workout: any) => workout.id !== id);
        
        

        localStorage.setItem( "savedWorkouts",   JSON.stringify(updatedSaved)  );

        window.dispatchEvent(new Event("workoutUpdated"));

  }


    return (

        <main className="min-h-screen bg-black text-white">




            <section className="max-w-7xl mx-auto px-6 py-12">

                {/* heading */}

                <h1 className="text-4xl font-bold">

                    MY PLAN

                </h1>


                {/* subtitle */}

                <p className="mt-3 text-gray-400">

                    Cap of five lifts for today. Finish them, then load more.

                </p>


                {/* metrics part */}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">




                    {/* exercises */}



                    <div className=" border border-[#92A9E1] bg-[#92A9E1] text-[#292929] rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(146,169,225,0.35)] cursor-pointer">

                        <p className="text-xl font-bold text-[#292929] uppercase">




                            Exercises

                        </p>

                        <h2 className="text-5xl font-black mt-3 text-[#943434]">


                            

                            {exercises}

                        </h2>

                    </div>


                    {/* minutes */}




                    <div className=" border border-[#92A9E1] bg-[#92A9E1] text-[#292929] rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(146,169,225,0.35)] cursor-pointer">

                        <p className="text-xl font-bold text-[#292929] uppercase">

                            Minutes

                        </p>



                        <h2 className="text-5xl font-black mt-3 text-[#292929]">

                            {minutes}




                        </h2>

                    </div>


                    {/* Calories */}




                    <div className="
                    

                            border border-[#92A9E1]

                            bg-[#92A9E1]
                            text-[#292929]


                            rounded-xl p-6
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-2
                            hover:scale-[1.02]


                            hover:shadow-[0_12px_35px_rgba(146,169,225,0.35)]
                            cursor-pointer" >
                        


                                     <p className="text-xl font-bold text-[#292929] uppercase">

                            Calories

                        </p>

                        <h2 className="text-5xl font-black mt-3 text-[#292929]">




                            {calories}

                        </h2>

                    </div>




                </div>


                <div className="mt-12 border-b border-gray-800">

                    <div className="flex items-center gap-8">


                        
                        <button onClick={() => setActiveTab("plan")} className={`pb-4 font-bold text-lg cursor-pointer transition-all duration-300 ${activeTab === "plan" ? "text-[#92A9E1] border-b-2 border-[#92A9E1]" : "text-gray-500 hover:text-white"}
                        
                        
                        `}  >

                            Today's Plan

                        </button>



                        <button onClick={() => setActiveTab("saved")} className={`pb-4 font-bold text-lg cursor-pointer ${activeTab === "saved" ? "text-[#92A9E1] border-b-2 border-[#92A9E1]" : "text-gray-500 hover:text-white"}`}>

                            Saved

                        </button>

                    </div>

                </div>

                

                <div className="mt-8">




                               {activeTab === "plan" && (

                                        planWorkouts.length === 0 ? (
                                            

                            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#8CB9D2] bg-[#223344] px-6 py-8 text-center">
                                


                                <h2 className="text-xl font-bold  text-white">
                                    

                                     Nothing Here Yet
                                    

                                </h2>


                                <img src="/download.png" alt="nothing-workout-box"  className=" mt-5 h-56     w-56   object-contain"/>
                                 

                                <p className="mt-3 text-sm text-[#D5EFFE]">
                                    
                                    Great workouts deserve a place to come back to.
                                    
                                </p>

                                <a href="/workouts" className="mt-5 rounded-full border border-[#9FCFE5] bg-[#344B61] px-6 py-2 text-sm font-semibold text-white hover:bg-[#45627D]">
                                    

                                    Explore Workouts
                                    

                                </a>
                                

                            </div>
                            

                        ) :
                            
                            (

                                
                            <div className="space-y-4">

                                    {planWorkouts.map((workout: any) => (
                                    
                                        
                                          <div key={workout.id} className=" flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#212842] p-4">


                                            <div>
                                                



                                            <h2 className="font-bold">

                                                {workout.name}

                                            </h2>

                                            <p className="mt-1 text-sm text-gray-300">

                                                {workout.duration} min ·{workout.caloriesBurned} kcal

                                            </p>

                                            </div>
                                            




                                        <button type="button" onClick={() => handleRemove(workout.id)} aria-label={`Remove ${workout.name}`} className="shrink-0 rounded-lg border border-gray-400 px-3 py-1 font-bold hover:bg-white/10">

                                            ✕

                                            </button>
                                            





                                        </div>
                                        



                                ))}

                            </div>

                        )

                    )}


                    {activeTab === "saved" && (

                        savedWorkouts.length === 0 ? (


        
                            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#8CB9D2] bg-[#223344] px-6 py-8 text-center">
                                



                                <h2 className="text-xl font-bold text-white">

                                    Nothing Here Yet

                                </h2>


                                
                                <img src="/download.png" alt="nothing-workout-box"  className=" mt-5 h-56     w-56   object-contain"/>



                                <p className="mt-3 text-sm text-[#D5EFFE]">

                                    Great workouts deserve a place to come back to.




                                </p>

                                <a href="/workouts" className="mt-5 rounded-full border border-[#9FCFE5] bg-[#344B61] px-6 py-2 text-sm font-semibold text-white hover:bg-[#45627D]">

                                    Explore Workouts

                                </a>

                            </div>

                        ) : (

                                <div className="space-y-4">
                                    





                                    {savedWorkouts.map((workout: any) => (
                                    

                                        <div key={workout.id} className="flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-[#212842] p-4">
                                            


                                            <div>
                                                

                                                <h2 className="font-bold">
                                                    

                                                {workout.name}\

                                            </h2>

                                            <p className="mt-1 text-sm text-gray-300">

                                                {workout.duration}min . {workout.caloriesBurned} kcal

                                            </p>

                                        </div>

                                            <button type="button" onClick={() => handleRemoveSaved(workout.id)} className="shrink-0 rounded-lg border border-gray-400 px-3 py-1 font-bold hover:bg-white/10">
                                                



                                            ✕

                                        </button>

                                    </div>

                                ))}

                            </div>

                        )

                    )}

                </div>

            </section>

        </main>

    );

}