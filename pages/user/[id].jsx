import Navbar from "@/components/Navbar";
import Avatar from "@/components/Avatar";
import ContactoFooter from "@/components/ContactoFooter";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

export default function User() {
  const router = useRouter();
  const [user, setData] = useState([]);
  let id = router.query.id;

  useEffect(() => {
    fetch(`http://localhost:3005/users/${id}`, {
      method: "Get",
    })
      .then((response) => response?.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [id]);

  {
    /* animate pulse temporal*/
  }
  if (!user?.data) {
    return (
      <main className="w-full h-full bg-white animate-pulse min-h-screen min-w-full"></main>
    );
  }

  return (
    <main className="w-full min-h-screen bg-white overflow-hidden">
      {/* NAVBAR COMPONENT */}
      <Navbar />
      {/* CARD CONTAINER */}
      <div className=" bg-oldwhite rounded-xl p-6 mt-10 h-4/5 w-[350px] md:w-4/5 lg:w-1/2 mx-auto">
        <div className="md:grid grid-cols-2 ">
          {/* AVATAR COMPONENT Y NOMBRE USER*/}
          <div className="p-4 px-10 lg:px-2">
            <Avatar
              userName={user.data.users.name}
              id={user.data.users._id}
              avatar={user.data.users.avatar}
            />

            {/*prueba*/}
          </div>

          {/* SCORE */}
          <div className="py-4 px-10 grid grid-cols-1 place-items-center lg:px-2">
            <div className="border-4 border-lorange rounded-lg py-2 px-4 grid grid-rows-2 gap-2 w-fit">
              {" "}
              <p className="font-lucky text-dgreen text-2xl  text-center">
                SCORE
              </p>
              <p className="font-mont font-semibold text-black text-5xl text-center min-w-[140px] ">
                {user.data.users.score}
              </p>
            </div>
          </div>
        </div>

        {/* BOTONES HACIA SUBMENUS */}
        <div className="grid gap-4 w-full py-4 px-10 md:px-32 lg:grid-cols-2 lg:gap-2 lg:px-2 xl:grid-cols-4 ">
          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img src="/icon_userheart.svg" alt="" className="h-8 w-8 " />
            <Link href="/user/favs">
              <span className="font-lucky text-black text-xl xl:text-lg">
                FAVS
              </span>
            </Link>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img src="/icon_userachieve.svg" alt="" className="h-8 w-8 " />
            <Link href="/user/achv">
              <span className="font-lucky text-black text-xl xl:text-lg">
                LOGROS
              </span>
            </Link>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img src="/icon_userview.svg" alt="" className="h-8 w-8 " />
            <Link href="/user/ackn">
              <span className="font-lucky text-black text-xl xl:text-lg ">
                VISTOS
              </span>
            </Link>
          </div>

          <div className="bg-lorange rounded-lg py-2 px-4 inline-flex gap-1 place-content-evenly">
            <img src="/icon_userabt.svg" alt="" className="h-8 w-8" />

            <Link href="/about">
              <span className="font-lucky text-black text-xl xl:text-lg">
                NOSOTROS
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER CONTACTO */}
      <ContactoFooter />
    </main>
  );
}
