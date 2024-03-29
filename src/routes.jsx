import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    // element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Medical-Care",
    path: "/sign-in",
    // element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Medi-Store",
    path: "/sign-up",
    // element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "#",
    target: "_blank",
    element: "",
  },
];

export default routes;
