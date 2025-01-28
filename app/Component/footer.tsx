import Link from "next/link";
import FacebookButton from "./facebookButton";
import GithubButton from "./GithubButton";
import InstagramButton from "./InstagramButton";
import LinkedInButton from "./linkedinButton";

export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  text-black py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2025 Syed Shurem Ali. All rights reserved.</p>
          <div className="flex justify-center md:justify-between ">
          <nav className="md:flex space-x-6 text-lg font-semibold">
          <Link className="hover:text-white" href="#">Home</Link>
          <Link className="hover:text-white" href="/blog" >Blog</Link>
          <Link className="hover:text-white " href="#" >About</Link>
        </nav>
          <nav className="hidden md:flex space-x-6">
          <Link href="https://github.com/shuremali02"><GithubButton/></Link>
          <Link href="https://www.instagram.com" ><InstagramButton/></Link>
          <Link href="https://www.linkedin.com/in/syed-shurem-ali-5a55852a0/" ><LinkedInButton/></Link>
          <Link href="https://www.facebook.com" ><FacebookButton/></Link>
        </nav>
        
        </div>
        </div>
      </footer>
    );
  }
  