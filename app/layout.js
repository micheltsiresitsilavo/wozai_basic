import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AiSapien",
  description: "AiSapien is a web interface chatbot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-b-gray-500 text-slate-200  flex justify-between items-center mx-auto max-w-screen-2xl px-4 md:px-8 py-2 ">
          <div className="sm:text-xl text-md font-medium ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className="-mb-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2" />
              <path d="M20 14h2" />
              <path d="M15 13v2" />
              <path d="M9 13v2" />
            </svg>
            AiSapien <span className="text-xs">Basic version</span>
          </div>
          <div className="space-x-2">
            <Link
              href="/"
              className="bg-gray-500 px-2 py-1 text-xs text-white rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/chat"
              className="bg-gray-500 px-2 py-1 text-xs text-white rounded-lg"
            >
              Chat
            </Link>
            <a
              href="https://micheltsilavo.vercel.app"
              className="bg-gray-500 px-2 py-1 text-xs text-white rounded-lg"
            >
              Author
            </a>
          </div>
        </header>
        <NextTopLoader showSpinner={false} />
        {children}
      </body>
    </html>
  );
}
