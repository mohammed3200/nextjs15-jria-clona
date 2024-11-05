import React from "react";
import Link from "next/link";
import { SettingsIcon, UsersIcon } from "lucide-react";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: UsersIcon,
    activeIcon: UsersIcon,
  },
];

export const Navigation = () => {
  return (
    <ul>
      {routes.map((route) => {
        const isActive = false;
        const Icon = isActive ? route.activeIcon : route.icon;

        return (
          <Link href={route.href} key={route.label}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-withe shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5" />
              {route.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
