import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./Contacts.module.css";
import cn from "classnames";

type IFormInput = {
  firstName: string;
  lastName: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  isAcount: boolean;
  textarea: string;
  payment: boolean;
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
                className={cn(styles.input, {[styles.inputError as string]: errors.firstName })}
                {...register("firstName", { required: true, maxLength: 20 })}
                type="text"
                placeholder="First name"
              />
              {errors.firstName?.type === 'required' && <p>First name is required</p>}
            </label>

            <label className={styles.labelColumn}>
              <span>Last name *</span>
              <input
               className={cn(styles.input, {[styles.inputError as string]: errors.lastName })}
                {...register("lastName", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Last name"
              />
              {errors.lastName?.type === 'required' && <p>Last name is required</p>}
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
                className={cn(styles.input, {[styles.inputError as string]: errors.address })}
                {...register("address", { required: true})}
                type="text"
                placeholder="Street address"
              />
              {errors.address?.type === 'required' && <p>Last name is required</p>}
            </label>
          </div>

          <div className={cn(styles.formField, styles.formFieldFlex)}>
            <label className={styles.labelColumn}>
              <span>Phone *</span>
              <input
               className={cn(styles.input, {[styles.inputError as string]: errors.phone })}
                {...register("phone", { required: true})}
                type="text"
                placeholder="Phone" />
                {errors.phone?.type === 'required' && <p>Phone is required</p>}
            </label>

            <label className={styles.labelColumn}>
              <span>Email address *</span>
              <input
               className={cn(styles.input, {[styles.inputError as string]: errors.email })}
                {...register("email", { required: true})}
                type="email"
                placeholder="Email address"
              />
              {errors.email?.type === 'required' && <p>Email is required</p>}
            </label>
          </div>

          <div className={styles.formField}>
            <label>
              <span>Create an account?</span>
              <input type="checkbox" {...register("isAcount")} />
            </label>
          </div>

          <div className={styles.formField}>
            <h2 className={styles.subtitle}>Additional information</h2>
            <p>Order notes</p>
            <textarea
              className={styles.textarea}
              {...register("textarea")}
              placeholder="Order notes"
            ></textarea>
          </div>
        </div>

        <div className={styles.fromSection}>
          <h2 className={styles.subtitle}>Your order</h2>

          <div>
            <label>
              <span>Direct bank transfer</span>
              <input type="radio"
                {...register("payment", { required: true})}
                name="payment"
                defaultChecked />
            </label>

            <label>
              <span>Cash on delivery</span>
              <input type="radio"
                {...register("payment", { required: true})}
                name="payment" />
            </label>

            <button className={styles.btnFormSubmit}>Order</button>
          </div>
        </div>
      </form>
    </div>
  );
};
