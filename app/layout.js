import Footer from "./_components/navigation/footer";
import DesktopHeader from "./_components/navigation/header/desktop-header";
import MobileHeader from "./_components/navigation/header/mobile-header";
import "./tailwind.css";
import "./splide.min.css";

export const metadata = {
  metadataBase: new URL("https://xorbtec.co.za"),
  title: "Xorbtec Computer Services - Plettenberg Bay",
  description:
    "A Gaming Oriented computer repair company located in Plettenberg Bay, South Africa. Specialising in Building Personalised Computers to suit you and your pocket. After sales service a priority.",
  openGraph: {
    title: "Xorbtec Computer Services - Plettenberg Bay",
    description:
      "A Gaming Oriented computer repair company located in Plettenberg Bay, South Africa. Specialising in Building Personalised Computers to suit you and your pocket. After sales service a priority.",
    type: "website",
    url: "https://xorbtec.co.za",
    images: [
      "https://ik.imagekit.io/thewrightdesigns/shop/tr:w-1200,q-75/shop-4b.png",
    ],
    siteName: "Xorbtec Computer Services",
    locale: "en_ZA",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MobileHeader />
        <DesktopHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
