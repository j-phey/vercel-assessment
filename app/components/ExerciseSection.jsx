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
            <p className='italic font-bold text-slate-300'>From <Link href='https://gist.github.com/Pieparker/b04a4e9ff82ba949e5db9d5b0e9d89e8' className=' text-pink-400' target="_blank">this</Link> list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.</p>
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
            <p className='italic font-bold text-slate-300'>What do you want to learn or do more of at work?</p>
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
            <p className='italic font-bold text-slate-300'>Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?</p>
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
            <p className='italic font-bold text-slate-300'>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</p>
            <br></br>
            <p className='font-bold'>Edge Functions</p>
            <ul className='list-disc pl-5'>
                <li>Used when users need a cost-effective option to run lightweight JavaScript functions that are executed closer to where the user is located.</li>
                <li>Ideally used for when speed and lower latency is important.</li>
                <li>Runs after the cache, and the response itself can be cached, allowing for even quicker subsequent invocations.</li>                
            </ul>
            <p className='italic text-sm'>(Source: https://vercel.com/docs/functions/runtimes/edge-runtime)</p>

            <br></br>
            <p className='font-bold'>Serverless Functions</p>
            <ul className='list-disc pl-5'>
                <li>Used when users need to run intense or large functions, which require more RAM, CPU and complete Node.js compatability.</li>
                <li>Ideally used for when speed is not of upmost importance, but complexity is, as it may take longer than the Edge runtime.</li>
                <li>Supports entry points of Node.js functions and supports Python, Ruby and Go, take the respective runtimes and outputting as a Serverless Function.</li>                
            </ul>
            <p className='italic text-sm'>(Source: https://vercel.com/docs/functions/runtimes)</p>

            <br></br>
            <p className='font-bold'>Edge Middleware</p>
            <ul className='list-disc pl-5'>
                <li>Used when users need to execute some code before a request is processed on a site.</li>
                <li>Ideally used for when certain limitations can be met, such as using ES modules, not being dependent on many Node.js APIs and dynamic code execution.</li>
                <li>Runs before the cache, allowing custom code and logic to be executed and providing personsalition to statically generated content.</li>                
            </ul>
            <p className='italic text-sm'>(Source: https://vercel.com/docs/functions/edge-middleware, https://vercel.com/docs/functions/edge-middleware/limitations)</p>
            </>
        )
    },
    {
        title: "Exercise 5",
        id: "exercise5",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and 
            what questions would you ask the customer to understand the situation better?</p>
            <br></br>

            <p>I would begin troubleshooting by first understanding the customer's environment, what the issue or error is, and the steps they took to get to the point of the issue.
            <br></br><br></br> 
            Assuming I don't have any preliminary information available to me, to understand the customer's environment, I would ask questions such as:
                <ul className='list-disc pl-5'>
                    <li>"What operating system are you using? e.g. Windows, Mac, Linux, Mobile OS"</li>
                    <li>"If using a web browser, does the build issue occur on all browsers or a specific browser? If specific, please share your browser name and version."</li>
                    <li>"What version of [operating system] are you using?"</li>
                    <li>"What is the name of the framework, technology or tools being used where the issue is occurring?"</li>
                </ul>
            <br></br>
            While I haven't seen the framework or technology before, by obtaining the name of it, I can at the very least begin researching the framework or technology and seeing the correlations with Vercel (or relevant supported software).
            By obtaining their environment information, I can also ensure that I am able to perform testing on and potentially isolate the issue to certain browsers or operating systems.
            <br></br><br></br>

            To understand what the issue or error is, I would ask questions such as:
                <ul className='list-disc pl-5'>
                    <li>"Can you please copy and paste the issue or error message (if any)?"</li>
                    <li>"Can you please share a screenshot or screen capture of the issue?"</li>
                </ul>
            <br></br>
            By obtaining as much information as I can from what the user sees on their side, I can further research both internally and externally for similar cases of the error message.
            Given that sometimes the issue is not something you can copy and paste as text, a screenshot, or even better, a screen capture or clip, will allow me to diagnose the issue visually.
            <br></br><br></br>

            To understand how the customer got to the point of the build issue, I would ask questions such as:
                <ul className='list-disc pl-5'>
                    <li>"Can you please share the steps you took before and at the time the build issue occurred?"</li>
                    <li>"Can you please share the steps to reproduce the build issue?"</li>
                    <li>"Can you please export or share the stack trace or error logs (if any)?"</li>
                </ul>
            </p>
            <br></br>
            These questions will further allow me to take the time to try to understand how the customer got to where they are, and gives me the chance to try to reproduce the issue on my side.
            By attempting to reproduce the issue, I can better understand if the issue is widespread, a known bug, or perhaps isolated to the user's environment. Furthermore, the error logs or stack trace will
            allow me to perform a deeper analysis of the build steps that led to the issue, which can help technical staff and myself further diagnose if there is an issue on the company's side.
            <br></br><br></br>
            By asking these questions, despite not being familiar with the framework or technology that the customer is using, I can create a more well-rounded view of what the customer sees, their setup, and how the issue occurred.
            This puts me in a better position to begin digging into the issue and getting familiar with the framework or technology so that I'll be able to troubleshoot more effectively down the track.
            </>
        )
    },
    {
        title: "Exercise 6",
        id: "exercise6",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>
            The customer from question 5 replies to your response with the below:<br></br><br></br>
            “I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.”
            <br></br><br></br>Please write a follow-up reply to the customer.
            </p>
            <br></br>

            <p>"Hi there,
            <br></br><br></br>
            I'm terribly sorry for the frustration this has caused and I really appreciate the hours you've spent trying to figure this out. 
            <br></br><br></br>
            I'm going to make every effort to confirm if the issue you're seeing is occurring due to our platform and will help you resolve it so that you can continue with your build. 
            While I understand it can be tedious to answer some of the questions that I asked, this will be really helpful in making sure I have all of the information I need from you to resolve the issue, both on our platform and at any potential third parties.
            <br></br><br></br>
            Once I have this information from you, I'll have a lot of what I need to reproduce the issue and resolve it, and I'll do my best to minimise the amount of additional back-and-forth required.
            <br></br><br></br>
            Thanks for your cooperation and understanding, and I'll be looking out for your reply so that we can get this fixed as soon as possible.
            
            <br></br><br></br>
            Kind regards,<br></br>
            Jon"
            </p>
            </>
        )
    },
    {
        title: "Exercise 7",
        id: "exercise7",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>
            A customer writes in to the Helpdesk asking "How do I do a redirect from the /blog path to https://example.com?" Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
            </p>
            <br></br>

            <p>"Hi there,
            <br></br><br></br>
            Thanks for reaching out to us at Vercel!
            <br></br><br></br>
            Depending on your use case, you can add an in-application redirect to redirect the /blog path to https://example.com. For example, if you're not working on a Next.js project, you can modify your vercel.json file in a similar way as below:
            <br></br><br></br>
            <code>
            {'{'}
            <br></br>
            &nbsp;&nbsp;"redirects": [
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'{'}
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"source": "/blog",
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"destination": "https://example.com", 
                    <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"permanent": true
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}
            <br></br>
            &nbsp;&nbsp;]
            <br></br>
            {'}'}
            </code>
            
            <br></br><br></br>
            Just remember to modify the variables and the right file (next.config.js or vercel.json) depending on your use case. You can follow our guide on redirects here to get the exact behaviour you're intending: https://vercel.com/guides/does-vercel-support-permanent-redirects 
            <br></br><br></br>
            In case you're curious, additional information about creating redirects with Vercel can be found in our documentation as well: https://vercel.com/docs/edge-network/redirects
            <br></br><br></br>
            I hope this helps, and if you have any other questions about this redirect or anything else about Vercel, please don't hesitate to get back in touch.
            <br></br><br></br>
            Kind regards,<br></br>
            Jon"
            </p>
            <br></br>

            <p>Additional information on decision making process:</p>
            <ul className='list-disc pl-5'>
                <li>Assumptions were made that I did not know what the use case was or what tech stack the customer was using.</li>
                <li>While I am not certain how much information the Vercel team would usually aim to provide, I struck a balance between providing an example answer (of which there may be many answers depending on the use case), and providing documentation for the user to self-serve and reduce back-and-forth.</li>
                <li>I'm aware that there are different types of redirects depending on the user's intentions, although setting up a redirect from the Vercel dashboard did not seem like it would help achieve what the customer wanted.</li>
            </ul>
            </>
        )
    },
    {
        title: "Exercise 8",
        id: "exercise8",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 9",
        id: "exercise9",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>What do you want to learn or do more of at work?</p>
            <br></br>
            </>
        )
    },
    {
        title: "Exercise 10",
        id: "exercise10",
        content: (
            <>
            <p className='italic font-bold text-slate-300'>What do you want to learn or do more of at work?</p>
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