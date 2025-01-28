"use client";
import React from 'react';

import Button from "@/app/Component/Button"
import Link from 'next/link';
import FacebookButton from './facebookButton';
import GithubButton from './GithubButton';
import InstagramButton from './InstagramButton';
import LinkedInButton from './linkedinButton';

    
export default function HeroSection() {
 
  return (
    <section className="relative  bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Discover the World of Ideas
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Dive into a collection of articles that spark inspiration, provide actionable insights, and share unique perspectives on diverse topics.
          </p>
          <div>
            {/* <button onClick={handleClick}>Read Blogs</button> */}
           <Link href={"/blog"}> <Button /></Link>
           </div>
           <div className='flex justify-center p-16'>
           <nav className="flex space-x-6">
          <Link href="https://github.com/shuremali02"><GithubButton/></Link>
          <Link href="https://www.instagram.com" ><InstagramButton/></Link>
          <Link href="https://www.linkedin.com/in/syed-shurem-ali-5a55852a0/" ><LinkedInButton/></Link>
          <Link href="https://www.facebook.com" ><FacebookButton/></Link>
        </nav>
        </div>
        </div>
      </div>
    </section>
  );
}
