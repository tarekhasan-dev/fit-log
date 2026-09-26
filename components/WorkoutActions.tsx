"use client";

import { CalendarPlus, Bookmark } from "lucide-react";
import toast from "react-hot-toast";


type WorkoutActionsProps = {

    workout: any;

};


export default function WorkoutActions({

    workout,

}: WorkoutActionsProps) {


    // Add to today's plan

    function handleAddToPlan() {


          console.log("ADD BUTTON CLICKED");


        const oldPlan = localStorage.getItem("workoutPlan");

        let plan = [];


        if (oldPlan) {

            plan = JSON.parse(oldPlan);

        }


        const alreadyAdded = plan.find(

            (item: any) => item.id === workout.id

        );


        if (alreadyAdded)
        
        {

            toast.error("Workout already added");

            return;

        }


        plan.push(workout);


        localStorage.setItem ( 

            "workoutPlan",

            JSON.stringify(plan)

        );

         
        window.dispatchEvent(new Event("workoutUpdated")); 


        toast.success("Workout added to plan");

    }



    // Save for later

    function handleSaveForLater() {

 
              const oldSaved = localStorage.getItem("savedWorkouts");

        let saved = [];


           if (oldSaved) {

            saved = JSON.parse(oldSaved);

        }


        const alreadySaved = saved.find(

               (item: any) => item.id === workout.id

        );


        if (alreadySaved) {
 
             toast.error("Workout already saved");

            return; 

        }


          saved.push(workout);


        localStorage.setItem(

            "savedWorkouts",  

               JSON.stringify(saved)

        );


        window.dispatchEvent(new Event("workoutUpdated")); 


        toast.success("Workout saved for later");

    }



    return (

        <div className="mt-10 flex items-center gap-2">


            {/* Add to plan button */}

            <button

                 onClick={  handleAddToPlan}

                className="

                    flex items-center justify-center gap-2

                    bg-[#D9FF00] text-black font-semibold

                    px-7 py-3 rounded-xl

                    transition-all duration-300 ease-in-out

                    hover:bg-[#C8F000]

                    hover:shadow-[0_0_20px_rgba(217,255,0,0.35)]

                    hover:-translate-y-1

                    active:translate-y-0 active:scale-95

                    cursor-pointer

                "

            >

                <CalendarPlus size={18} />

                <span>Add to today's plan</span>

            </button>



            {/* Save for later button */}

            <button

                onClick={handleSaveForLater}

                className="

                    flex items-center justify-center gap-2

                    border-1 border-[#]

                    text-white font-semibold

                    px-7 py-3 rounded-xl

                    transition-all duration-300 ease-in-out

                    hover:bg-[#15191f]

                    hover:-translate-y-1

                    active:translate-y-0 active:scale-95

                    cursor-pointer

                "

            >

                <Bookmark size={18} />

                <span>Save for later</span>

            </button>


        </div>

    );

}