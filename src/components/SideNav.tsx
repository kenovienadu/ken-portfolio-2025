import Image from 'next/image';

import NavTabs from "@/components/NavTabs";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Footer from "@/components/Footer";

export default function SideNav() {
  return (
    <section className="w-[350px] flex flex-col justify-between h-[80vh]">
      {/* Basic Intro */}
      <section>
        <div>
          <div>
            <Image
              src="/images/profile.png"
              alt="Display image for ken ovienadu"
              width={200}
              height={300}
              className="rounded-lg"
            />
          </div>
          <div className="text-5xl font-black my-2 mt-4">Ken Ovienadu</div>
          <div className="font-extrabold mb-3" >Senior FullStack Engineer</div>
          <div className="opacity-60 mb-2" >I build accessible, dynamic and performant digital experiences for the web.</div>
          <div className="mt-10">
            <NavTabs />
          </div>
        </div>
      </section>

      {/* Social Media Pages */}
      <section>
        <SocialMediaLinks />
        <Footer />
      </section>
    </section>
  )
}