import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contacts.module.css";
import cn from "classnames";

type IFormInput = {
  firstName: string;
  lastName: string;
  country: string;
};

export const Contacts = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Form</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.fromSection}>
          <h2 className={styles.subtitle}>Billing details</h2>
          <div className={cn(styles.formField, styles.formFieldFlex)}>
            <label className={styles.labelColumn}>
              <span>First name *</span>
              <input
                className={styles.input}
                {...register("firstName", { required: true, maxLength: 20 })}
                type="text"
                placeholder="First name"
              />
            </label>

            <label className={styles.labelColumn}>
              <span>Last name *</span>
              <input
                className={styles.input}
                {...register("lastName", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Last name"
              />
            </label>
          </div>

          <div className={styles.formField}>
            <label className={styles.labelColumn}>
              <span>Country *</span>
              <select {...register("country")}>
                <option value="poland">Poland</option>
                <option value="belarus">Belarus</option>
                <option value="other">other</option>
              </select>
            </label>
          </div>

          <div className={styles.formField}>
            <label className={styles.labelColumn}>
              <span>Street address *</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Street address"
              />
            </label>
          </div>

          <div className={cn(styles.formField, styles.formFieldFlex)}>
            <label className={styles.labelColumn}>
              <span>Phone *</span>
              <input className={styles.input} type="text" placeholder="Phone" />
            </label>

            <label className={styles.labelColumn}>
              <span>Email address *</span>
              <input
                className={styles.input}
                type="email"
                placeholder="Email address"
              />
            </label>
          </div>

          <div className={styles.formField}>
            <label>
              <span>Create an account?</span>
              <input type="checkbox" />
            </label>
          </div>

          <div className={styles.formField}>
            <h2 className={styles.subtitle}>Additional information</h2>
            <p>Order notes</p>
            <textarea
              className={styles.textarea}
              placeholder="Order notes"
            ></textarea>
          </div>
        </div>

        <div className={styles.fromSection}>
          <h2 className={styles.subtitle}>Your order</h2>

          <div>
            <label>
              <span>Direct bank transfer</span>
              <input type="radio" name="payment" checked />
            </label>

            <label>
              <span>Cash on delivery</span>
              <input type="radio" name="payment" />
            </label>

            <button className={styles.btnFormSubmit}>Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};
