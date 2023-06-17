import { cookies } from "next/headers";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import Logout from "../component/logout";
export default async function Dashboard() {
  let data = cookies().get("user");
  const userData = JSON.parse(data.value);


  return (
    <>
      {data && data ? (
        <div className="flex justify-center py-10">
          <div className="relative mx-auto">
            <div className="flex justify-center">
              <Image
                src="/4471124-02.svg"
                alt="profile card"
                width={400}
                height={570}
              />

              <h1 className="absolute top-6 right-10 text-2xl text-[#fff]">
                app<span className="font-bold">write</span>
              </h1>

              <img
                className="h-36 w-36 rounded-full absolute top-20"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
            </div>
            <div className="absolute top-[250px] left-1/2 -translate-x-1/2 w-[70%]">
              <div>
                {/* <h1 className="text-3xl mb-6 text-center">{data.name}</h1> */}
                <table>
                  <tbody>
                    <tr>
                      <td className="p-2 text-[#db2777] font-bold">ID</td>
                      <td>{userData?.$id}</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-[#db2777] font-bold">EMAIL</td>
                      <td>{userData?.providerUid}</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-[#db2777] font-bold">
                        CreatedAt
                      </td>
                      <td>{new Date(userData?.$createdAt).toDateString()}</td>
                    </tr>
                  </tbody>
                </table>
                {/* logout Btn */}
                <Logout />
                <div className="flex justify-center mt-5">
                  <Image
                    src="/linkedin.svg"
                    alt="linkedin"
                    width={22}
                    height={22}
                    className=""
                  />{" "}
                  &nbsp;
                  <Image
                    src="/square-facebook.svg"
                    alt="fb"
                    width={22}
                    height={22}
                    className="ms-6"
                  />{" "}
                  &nbsp;
                  <Image
                    src="/square-instagram.svg"
                    alt="insta"
                    width={22}
                    height={22}
                    className="ms-6"
                  />{" "}
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1>Session Expired. Login again !</h1>
      )}
    </>
  );
}
