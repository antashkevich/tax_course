import { useForm, SubmitHandler } from "react-hook-form";
import cn from "classnames";
import styles from "./Form.module.css";
import { Input } from "components/input";
import { Textarea } from "components/textarea";

export type PropsValues = {
  firstName: string;
  lastName: string;
  address: string;
  errors: string;
  email: string;
  textarea: string;
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PropsValues>();

  const onSubmit: SubmitHandler<PropsValues> = data => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.fromSection}>
        <h2 className={styles.subtitle}>Billing details</h2>
        <div className={cn(styles.formField, styles.formFieldFlex)}>
          <Input
            type={"text"}
            label={"firstName"}
            value={"First name *"}
            register={register}
            errors={errors}
            className={"column"}
            required
          />
          <Input
            type={"text"}
            label={"lastName"}
            value={"Last name"}
            register={register}
            errors={errors}
            className={"column"}
          />
        </div>

        <div className={styles.formField}>
          <label className={styles.labelColumn}>
            <span>Country *</span>
            {/* <select {...register("country")}>
              <option value="poland">Poland</option>
              <option value="belarus">Belarus</option>
              <option value="other">other</option>
            </select> */}
          </label>
        </div>

        <div className={styles.formField}>
          <Input
            type={"text"}
            label={"address"}
            value={"Street address *"}
            register={register}
            errors={errors}
            className={"column"}
            required
          />
        </div>

        <div className={cn(styles.formField, styles.formFieldFlex)}>
          <Input
            type={"text"}
            label={"errors"}
            value={"Phone *"}
            register={register}
            errors={errors}
            required
          />
          <Input
            type={"email"}
            label={"email"}
            value={"Email address *"}
            register={register}
            errors={errors}
            className={"column"}
            required
          />
        </div>

        <div className={styles.formField}>
          {/* <label>
            <span>Create an account?</span>
            <input type="checkbox" {...register("isAcount")} />
          </label> */}
        </div>

        <div className={styles.formField}>
          <h2 className={styles.subtitle}>Additional information</h2>
          <Textarea
            label={"textarea"}
            value={"Order notes"}
            register={register}
          />
        </div>
      </div>

      <div className={styles.fromSection}>
        <h2 className={styles.subtitle}>Your order</h2>

        <div>
          {/* <label>
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
          </label> */}

          <button className={styles.btnFormSubmit}>Order</button>
        </div>
      </div>
    </form>
  );
};
