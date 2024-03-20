"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import Image from "next/image";
import ScaleLoader from "react-spinners/ScaleLoader";
import robot from "../ui/chatbot.png";

export default function Chat() {
  const [chaty, setChaty] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  // let pushDownBtn =
  //   "cursor-pointer md:hidden block absolute -top-10 -right-1 z-10 text-slate-100 bg-gray-700 border-2 border-slate-200 rounded-full px-2 py-2";
  // let pushDownDefault =
  //   "cursor-pointer md:hidden block absolute -top-6 -right-1 z-10 text-slate-100 bg-gray-700 border-2 border-blue-500 rounded-full px-2 py-2";

  return (
    <div>
      <div className="px-2 md:px-8 py-4">
        <p className="text-slate-100 font-semibold sm:text-xl text-lg ">Chat</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-9 ">
        <div className="order-last ">
          {messages.length ? (
            messages.map((m) => (
              <div key={m.id} className="py-2">
                {m.role === "user" ? (
                  <div className="bg-blue-400 inline-block rounded-md ml-1 px-2 py-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
                      <circle cx="10" cy="13" r="8" />
                      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
                      <path d="M18 3 19.1 5.2" />
                      <path d="M22 3 20.9 5.2" />
                    </svg>
                  </div>
                ) : (
                  <div className=" bg-fuchsia-600 inline-block rounded-md ml-1 px-2 py-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M12 6V2H8" />
                      <path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" />
                      <path d="M2 12h2" />
                      <path d="M9 11v2" />
                      <path d="M15 11v2" />
                      <path d="M20 12h2" />
                    </svg>
                  </div>
                )}
                {m.role === "user" ? (
                  <div className=" bg-gray-50 pl-2 pr-8 text-justify border-l-4 sm:border-l-8 border-l-blue-400 py-2 rounded-lg text-gray-700 text-sm ">
                    {" "}
                    {m.content}
                  </div>
                ) : (
                  <div className=" bg-gray-50 pl-2 pr-8 text-justify border-l-4 sm:border-l-8 border-l-fuchsia-400 py-2 rounded-lg text-gray-700 text-sm ">
                    {m.content}
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="flex justify-center">
              <Image src={robot} alt="robot" priority className="w-96" />
            </div>
          )}
        </div>

        <div className="mb-2">
          <form
            onSubmit={handleSubmit}
            className="fixed bottom-0   w-full pr-2"
          >
            <div className="mb-10">
              <ScaleLoader
                color="tomato"
                loading={isLoading}
                height={20}
                width={3}
                radius={0}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>

            <div className="mr-2 relative  md:max-w-md ">
              <input
                type="text"
                id="Search"
                value={input}
                placeholder="Say something.....then fire Enter"
                onChange={handleInputChange}
                hidden={chaty}
                className=" rounded-md w-full md:max-w-md  px-4 py-2.5 mb-4 pe-10 shadow-sm sm:text-sm  text-gray-800 font-medium border-2 border-blue-500"
              />
              {isLoading ? (
                <div className="absolute top-3 right-3 hidden sm:block">
                  <ScaleLoader
                    color="tomato"
                    loading={isLoading}
                    height={20}
                    width={3}
                    radius={0}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                </div>
              ) : (
                ""
              )}
              {messages.length ? (
                <button
                  onClick={() => setChaty(!chaty)}
                  className="cursor-pointer md:block hidden absolute -top-10 left-0 z-10 text-slate-100 bg-gray-700 border-2 border-slate-200 rounded-full px-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg>
                </button>
              ) : (
                ""
              )}

              {messages.length ? (
                <button
                  onClick={() => setChaty(!chaty)}
                  className="cursor-pointer md:hidden block absolute -top-10 -right-1 z-10 text-slate-100 bg-gray-700 border-2 border-slate-200 rounded-full px-2 py-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    <path d="M13 8H7" />
                    <path d="M17 12H7" />
                  </svg>
                </button>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
