import {useEffect, useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";
import useIsMobile from "@/hooks/useIsMobile";

const navTabs = [
  {
    path: '/',
    label: 'About',
  },
  {
    path: '/experience',
    label: 'Experience',
  },
  {
    path: '/lectures',
    label: 'Lectures',
  }
]

export default function NavTabs() {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState(router?.route);
  const isMobile = useIsMobile();

  useEffect(() => {
    router.events.on('routeChangeComplete', (event) => {
      setCurrentRoute(event);
    })
  }, [router]);

  const renderDesktopNavTabs = () => {
    return navTabs.map((tab, index) => {
      const defaultClassNames = 'font-extrabold text-sm transition delay-150 duration-300 ease-in-out';
      const isActiveRoute = tab.path.toLowerCase() === currentRoute.toLowerCase();
      const className = isActiveRoute ? defaultClassNames : `${defaultClassNames} opacity-30`;

      return (
        <div key={index}>
          <Link href={tab.path} className={className}>
            <span className="uppercase">{tab.label}</span>
            {isActiveRoute && (
              <span className="pl-2" >
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            )}
          </Link>
        </div>
      )
    });
  }

  const renderMobileNavTabs = () => {
    return navTabs.map((tab, index) => {
      const defaultClassNames = 'font-extrabold text-sm transition delay-150 duration-300 ease-in-out';
      const isActiveRoute = tab.path.toLowerCase() === currentRoute.toLowerCase();
      const className = isActiveRoute ? defaultClassNames : `${defaultClassNames} opacity-30`;

      return (
        <div key={index}>
          <Link href={tab.path} className={className}>
            <span className="uppercase text-xs">{tab.label}</span>
          </Link>
        </div>
      )
    });
  }

  if (isMobile) {
    return (
      <section className="flex justify-between align-items-center">
        <div className="text-center text-sm font-black">
          <Link href="/">Ken Ovienadu</Link>
        </div>
        <div className="flex gap-2 justify-between align-items-center mb-10" >
          {renderMobileNavTabs()}
        </div>
      </section>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      {renderDesktopNavTabs()}
    </div>
  )
}