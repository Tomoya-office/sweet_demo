import styles from "./page.module.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { Story } from "@/components/ui/Story";
import { News } from "@/components/ui/News";


export default function Home() {
  return (
  <>
  <Header />
    <main className={styles.main}>
      <Story />
      <News />
    </main>
  <Footer/>
  </>
  );
}
