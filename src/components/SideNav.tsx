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
          <div className="font-extrabold mb-5 text-sm" >ABOUT</div>
          <div className="font-extrabold mb-5 text-sm" >EXPERIENCE</div>
          <div className="font-extrabold mb-5 text-sm" >PROJECTS</div>
        </div>
      </section>

      {/* Social Media Pages */}
      <div className="flex text-2xl gap-8 opacity-65">
        <span>
          <i className="fa-brands fa-github"></i>
        </span>
        <span>
          <i className="fa-brands fa-linkedin"></i>
        </span>
        <span>
          <i className="fa-brands fa-facebook-f"></i>
        </span>
        <span>
          <i className="fa-brands fa-x-twitter"></i>
        </span>
      </div>
    </section>
  )
}