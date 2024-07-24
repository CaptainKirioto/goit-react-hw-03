import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={s.contactWrap}>
      <div className={s.contactsInfo}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Contact;
