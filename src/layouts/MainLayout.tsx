import {PropsWithChildren} from "react";
import SideNav from "@/components/SideNav";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <main className="mx-5 md:mx-30 py-30 md:flex gap-5 justify-between xl:w-[1200px] xl:mx-auto" >
      <section className="sticky top-30 h-[80vh] w-2/5 hidden md:inline-block" >
        <SideNav />
      </section>
      <section className="md:w-3/5" >
        {props.children}
      </section>
    </main>
  )
}