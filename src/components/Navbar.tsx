import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-darker py-3 px-5 w-full drop-shadow-md fixed flex justify-center">
      <Link href="/">
        <Image src={logo} alt="Marvel small logo" height={24} width={24} />
      </Link>
    </div>
  );
};

export default Navbar;
