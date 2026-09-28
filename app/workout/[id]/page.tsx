
import { notFound } from "next/navigation";

import WorkoutActions from "../../../components/WorkoutActions";


type WorkoutDetailsPageProps = {

    params: Promise<{

        id: string;
    }>;
};


export default async function WorkoutDetailsPage({

    params,


}:
    
 WorkoutDetailsPageProps) {


      
    const { id } = await params;

    // `const response = await fetch( "https://api.abcz.workers.dev/api/fitlog" );`
    
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog");


    const data = await response.json();


    const workout = data.find((item: any) => item.id === Number(id));
    
        
    
    if (!workout) {
            
        // return (

        //  <main className="min-h-screen bg-black text-white flex items-center justify-center">
            
        //         <h1 className="text-3xl font-bold">

        //             Workout not found

        //         </h1>

        //     </main>

        // );

        notFound()

    }




    return (

        <main className="min-h-screen bg-black text-white">


            <section className="max-w-7xl mx-auto px-6 py-12">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 ">

                        {/* left side - image */}

                    
                    <div>

                        <img

                            src={workout.image}

                            alt={workout.name}

                            className="w-full h-[450px] md:h-[640px] object-cover rounded-2xl"



                        />


                        {/* <div className="mt-[15px]  flex w-full  flex-col 
                            
                        
                                gap-6   llg:w-[calc(50%-1.25rem)]   [&>div]:!flex [&>div]:!w-full [&>div]:!flex-col [&>div]:!gap-3 [&_button]: !flex [&_button]: !h-10 [&_button]:!w-full [&_button]:!items-center [&_button]:!justify-center  [&_button]:!whitespace-nowrap ]
                                
                            
                            "> 
                            */}
                        



                            {/* mobile version updated  */}

                        <div className="mt-4 w-full md:mt-12 [&>div]:!mt-0 [&>div]:!flex-col [&_button]:!w-full">
                                

                            <WorkoutActions workout={workout} />
                            



                        </div>
                        
                             

                    </div>


                    
                    {/* right side */}


                    <div>

                                                        
                        {/* right side */}
                        

                        <div>



                            
                        <h1 className="text-4xl sm:text-4x1  lg:text-5x1 font-bold leading-tight tracking-tinght ">

                            {workout.name}

                        </h1>


                        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">

                            {workout.description}

                        </p>
                            

                            
                            <div className=" mt-5 flex flex-wrap gap-5">
                                

                                {workout.muscleGroups?.map((muscle: string, index: number) => (
                                            
                                                <span key={index}  className="w-[78px] h-[30px] shrink-0 flex items-center justify-center rounded-full bg-[#D5EFFE] text-[#1C1C1C] text-sm font-semibold"  >
                                                  
                                        <span className="relative top-[1px]">
                                            

                                            {muscle}
                                            
                                        </span>
                                        
                                    </span>
                                    
                                )
                                    
                                )}
                                
                            </div>

                        </div>
                        
                            


                        {/* workout information box  */}


                        <div className="border border-gray-800   rounded-2xl mt-8  overflow-hidden  rounded-2xl bg-[#212842]  ">


                            <div className=" flex flex-col">

                                {/* equipment box   */}


                                <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">
                                    

                                    <p className="text-sm  uppercase text-white-500   font-bold">
                                        


                                        Equipment
                                        
                                    </p>
                                    
                                    <p className=" text-right font-bold   ">
                                        
                                        {workout.equipment}
                                        
                                    </p>
                                    
                                </div>
                                


                                                                                
                            {/* difficulty box  */}


                               <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">

                                    <p className="text-sm  uppercase text-white-500   font-bold" >

                                        Difficulty

                                    </p>

                                    <p className="font-bold mt-2">

                                        {workout.difficulty}

                                    </p>

                                </div>



                                {/* sets box */}


                                <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">

                                    <p className="text-sm  uppercase text-white-500   font-bold">

                                        Sets

                                    </p>

                                    <p className="font-bold mt-2">

                                        {workout.sets}

                                    </p>

                                </div>



                                {/* repx box  */}


                                <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">

                                    <p className="text-sm  uppercase text-white-500   font-bold">

                                        Reps

                                    </p>

                                    <p className="font-bold mt-2">

                                        {workout.reps}

                                    </p>

                                </div>



                                {/* duration box  */}


                               <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">

                                    <p className="text-sm  uppercase text-white-500   font-bold">

                                        Duration

                                    </p>

                                    <p className="font-bold mt-2">

                                        {workout.duration} min

                                    </p>

                                </div>




                                {/* calories box  */}


                               <div className="flex items-center   justify-between gap-4 border-b  border-gray-800   px-5 py-4">

                                    
                                    <p className="text-sm  uppercase text-white-500   font-bold">

                                        Calories

                                    </p>

                                    <p className="font-bold mt-2">

                                        {workout.caloriesBurned} kcal

                                    </p>

                                </div>




                        {/* rating box  */}


                        <div className="flex items-center   justify-between gap-4  px-5 py-4">

                            

                            <p className="text-sm font-bold upporcase border-gray-800 text-white-400">

                           
                            <span className="text-sm  uppercase text-white-500   font-bold">

                                Rating:

                                </span>
                                
                                
                            </p>

                            <span className="ml-2 font-bold">

                                {workout.rating} ⭐

                                </span>
                                
                                 

                            </div>
                            
                            
                            </div>
                            

                            
                        </div>



                        {/* muscle groups */}


                        <div className="mt-8">


                            


                        </div>



                        {/* instructions */}


                        <div className="mt-10">


                            <h2 className="text-2xl font-bold ">

                                Instructions

                            </h2>


                            <div className="mt-5 space-y-4">


                                {workout.instructions?.map(

                                    (instruction: string, index: number) => (

                                        <div

                                            key={index}

                                            className="flex gap-4"

                                        >


                                            <div className="bg-[#DCE6E6] text-black min-w-8 h-8 rounded-full flex items-center justify-center font-bold">

                                                {index + 1}

                                            </div>


                                            <p className="text-[#d1d5db]-400 leading-7">

                                                {instruction}

                                            </p>


                                        </div>

                                    )

                                )}


                            </div>


                        </div>


                    </div>

                       

                </div>


            </section>


        </main>

    );

}