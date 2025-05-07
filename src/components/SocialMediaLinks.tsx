import {useMemo} from "react";

const links = [
  {
    name: 'github',
    iconClass: 'fa-brands fa-github',
  },
  {
    name: 'linkedin',
    iconClass: 'fa-brands fa-linkedin',
  },
  {
    name: 'twitter-x',
    iconClass: 'fa-brands fa-x-twitter',
  },
  {
    name: 'instagram',
    iconClass: 'fa-brands fa-instagram',
  },
  {
    name: 'medium',
    iconClass: 'fa-brands fa-medium',
  },
]

type Props = {
  centered?: boolean
}

export default function SocialMediaLinks(props: Props) {
  const wrapperClassName = useMemo(() => {
    const baseClasses = "flex text-xl md:text-2xl gap-4 md:gap-8 opacity-65";
    return props.centered ? `${baseClasses} justify-center` : baseClasses;
  }, [props.centered]);

  const linkItems = links.map((item, index) => {
    return (
      <span key={index}>
        <i className={item.iconClass} ></i>
      </span>
    )
  });

  return (
    <div className={wrapperClassName}>
      {linkItems}
    </div>
  )
}