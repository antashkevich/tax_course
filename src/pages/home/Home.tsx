import { Products } from "./products";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>
        Make their day extra special with a handcrafted bouquet.
      </h1>
      <Products />
    </div>
  );
};
