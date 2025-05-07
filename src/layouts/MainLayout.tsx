import {PropsWithChildren} from "react";
import SideNav from "@/components/SideNav";
import NavTabs from "@/components/NavTabs";
import MobileOnly from "@/components/MobileOnly";
import Footer from "@/components/Footer";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <main className="mx-5 md:mx-30 py-5 md:py-30 md:flex gap-5 justify-between xl:w-[1200px] xl:mx-auto" >
      <section className="sticky top-30 h-[80vh] w-2/5 hidden md:inline-block" >
        <SideNav />
      </section>
      <MobileOnly>
        <NavTabs />
      </MobileOnly>
      <section className="md:w-3/5" >
        {props.children}
      </section>
      <MobileOnly>
        <Footer />
      </MobileOnly>
    </main>
  )
}