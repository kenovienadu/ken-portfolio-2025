import NavTabs from "@/components/NavTabs";

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
        <div className="flex text-xl md:text-2xl gap-4 md:gap-8 opacity-65">
          <span>
            <i className="fa-brands fa-github"></i>
          </span>
          <span>
            <i className="fa-brands fa-linkedin"></i>
          </span>
          <span>
            <i className="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="fa-brands fa-medium"></i>
          </span>
        </div>

        <div className="mt-10 opacity-25">
          &copy; {new Date().getFullYear()}
        </div>
      </section>
    </section>
  )
}