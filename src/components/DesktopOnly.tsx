import {PropsWithChildren} from "react";

export default function DesktopOnly (props: PropsWithChildren) {
  return (
    <section className="w-full md:hidden inline-block">
      {props.children}
    </section>
  )
}