import { RefObject, useEffect, useRef } from "react";
import { useUI } from "@/providers/UIProvider";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const navbar: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const { setNavbarUI } = useUI();

  useEffect(() => {
    if (!!navbar.current) {
      setNavbarUI(navbar);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navbar]);

  return (
    <div
      ref={navbar}
      className="bg-darker py-3 px-5 w-full drop-shadow-md fixed flex justify-center"
    >
      <Link href="/">
        <Image src={logo} alt="Marvel small logo" height={24} width={24} />
      </Link>
    </div>
  );
};

export default Navbar;
