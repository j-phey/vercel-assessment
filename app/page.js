import HeroSection from "./components/HeroSection"
import Image from "next/image"
import Navbar from "./components/Navbar"
import ExerciseSection from "./components/ExerciseSection"
import ProjectsSection from "./components/ProjectsSection"

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            {/* <Navbar /> */}
            <div className="container mt-24 mx-auto px-4 py-4">
                <HeroSection />
                <ExerciseSection />
                {/* <ProjectsSection /> */}
            </div>
        </main>
    )
}