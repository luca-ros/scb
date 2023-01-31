import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="https://i.ibb.co/2ghDrY3/android-chrome-512x512.png"
            width={50}
            height={50}
            className="rounded-full"
            alt="logo"
          />
        </Link>
        <h1>The Snippet codes Blog</h1>
      </div>

      <div>
        <Link
          href=''
          className="px-5 py-3 text-sm text-white md:text-base bg-violet-700 flex items-center rounded-full text-center"
        >
          Member Access
        </Link>
      </div>
    </div>
  );
}

export default Header;
