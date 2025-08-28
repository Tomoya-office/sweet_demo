import styles from "./page.module.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Story } from "@/components/ui/Story";
import { News } from "@/components/ui/News";
import { Shop } from "@/components/ui/Shop";
import { Menu } from "@/components/ui/Menu";
import { Cafe } from "@/components/ui/Cafe";


export default function Home() {
  return (
  <>
  <Header />
    <main className={styles.main}>
      <Story />
      <News />
      <Shop bgImage="/shop_photo/shop_image1.png"></Shop>
      <Menu />
      <Cafe />
      <Shop bgImage="/shop_photo/shop_image2.png"></Shop>
    </main>
  <Footer/>
  </>
  );
}
