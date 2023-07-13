import styles from "./Contacts.module.css";
import { Form } from "components/form";

export const Contacts = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Form</h1>
      <Form />
    </div>
  );
};
