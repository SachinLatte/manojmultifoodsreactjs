import React, { useState } from "react";
import styles from "../ContactUsSection/ContactForm.module.scss";

const defaultFields = [
  { id: "name", placeholder: "Name", type: "text", col: true },
  { id: "mobile", placeholder: "Mobile No", type: "tel", col: true },
  { id: "email", placeholder: "Email Id", type: "email", col: true },
  { id: "city", placeholder: "City", type: "text", col: true },
  { id: "message", placeholder: "Other Details", type: "textarea", col: false },
];

export default function ContactForm({
  showHeading = true,
  fields = defaultFields,
  buttonText = "SUBMIT",
  onSubmit,
}) {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map((f) => [f.id, ""])),
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit ? onSubmit(formData) : console.log(formData);
  };

  const colFields = fields.filter((f) => f.col);
  const fullFields = fields.filter((f) => !f.col);

  return (
    <div className={styles.home_contact_form}>
      {showHeading && <h1>Get In Touch</h1>}
      <form onSubmit={handleSubmit}>
        <div className={styles.form_grid}>
          {colFields.map((field) => (
            <input
              key={field.id}
              name={field.id}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              className={styles.form_input}
            />
          ))}
        </div>

        {fullFields.map((field) => (
          <textarea
            key={field.id}
            name={field.id}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={handleChange}
            className={styles.form_textarea}
          />
        ))}

        <button type="submit" className={styles.form_button}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}
