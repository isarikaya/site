import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "İbrahim Sarıkaya",
  description: "I am a fullstack developer and love helping people. I work as a freelancer on Upwork.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-[#f9f9f9] max-w-2xl mx-4 mt-16 lg:mx-auto text-label`}
      >
        {children}
      </body>
    </html>
  );
}
