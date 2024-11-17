import Blog from "./Blog";
import Footer from "./Footer";
import Hero2 from "./Hero2";
import Navbar from "./Navbar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Blog />
      <main>{children}</main>
      <Footer />
    </>
  );
}
