import React from "react";
import { BiChevronRight } from "react-icons/bi";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

export interface BreadCrumbsProps {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
    className?: string;
}

export const BreadCrumbs = ({
    items,
    separator = ">",
    className = "",
}:BreadCrumbsProps) => {
    return (
        <nav aria-label="Breadcrumb" className={className}>
            <ol className="flex font-[300] items-center space-x-1">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                        {item.href ? (
                            <a
                                href={item.href}
                                className="text-gray-500 hover:underline"
                                aria-current={idx === items.length - 1 ? "page" : undefined}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <span
                                className="text-black"
                                aria-current={idx === items.length - 1 ? "page" : undefined}
                            >
                                {item.label}
                            </span>
                        )}
                        {idx < items.length - 1 && (
                            <span className=" text-gray-500"><BiChevronRight className="text-lg stroke-none"/></span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};