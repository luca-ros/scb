import Image from "next/image";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full"
        width={50}
        height={50}
        src="https://i.ibb.co/2ghDrY3/android-chrome-512x512.png"
        alt="logo scb"
      />
      {renderDefault && <>{renderDefault(props)}</>}
    </div>
  );
}

export default Logo;
