import SeacrhBar from "./SearchBar";

function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold mx-2 px-10 py-5 mb-10 bg-[#c3bbf7] rounded-xl">
      <div>
        <h1 className="text-3xl text-[#8569e9]">Welcome to the Snippet's Blog</h1>

      </div>
      <SeacrhBar />
      <div>
        <p className="mt-5 md:mt-2 text-[#9381ee] max-w-sm">
          Js | Nextjs | TailwindCss | Ts | Snippet | Example |
        </p>
      </div>
    </div>
  );
}

export default Banner;
