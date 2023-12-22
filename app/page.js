"use client";

import { useCompletion } from "ai/react";
import Link from "next/link";

export default function SloganGenerator() {
  const { completion, input, handleInputChange, handleSubmit } =
    useCompletion();

  return (
    <div>
      <div className=" px-8 py-4">
        <p className="text-slate-100 font-semibold text-xl">Completion</p>
      </div>
      <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
        <form onSubmit={handleSubmit}>
          <input
            className="fixed w-full max-w-md bottom-0 border border-gray-300 rounded mb-8 shadow-xl p-2 dark:text-black"
            value={input}
            placeholder="Describe your business..."
            onChange={handleInputChange}
          />
        </form>
        {completion ? (
          <div className="whitespace-pre-wrap my-4">{completion}</div>
        ) : (
          <div>Describe your business and get slogans</div>
        )}
      </div>
    </div>
  );
}
