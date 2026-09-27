

import WorkoutSection from "./WorkoutSection";




export default function Library() {
    


    

    return (


        <section id="library" className="library-parent">
        
            <div className="container">


                {/* heading start */}


                <div className="mb-10 pt-6 ">

                    <p className=" text-3xl font-black uppercase leading-tight text-white sm:text-3xl">

                       THE LIFT <span>LAB </span> 

                    </p>

                    <p className="mt-2 max-w-2xl text-sm font-normal normal-case leading-6 text-gray-400 sm:text-base">

                        Every muscle has a mission. Pick a lift and get to work.

                    </p>

                    </div>

                  

                {/* Workout card start  */}



                <div className="library-card-container">

                    <WorkoutSection />
                    
                    

                </div>
                

            </div>
            

        </section>
    )
}