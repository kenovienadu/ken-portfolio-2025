import NavTabs from "@/components/NavTabs";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import Footer from "@/components/Footer";

export default function SideNav() {
  return (
    <section className="w-[350px] flex flex-col justify-between h-[80vh]">
      {/* Basic Intro */}
      <section>
        <div>
          <div className="text-5xl font-black mb-2">Ken Ovienadu</div>
          <div className="font-extrabold mb-3" >Senior FullStack Engineer</div>
          <div className="opacity-60" >I build accessible, dynamic and performant digital experiences for the web.</div>
        </div>

        <div className="mt-20">
          <NavTabs />
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