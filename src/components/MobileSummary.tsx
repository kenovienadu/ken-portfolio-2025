import SocialMediaLinks from "@/components/SocialMediaLinks";

export default function MobileSummary() {
  return (
    <section className="w-full block md:hidden my-10">
      <div className="text-center">
        <div className="text-2xl font-black mb-2">Ken Ovienadu</div>
        <div className="font-extrabold mb-3" >Senior FullStack Engineer</div>
      </div>

      <div>
        <SocialMediaLinks centered={true} />
      </div>
    </section>
  )
}