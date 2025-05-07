import MobileSummary from "@/components/MobileSummary";

export default function Home() {
  return (
    <section>
      <MobileSummary />
      <div className="flex flex-col gap-10 max-w-2xl leading-10 text-slate-600">
        <p>
          I&#39;m a <span className="text-slate-400 font-bold">Senior Fullstack Engineer</span> with a knack for turning ideas into real, scalable software. Over the last six years,
          I’ve worked with startups across industries like health, education, finance, agriculture, and real estate—helping
          them launch products, grow fast, and stay reliable under pressure. I enjoy working across the stack,
          especially with tools like <span className="text-slate-400 font-bold">React, Node.js, and NestJS</span>, and I thrive in teams that care about clean architecture,
          strong collaboration, and shipping with purpose.
        </p>

        <p>
          Right now, I’m building at Upflex, a hybrid workspace platform used in over 130 countries.
          There, I’ve led the development of real-time booking systems, rolled out dashboards, improved app performance, and
          even shipped a few tools to the Microsoft Teams Marketplace. It’s been an exciting challenge solving problems at
          scale and improving the user experience for people around the world.
        </p>

        <p>
          Outside of Upflex, I’ve consulted for several early-stage startups—designing mobile apps, building backend systems,
          and leading small teams. Whether it&#39;s helping users access therapy on Akoma Health or building tools to support
          farmers with <span className="text-slate-400 font-bold" >Agromall</span>, I’m drawn to products that create real-world impact. I’ve also had the chance to mentor
          upcoming developers and guide technical direction on education platforms like Learners Corner.
        </p>

        <p>
          When I&#39;m not deep in code or diagrams, I enjoy sharing what I’ve learned through <span className="text-slate-400 font-bold" >talks and mentoring sessions</span>.
          My background might be in medical sciences, but my passion has always been tech and learning how things work.
          These days, I&#39;m also working toward a Master’s in Software Engineering, just to sharpen the edges a bit more.
          Always open to fresh ideas, cool projects, and great conversations.
        </p>
      </div>
    </section>
  );
}
