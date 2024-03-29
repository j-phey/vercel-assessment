'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import Link from 'next/link'

const TAB_DATA = [
    {
        title: "Exercise 1",
        id: "exercise1",
        content: ( 
            <>
            <p className='italic'>From <Link href='https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8' className=' text-pink-400' target="_blank">this</Link> list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</p>
                <br></br>
                <p className='font-bold'>Favourites</p>
                    <ol className=' list-decimal pl-5'>
                        <li>Work with the product team to develop a new feature based on feedback from customers</li>
                            <ul className=' list-disc pl-5'>
                                <li>I love being the voice of the customer, acting as the conduit between customers and product teams, and having input into the company's latest features.</li>
                            </ul>
                        <li>Run ticket review sessions to make sure tone is consistent</li>
                            <ul className=' list-disc pl-5'>
                                <li>I'm detail oriented, enjoy QA and have experience aligning my outbound replies, documentation and social media posts to a company's tone of voice.</li>
                            </ul>
                        <li>Find and recruit teammates for the support team</li>
                            <ul className=' list-disc pl-5'>
                                <li>I have experience interviewing and scaling support teams and enjoy building out a well-rounded, diverse team that suits a company's desired culture.</li>
                            </ul>
                        <li>Manage a support team</li>
                            <ul className=' list-disc pl-5'>
                                <li>While I don't have formal experience as a manager, I have mentoring and coaching experience, and would love to experience being a people leader in the future.</li>
                            </ul>
                        <li>Write and maintain support articles and docs pages</li>
                            <ul className=' list-disc pl-5'>
                                <li>I believe support articles and docs should be easy to follow and accessible to anyone, and I enjoy making complex topics and instructions simple to understand.</li>
                            </ul>
                    </ol>
                <br></br>
                <p className='font-bold'>Least favourite</p>
                    <ol className=' list-decimal pl-5'>
                        <li>Help resolve billing issues for customers</li>
                            <ul className=' list-disc pl-5'>
                                <li>While I'm very familiar with supporting billing and charges for subscription models, it is not my favourite task, as it so often relies on the bank and credit cards.</li>
                            </ul>
                        <li>Work with 3rd party partners to track down a tricky situation for a joint customer</li>
                            <ul className=' list-disc pl-5'>
                                <li>Collaborating together with a 3rd party and joint customer can be fun to untangle a situation, although it can often be very time consuming due to the back-and-forth.</li>
                            </ul>
                        <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
                            <ul className=' list-disc pl-5'>
                                <li>I actually love data analysis and finding trends, although manually checking hundreds of tickets sounds laborious and I would hope the ticketing system provides some insights.</li>
                            </ul>
                        <li>Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems</li>
                            <ul className=' list-disc pl-5'>
                                <li>I've moderated and taken questions live on stage and in video conferences, and while I find fun in it, I don't believe it's as productive in answering everyone's questions and problems.</li>
                            </ul>
                        <li>Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub</li>
                            <ul className=' list-disc pl-5'>
                                <li>Through thorough testing, I love finding and filing bugs, but I believe this should be filed in a place that might have greater visibility for engineers to prioritise.</li>
                            </ul>
                    </ol>
            </>
        )
    },
    {
        title: "Exercise 2",
        id: "exercise2",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            <p>
                Given the chance, I would like to learn and do more software development and engineering and learn to become a people manager.
                <br></br><br></br>
                I've recently completed a diploma that taught me the skills to become a Junior Fullstack Developer, and I would love to use those skills at work, and learn from other software engineers on how to grow in that career path.
                <br></br><br></br>
                Additionally, I want to learn what it means to be a good manager and people leader, and I would like to experience performing in this capacity at some stage in my career.
            </p>
            </>
        )
    },
    {
        title: "Exercise 3",
        id: "exercise3",
        content: (
            <>
            <p className='italic'>Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</p>
            <br></br>
            <p>
                During my time in the customer support team at Slack, I encountered a challenge and technical issue where a large enterprise client was experiencing issues with their SSO and SCIM API integrations, causing disruptions to their access to Slack.
                I was tasked with diagnosing and resolving the issue for the customer, so that their users could log back into Slack and have their user profiles synced as expected with their identity provider (Okta).
                <br></br><br></br>
                When the customer wrote in, I replied with a number of preliminary questions, such as for a screenshot of the error (if any) and what browsers, apps and devices the issue is occurring on. 
                Following their response, with no obvious conclusions, I scanned the customer's SCIM API logs and indeed noticed that there were a number of 'username_invalid' errors in the logs. 
                This led me to believe that their identity provider was not passing across the required username value upon authentication, so I asked for a screenshot of their Okta configuration page for the Slack app.
                Upon review, the customer had set the username field to correspond to the company's email addresses, which I realised would not work due to Slack expecting usernames consisting of just alphanumeric characters.
                After asking the customer to change the userName attributes and instead create an email attribute as the unique identifier in Okta, I prompted the customer to ask their users to try logging in again.
                <br></br><br></br>
                After the customer mentioned that the users were able to login through Okta once again following the configuration change, I sent the user Slack's SCIM API documentation to ensure they understood what fields were required at all times (https://api.slack.com/admins/scim) to prevent and troubleshoot future issues.
                Beyond the customer's response, I was able to determine that my solution was successful as I crawled through the customer's SCIM logs once again, and noticed that there were no recent erroneous logins, and users who were previously having issues were appearing with successful authentication tokens once more.
  
            </p>

            </>
        )
    },
    {
        title: "Exercise 4",
        id: "exercise4",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 5",
        id: "exercise5",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 6",
        id: "exercise6",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 7",
        id: "exercise7",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 8",
        id: "exercise8",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 9",
        id: "exercise9",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 10",
        id: "exercise10",
        content: (
            <>
            <p className='italic'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    }
]

const ExerciseSection = () => {
    const [tab, setTab] = useState("exercise1")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
    <section className='text-white' id="about">
        <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 xl:gap-16 sm:py-16">
            {/* <Image src="/images/about-image.png" width={500} height={500} /> */}
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>Exercises</h2>
                <p className='text-base lg:text-lg'>
                    Each tab below correlates to the exercise number. Please click on each exercise to navigate through the responses.
                </p>
                <div className='flex flex-wrap justify-start mt-8'>
                    <TabButton selectTab={() => handleTabChange("exercise1")} active={tab === "exercise1"}>{" "}Exercise 1{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise2")} active={tab === "exercise2"}>{" "}Exercise 2{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise3")} active={tab === "exercise3"}>{" "}Exercise 3{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise4")} active={tab === "exercise4"}>{" "}Exercise 4{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise5")} active={tab === "exercise5"}>{" "}Exercise 5{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise6")} active={tab === "exercise6"}>{" "}Exercise 6{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise7")} active={tab === "exercise7"}>{" "}Exercise 7{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise8")} active={tab === "exercise8"}>{" "}Exercise 8{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise9")} active={tab === "exercise9"}>{" "}Exercise 9{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("exercise10")} active={tab === "exercise10"}>{" "}Exercise 10{" "}</TabButton>
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

export default ExerciseSection