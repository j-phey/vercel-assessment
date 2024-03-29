import HeroSection from "./components/HeroSection"
import ExerciseSection from "./components/ExerciseSection"


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">

            <div className="container mt-24 mx-auto px-4 py-4">
                <HeroSection />
                <ExerciseSection />

            </div>
        </main>
    )
}