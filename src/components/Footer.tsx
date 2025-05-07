import useIsMobile from "@/hooks/useIsMobile";
import {useMemo} from "react";

export default function Footer() {
  const isMobile = useIsMobile();
  const currentYear = new Date().getFullYear();
  const content = useMemo(() => {
    if (isMobile) {
      return (<div className="text-center">&copy; Ken Ovienadu {currentYear}</div>)
    }

    return (<>&copy; {currentYear}</>)
  }, [currentYear, isMobile])
  return (
    <div className="mt-10 opacity-25">
      {content}
    </div>
  )
}