import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import s from "./ContactForm.module.css";

import {
  FORM_INITIAL_VALUES,
  MAX_CHAR_VALIDATION,
  MIN_CHAR_VALIDATION,
} from "../../utils/constants";
import PhoneNumberInput from "../PhoneNumberInput/PhoneNumberInput";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const contactsSchema = yup.object({
  name: yup
    .string()
    .required(`User name is required`)
    .min(
      MIN_CHAR_VALIDATION,
      `Your name must contain at least ${MIN_CHAR_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_VALIDATION,
      `Your name should not contain more than ${MAX_CHAR_VALIDATION} characters`
    ),
  number: yup.string().required("User number is required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={contactsSchema}
      initialValues={FORM_INITIAL_VALUES}
      onSubmit={handleSubmit}
    >
      <Form className={s.ContactForm}>
        <label className={s.ContactLabel}>
          <span className={s.ContactSpanTitle}>Name</span>
          <Field className={s.ContactFormInput} type="name" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label className={s.ContactLabel}>
          <span className={s.ContactSpanTitle}>Number</span>
          <Field
            name="number"
            className={`${s.ContactFormInput} ${s.NumberFormInput}`}
            component={PhoneNumberInput}
          />
          <ErrorMessage
            className={s.ContactSpanTitle}
            component="p"
            name="number"
          />
        </label>
        <button className={s.ContactButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;