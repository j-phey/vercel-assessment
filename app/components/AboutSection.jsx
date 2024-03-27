'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>HTML/CSS</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Diploma of IT, Software Engineering @ Coder Academy</li>
                <li>Bachelor of Business Information Systems @ Monash University</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Slack Certified Admin</li>
                <li>Cybersecurity Certification, UC Santa Barbara</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
    <section className='text-white' id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/about-image.png" width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Natus ut autem est architecto tenetur ullam provident. 
                    Quidem impedit eos atque architecto, ab voluptatem tenetur assumenda porro ratione odio! 
                    Reiciendis, id.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
                </div>
                {/* Grab the content from TAB_DATA */}
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection