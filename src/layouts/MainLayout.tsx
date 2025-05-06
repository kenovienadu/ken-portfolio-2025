import {PropsWithChildren} from "react";
import SideNav from "@/components/SideNav";

export default function MainLayout(props: PropsWithChildren) {
  return (
    <main className="mx-30 py-30 flex gap-5 justify-between xl:w-[1200px] xl:mx-auto" >
      <section className="sticky top-10 h-[80vh] w-2/5" >
        <SideNav />
      </section>
      <section className="w-3/5" >
        {props.children}
      </section>
    </main>
  )
}