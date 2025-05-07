import {PropsWithChildren} from "react";

export default function MobileOnly (props: PropsWithChildren) {
  return (
    <section className="w-full hidden md:inline-block">
      {props.children}
    </section>
  )
}