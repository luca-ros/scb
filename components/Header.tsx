import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons"

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.ibb.co/4Y6x0TS/w3i.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1 className="text-blue-400 text-2xl font-bold">Web3i</h1>
      </div>
      <div>
      <SocialIcon url="https://t.me/web3innovations" style={{ height: 40, width: 40, }} />
      </div>
    </div>
  );
}

export default Header;
