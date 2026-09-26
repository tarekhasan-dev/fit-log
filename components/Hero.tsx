export default function Hero() {

  return (

    <section className="mb-12 mt-16 rounded-2xl border border-[#252A33] bg-[#15171C] lg:mt-15">


      <div className="grid px-6 py-10 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-12 lg:py-9">


       {/* hero content start  */}


        <div >
          

          <p className="text-xs font-bold uppercase tracking-wider text-[#D5EFFE]">

            WORKOUT LIBRARY
            
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-5xl">

            SHOW UP. LIFT <span className="text-red-500">STRONG</span>. <br />
            
            LOG THE PROGRESS.
            
          </h1>


          <p className="mt-5 max-w-lg leading-7 text-gray-300 ">

            Your goals deserve more than guesswork. Choose a workout, make a plan,
            and take the next step toward stronger days.
          
          </p>

          



              {/* button section  */}

          <a href="#library" className="mt-7 inline-flex rounded-lg bg-[#C2F800] px-6 py-3 font-bold text-black transition hover:bg-[#B8E4FA]">


            BROWSE WORKOUTS


          </a>
          
        </div>





        {/* hero image  */}

        <div className="relative  mt-8 h-[280px] overflow-hidden sm:h-[320] lg:mt-0 lg:h-[340px]" > 


          
          <img src="/illustration.png" alt="exercising-img" className="absolute inset-0 h-full w-full -translate-x-20 object-contain object-center lg:translate-x-0 lg:object-right" />

         </div>
        

      </div>

    </section>
  )
}