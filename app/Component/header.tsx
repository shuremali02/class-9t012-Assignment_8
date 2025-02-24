"use client"
import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";



const BlogHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
       <Link href={"/"}> <h1 className="text-3xl font-bold font-sans text-black hover:text-gray-200">My Blog</h1></Link>
        <nav className="md:flex hidden space-x-6 text-lg font-semibold " >
          <Link className="hover:text-white" href="#">Home</Link>
          <Link className="hover:text-white" href="/blog" >Blog</Link>
          <Link className="hover:text-white " href="#" >About</Link>
        </nav>
        <Button 
          className="md:hidden bg-gray-100" 
          variant="ghost" 
          onClick={toggleMenu}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white shadow-md flex items-center justify-center h-screen">
          <nav className="flex flex-col space-y-4 px-4 py-4">
          <Link className="hover:text-white" href="/">Home</Link>
          <Link className="hover:text-white" href="/blog" >Blog</Link>
          <Link className="hover:text-white " href="/" >About</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default BlogHeader;
