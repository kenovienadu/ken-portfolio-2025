import {PropsWithChildren} from "react";

export default function MobileOnly (props: PropsWithChildren) {
  return (
    <section className="w-full inline-block md:hidden">
      {props.children}
    </section>
  )
}