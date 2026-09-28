"use client";

import Link from "next/link";


import { useEffect, useState } from "react";

import { Check, Clock3, Flame, Star, X } from "lucide-react";



import toast from "react-hot-toast";


export default function MyPlanPage() {
    

    const [exercises, setExercises] = useState(0)
    

    const [minutes, setMinutes] = useState(0);


    const [calories, setCalories] = useState(0);
    

    const [activeTab, setActiveTab] = useState("plan");

    const [sortBy, setSortBy] = useState("duration");        
    
    const [planWorkouts, setPlanWorkouts] = useState<any[]>([]);

    const [savedWorkouts, setSavedWorkouts] = useState<any[]>([]);

        const [loading, setLoading] = useState(true);



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
           
              setLoading(false);

        }

             updateMetrics();

        window.addEventListener("workoutUpdated", updateMetrics);

        return () => {

            window.removeEventListener("workoutUpdated", updateMetrics);
        };
        



    }, []);
    



    function handleRemove(id: number) {

        const currentPlan = JSON.parse(localStorage.getItem("workoutPlan") || "[]"  );

                    const updatedPlan = currentPlan.filter((workout: any) => workout.id !== id);

        localStorage.setItem("workoutPlan", JSON.stringify(updatedPlan));

        window.dispatchEvent(new Event("workoutUpdated"));

        toast.success("Workout removed from today's plan");

    }


 
 
 
    function handleRemoveSaved(id: number) {

        const currentSaved = JSON.parse( localStorage.getItem("savedWorkouts") || "[]" );

        const updatedSaved = currentSaved.filter((workout: any) => workout.id !== id);
        
        

        localStorage.setItem( "savedWorkouts",   JSON.stringify(updatedSaved)  );

        window.dispatchEvent(new Event("workoutUpdated"));


           toast.success("Workout removed from saved");

    }
    



    function handleMarkAsDone(id: number) {

        const currentPlan = JSON.parse(localStorage.getItem("workoutPlan") || "[]"); 

        const updatedPlan = currentPlan.map((workout: any) => workout.id === id ? { ...workout, done: !workout.done } : workout); 
        
        localStorage.setItem("workoutPlan", JSON.stringify(updatedPlan)); 
         
        window.dispatchEvent(new Event("workoutUpdated"));

        toast.success("Workout Status update");  

    }



  
  
    function sortWorkouts(workouts: any[]) {
        
         return[...workouts].sort((a, b) => {
            
            if (sortBy === "rating") {
                

                return Number(b.rating) - Number(a.rating);

             }


             if (sortBy === "calories")
                 
             {
                 return Number(a.coloriesBurned) - Number(b.caloriesBurned); 

             }
             

             

             return Number(a.duration) - Number(b.duration);
             

         });
        
        
    }

    if (loading) {
         
        return (
              
            <main className="flex min-h-screen items-center justify-center bg-black text-white ">
                
                <p>Loading Workouts....</p>

            </main>
        );
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



                    <div className=" border border-[#92A9E1] bg-[#92A9E1] text-[#292929]  rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(146,169,225,0.35)] cursor-pointer">

                        <p className="text-xl font-bold text-[#292929] uppercase">




                            Exercises

                        </p>

                        <h2 className="text-5xl font-black mt-3 text-[#943434]">


                            

                            {exercises}

                        </h2>

                    </div>


                    {/* minutes */}




                    <div className=" border border-[#92A9E1] bg-[#92A9E1] text-[#292929] rounded-xl p-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(146,169,225,0.35)] cursor-pointer " >
                        

                        <p className="text-xl font-bold text-[#292929] uppercase">




                            Minutes

                        </p>



                        <h2 className="text-5xl font-black mt-3 text-[#292929]">


                            

                            {minutes}




                        </h2>

                    </div>


                    {/* calories */}




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

                    <div className="flex  flex-wrap items-center  justify-between gap-4">

                        <div className="flex items-center gap-8">


                        
                        <button onClick={() => setActiveTab("plan")} className= {`pb-4 font-bold text-lg cursor-pointer transition-all duration-300 ${activeTab === "plan" ? "text-[#92A9E1] border-b-2 border-[#92A9E1]" : "text-gray-500 hover:text-white" }
                        
                        
                        `}  >

                            Today's Plan

                        </button>



                        <button onClick= {()  => setActiveTab("saved")} className={`pb-4 font-bold text-lg cursor-pointer ${activeTab === "saved" ? "text-[#92A9E1] border-b-2 border-[#92A9E1]" : "text-gray-500 hover:text-white"}` }>

                            Saved

                            </button>


                            
                        </div>
                        

                        <label className="mb-3 flex items-center gap-3 text-sm text-gray-400  ">

                            
                            Sort By 
                       

                        <select name="shortBy" id=""  onChange={(event) => setSortBy(event.target.value)} className="rounded-lg border border-gray-800 bg-[#171B24] px-3 py-2 text-white ">
                            
                                <option value="duration">Duration </option>
                                

                                <option value="Calories"> Calories </option>
                                
                            <option value="rating">Rating </option>

                            </select>
                            
                        </label>
                        

                    </div>

                </div>

                

                <div className="mt-8">




                               {activeTab === "plan" && (

                                       planWorkouts.length === 0 ? (
                                            

                                            <div className= " flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#8CB9D2] bg-[#223344] px-6 py-8 text-center " >


                                <h2 className="text-xl font-bold  text-white">
                                    

                                     Nothing Here Yet
                                    

                                </h2>


                                <img src="/download.png" alt="nothing-workout-box"  className=" mt-5 h-56     w-56   object-contain"/>
                                 

                                <p className="mt-3 text-sm text-[#D5EFFE]">
                                    
                                    Great workouts deserve a place to come back to.
                                     
                                </p>



                                <Link href="/" className=" mt-5 rounded-full border border-[#9FCFE5] bg-[#344B61] px-6 py-2 text-sm font-semibold text-white hover:bg-[#45627D]" >
                                
                                
                                    Explore Workouts
                                    
                                
                                </Link>
                                    

                                    
                                    


                                

                            </div>
                            

                        ) :
                            
                            (

                                
                            <div className="space-y-4">

                                    {sortWorkouts(planWorkouts).map((workout: any) => (
                                       
                                      
                                         <div key={workout.id} className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#212842] p-4 xl:flex-row xl:items-center xl:justify-between">



                                             <img src={workout.image} alt= {workout.name} className="h-44 w-full rounded-lg object-cover  xl:h-24   xl:w-28   xl:shrink-0 " />







                                    <div className="min-w-0 w-full xl:flex-1">
                                                
                                                
                                             <h2 className="font-bold">

                                                {workout.name}

                                            </h2>



                                            <p className="mt-1 text-sm text-gray-300">

                                                {workout.equipment}

                                                </p>
                                                

                                                <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-300" >

                                                    <span className="inline-flex items-center gap-1 " >  <Clock3 size={16} />
                                                    
                                                        {workout.duration} min 

                                                    </span>



                                                    <span className="inline-flex items-center gap-1 "> <Flame size={16} />
                                                    
                                                        {workout.caloriesBurned} kcal
                                                    
                                                    </span>



                                                    <span className="inline-flex items-center gap-1 "> <Star size={16} />
                                                    
                                                        {workout.rating} rating
                                                    
                                                    </span>


                                                    
                                                </div>
                                                

                                            {/* <p className="mt-3 text-sm text-gray-300">

                                                {workout.duration} min ·{workout.caloriesBurned} kcal

                                                </p> */}


                                            </div>
                                            
                                            <div className="flex w-full flex-wrap items-center gap-2 xl:w-auto">



                                                
                                                <Link href={`/workout/${workout.id}`} className=" inline-flex  h-10 shrink-0 items-center justify-center rounded-full bg-[#223344] px-3 text-sm font-semibold text-white transition-colors  hover:bg-[#35617A] border border-dotted border-[#8CB9D2] sm:px-5 whitespace-nowrap ">
                                                    
                                                    View Details 



                                                    
                                                </Link>


                                                <button type="button" onClick={() => handleMarkAsDone(workout.id)} aria-pressed={Boolean(workout.done)}
                                                    


                                                    
                                                              className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#D5DCE0] px-5 text-sm font-bold text-black ">
                                                    
                                                                  <Check size={16} /> 

                                                              {workout.done ? "Done" : "Mark as Done"}

                                                    
                                                
                                                </button>

                                           
                                                

                                            <button type="button" onClick={() => handleRemove(workout.id)} aria-label={`Remove ${workout.name}`} className=" flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#223344]  text-white transition-colors hover:bg-[#35617A] border border-none border-[#8CB9D2] ">


                                                      
                                                
                                                <X size={18} />
                                                

                                                

                                            </button>

                                           
                                               </div>
                                            

                                        </div>
                                        



                                ))}

                            </div>

                        )

                    )}
            


                    {activeTab === "saved" && (

                        savedWorkouts.length === 0 ? (


        
                            <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#8CB9D2] bg-[#223344] px-6 py-8 text-center">
                                



                                <h2 className="text-xl font-bold text-white">

                                     NOTHING HERE YET

                                </h2>


                                
                                <img src="/download.png" alt="nothing-workout-box"  className=" mt-5 h-56     w-56   object-contain"/>



                                <p className="mt-3 text-sm text-[#D5EFFE]">

                                     Browse the library and add a lift to get today moving.




                                </p>

                            <Link href="/" className="mt-5 rounded-full border   border-[#9FCFE5] bg-[#344B61] px-6 py-2 text-sm font-semibold text-white hover:bg-[#45627D]"  > 
                                
                                                
                                       Go to workouts
                                
                            
                                </Link>


                            </div>

                        ) : (

                                <div className="space-y-4">
                                    
                          {sortWorkouts(savedWorkouts).map((workout: any) => (
                                    

                                      <div key= {workout.id}  className =" flex flex-col gap-4 rounded-xl border  border-gray-800 bg-[#212842] p-4 xl:flex-row xl:items-center ">
                                  

                                  <img src={workout.image}  alt={workout.name}  className=" h-44 w-full rounded-lg object-cover xl:h-24 xl:w-28 xl:shrink-0 " />

                                            


                                            <div className="min-w-0 w-full xl:flex-1 ">
                                                

                                                <h2 className="font-bold">
                                                    

                                                {workout.name}

                                            </h2>

                                            <p className="mt-1 text-sm text-gray-300">

                                                {workout.equipment}

                                      </p>


                                      {/* clock  */}

                                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-300 ">
                                          
                                          <span className="inline-flex items-center gap-1 ">
                                              
                                              <Clock3 size={16} />
                                              {workout.duration} min 
                                              
                                          </span>

                                          {/* flame  */}


                                          <span className="inline-flex items-center gap-1 ">
                                              
                                              <Flame size={16} />
                                              {workout.caloriesBurned} kcal 
                                              
                                              
                                          </span>

                                          {/* rating  */}
                                          
                                          <span className="inline-flex items-center gap-1 ">
                                              
                                              <Star size={16} />
                                              {workout.rating}  
                                              
                                              
                                          </span>

                                      </div>

                                  </div>

                                  <div className="flex w-full flex-wrap items-center gap-2 xl:w-auto ">

                                       <Link href={`/workout/${workout.id}` } className= " inline-flex h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-[#8CB9D2] bg-[#223344] px-3 text-sm font-semibold text-white hover:bg-[#35617A] sm:px-5">
                                      
                                          
                                          View Details 
                                      
                                      </Link>
                                      
                                  
                                  <button type="button" onClick={() => handleRemoveSaved(workout.id)}  aria-label={`Remove Saved ${workout.name }`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#223344] text-white hover:bg-[#35617A]">

                                      ✕
                                      

                                  </button>
                                  
                                      
                                      </div>


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