import {useEffect, useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";

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
  const [currentRoute, setCurrentRoute] = useState(router?.route)

  useEffect(() => {
    router.events.on('routeChangeComplete', (event) => {
      setCurrentRoute(event);
    })
  }, [router]);

  const renderNavTabs = () => {
    return navTabs.map((tab, index) => {
      const defaultClassNames = 'font-extrabold text-sm';
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

  return (
    <div className="flex flex-col gap-6">
      {renderNavTabs()}
    </div>
  )
}