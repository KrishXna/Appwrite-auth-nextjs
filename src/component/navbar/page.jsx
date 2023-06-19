import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full">
      <Image src="/appwrite.svg" alt="Logo" width={200} height={100} />
    </div>
  );
};

export default Navbar;
