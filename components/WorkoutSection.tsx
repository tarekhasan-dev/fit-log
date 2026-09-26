import WorkoutCard from "./WorkoutCard";

export default async function WorkoutSection() {

    console.log("WorkoutSection Running");

    // const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    
    const response = await fetch("https://api.api-store.workers.dev/api/fitlog");

    if (!response.ok) {
        throw new Error(`Workout API error: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");

    if (!contentType?.includes("application/json")) {
        throw new Error(`Workout API returned ${contentType || "an unknown response"} instead of JSON`);
    }

    const data = await response.json();

    console.log(data.length);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {data.map((workout: any) => (

                <WorkoutCard
                    key={workout.id}
                    workout={workout}
                />

            ))}

        </div>
    )
}