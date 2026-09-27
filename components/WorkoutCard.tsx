import { Clock, Clock3, Flame, Star } from "lucide-react";



import Image from "next/image";



import Link from "next/link";



export default function WorkoutCard({ workout }: any) {
    
    return (

        //   WorkoutCard start

     <Link href={`/workout/${workout.id}`}>

        <div className="workout-card group bg-[#111111] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:bg-[#1B2630] hover:-translate-y-1 hover:border-[#9FCFE5] hover:shadow-lg hover:shadow-[#9FCFE5]/15">

            {/* workout Image  */}
            

            <div className="workout-img">

                <img src={workout.image}
                    
                    alt={workout.name}
                    
                    width={300}
                        height={200}
                        
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                
                />

            </div>

            

            {/* workout Content  */}


                <div className="workout-content p-5 ">
                    
                    <div className="flex flex-wrap gap-2 ">

                        {workout.muscleGroups?.map((muscle: string) => (
                            
                            <span
                                key={muscle} className="inline-flex min-h-7 items-center justify-center rounded-full bg-[#D5EFFE] px-4 text-xs font-bold uppercase text-black">
                                
                                {muscle}
                                
                            </span>

                        ))}

                    </div>

                    <h3 className="text-xl font-bold mt-4">

                        {workout.name}

                    </h3>


                    <p className="mt-2 text-sm text-gray-400">

                        {workout.equipment}

                    </p>

                
            </div>



            {/* workout start  */}

            <div className=" workout-stats   mx-5 mb-8   mt-2 flex  flex-wrap  items-center  gap-5 border-t border-gray-800   pt-4 text-sm text-gray-300 text-[#C2F800] ">
                
                    {/* clock style add  */}
                    

                    <span className="inline-flex  items-center gap-1 ">

                        <Clock3 size={20} />
                    
                        {workout.duration} min </span>


                    {/* calories style add  */}

                                      
                    <span className="inline-flex  items-center gap-1 ">

                        <Flame size={20}/>
                    
                        {workout.caloriesBurned} kcal </span>
                    

                    {/* rating style add  */}
                    

                    <span className="inline-flex items-center gap-1 ">

                        <Star size={20} />
                        
                        {workout.rating} ⭐ </span>

             </div>

            </div>
            
              </Link>  
    )



}