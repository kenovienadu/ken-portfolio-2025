import {useMemo} from "react";

const links = [
  {
    name: 'github',
    iconClass: 'fa-brands fa-github',
    url: 'https://github.com/kenovienadu'
  },
  {
    name: 'linkedin',
    iconClass: 'fa-brands fa-linkedin',
    url: 'https://linkedin.com/in/kenovienadu',
  },
  {
    name: 'twitter-x',
    iconClass: 'fa-brands fa-x-twitter',
    url: 'https://x.com/kenovienadu?s=21'
  },
  {
    name: 'instagram',
    iconClass: 'fa-brands fa-instagram',
    url: 'https://www.instagram.com/ken_ovienadu?igsh=ZGhjZHZodDBzYXFr&utm_source=qr',
  },
  {
    name: 'medium',
    iconClass: 'fa-brands fa-medium',
    url: 'https://medium.com/@kenovienadu'
  },
]

type Props = {
  centered?: boolean
}

export default function SocialMediaLinks(props: Props) {
  const wrapperClassName = useMemo(() => {
    const baseClasses = "flex text-2xl md:text-2xl gap-8 md:gap-10 opacity-65";
    return props.centered ? `${baseClasses} justify-center` : baseClasses;
  }, [props.centered]);

  const linkItems = links.map((item, index) => {
    return (
      <a key={index} href={item.url} target={'_blank'} className="cursor-pointer">
        <i className={item.iconClass} ></i>
      </a>
    )
  });

  return (
    <div className={wrapperClassName}>
      {linkItems}
    </div>
  )
}