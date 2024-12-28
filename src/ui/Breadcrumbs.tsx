import React from "react";

type BreadcrumbsProps = {
  items: { label: string; link: string }[];
  className?: string;
  activeClassName?: string;
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className,
  activeClassName,
}) => {
  return (
    <div className={`breadcrumbs text-sm ${className}`}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} className={`${activeClassName}`}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
