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
                        <li>Run ticket review sessions to make sure tone is consistent</li>
                            <ul className=' list-disc pl-5'>
                                <li>Reason</li>
                            </ul>
                        <li>Work with the product team to develop a new feature based on feedback from customers</li>
                        <li>Find and recruit teammates for the support team</li>
                        <li>Manage a support team</li>
                        <li>Write and maintain support articles and docs pages</li>
                    </ol>
                <br></br>
                <p className='font-bold'>Least favourite</p>
                    <ol className=' list-decimal pl-5'>
                        <li>Help resolve billing issues for customers</li>
                        <li>Work with 3rd party partners to track down a tricky situation for a joint customer</li>
                        <li>Analyze hundreds of support tickets to spot trends the product team can use</li>
                        <li>Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems</li>
                        <li>Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub</li>
                    </ol>
            </>
        )
    },
    {
        title: "Exercise 2",
        id: "exercise2",
        content: (
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur voluptate distinctio temporibus error sunt nisi dolorem laudantium, aliquid non, nobis tempore molestiae quas, rem provident obcaecati expedita quod recusandae odio. Quidem commodi harum, ea libero sequi necessitatibus reiciendis temporibus velit facere neque atque quae illo minima voluptate, fugit quasi debitis iste aspernatur! Nihil repudiandae nobis voluptas, dolor illum, eligendi commodi labore maiores ad iure eos blanditiis similique et excepturi facilis, architecto deleniti in suscipit minus accusamus sit totam. Provident sint assumenda iure! Excepturi magnam earum sit, repellendus a natus animi repellat consectetur dolor ea nesciunt alias accusamus nulla nobis iusto commodi mollitia! Porro perferendis totam perspiciatis, aperiam cupiditate veniam sit ullam mollitia id quam rerum qui tempora voluptatum voluptas temporibus ducimus. Tempora eveniet eius dolores error quos quo repellendus, deleniti deserunt rerum quia voluptas optio dolorum necessitatibus sit cupiditate, architecto dicta accusantium unde ab, et eum veritatis ullam! Neque hic magnam corrupti dolor voluptatum quisquam enim deserunt adipisci quis quas quasi odit perspiciatis, delectus ad facere debitis quos amet recusandae fuga et minus placeat. Deserunt dolore aut temporibus omnis ab rem, error iure perspiciatis porro labore iste eligendi id consectetur! Numquam accusamus vel repellat vero, voluptatibus quidem deserunt minima.</p>
        )
    },
    {
        title: "Exercise 3",
        id: "exercise3",
        content: (
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur voluptate distinctio temporibus error sunt nisi dolorem laudantium, aliquid non, nobis tempore molestiae quas, rem provident obcaecati expedita quod recusandae odio. Quidem commodi harum, ea libero sequi necessitatibus reiciendis temporibus velit facere neque atque quae illo minima voluptate, fugit quasi debitis iste aspernatur! Nihil repudiandae nobis voluptas, dolor illum, eligendi commodi labore maiores ad iure eos blanditiis similique et excepturi facilis, architecto deleniti in suscipit minus accusamus sit totam. Provident sint assumenda iure! Excepturi magnam earum sit, repellendus a natus animi repellat consectetur dolor ea nesciunt alias accusamus nulla nobis iusto commodi mollitia! Porro perferendis totam perspiciatis, aperiam cupiditate veniam sit ullam mollitia id quam rerum qui tempora voluptatum voluptas temporibus ducimus. Tempora eveniet eius dolores error quos quo repellendus, deleniti deserunt rerum quia voluptas optio dolorum necessitatibus sit cupiditate, architecto dicta accusantium unde ab, et eum veritatis ullam! Neque hic magnam corrupti dolor voluptatum quisquam enim deserunt adipisci quis quas quasi odit perspiciatis, delectus ad facere debitis quos amet recusandae fuga et minus placeat. Deserunt dolore aut temporibus omnis ab rem, error iure perspiciatis porro labore iste eligendi id consectetur! Numquam accusamus vel repellat vero, voluptatibus quidem deserunt minima.</p>
        )
    },
    {
        title: "Exercise 4",
        id: "exercise4",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 5",
        id: "exercise5",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 6",
        id: "exercise6",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 7",
        id: "exercise7",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 8",
        id: "exercise8",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 9",
        id: "exercise9",
        content: (
            <p></p>
        )
    },
    {
        title: "Exercise 10",
        id: "exercise10",
        content: (
            <p></p>
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