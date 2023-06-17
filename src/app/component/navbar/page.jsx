import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-16 p-4">
      <Image src="/appwrite.svg" alt="Logo" width={200} height={80} />
    </div>
  );
};

export default Navbar;
