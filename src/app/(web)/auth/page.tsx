"use client";

import { useEffect, useState } from "react";
import { AiFillGithub } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";
import { signUp } from "next-auth-sanity/client";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const inputstyle =
  "border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none ";
const auth = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session) router.push("/");
  }, [router, session]);

  const loginhandler = async () => {
    try {
      await signIn();
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  const handlesubmit = async (event: any) => {
    event.preventDefault();
    const formData = { name, email, password };
    try {
      const user = await signUp(formData);
      if (user) {
        toast.success("Success, Please sign in");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    // console.log('form submitted', {name,email,password})
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%]  mx-auto">
        <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center">
            <AiFillGithub
              onClick={loginhandler}
              className="text-4xl mr-3 cursor-pointer text-black dark:text-white"
            />
            <FcGoogle
              onClick={loginhandler}
              className="ml-3 text-4xl cursor-pointer"
            />
          </span>
        </div>

        <form className="space-y-4 md:space-y-6" onSubmit={handlesubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="abc@company.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            className={inputstyle}
          />
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Saad Chohan"
            required
            onChange={(e) => setName(e.target.value)}
            className={inputstyle}
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            className={inputstyle}
          />
          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none
              font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign Up
          </button>
        </form>
        <button onClick={loginhandler} className="text-blue-700 underline">
          login
        </button>
      </div>
    </section>
  );
};

export default auth;
