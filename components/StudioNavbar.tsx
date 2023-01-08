import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

// Adds markup and invokes renderDefault()
function MyEnhancedNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-violet-700 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 text-violet-700 mr-2" />
          Go to Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default MyEnhancedNavbar;
