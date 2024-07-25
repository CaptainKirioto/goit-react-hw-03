import s from "./Contact.module.css";

const Contact = ({ name, number, handleDelete, id }) => {
  return (
    <div className={s.contactWrap}>
      <div className={s.contactsInfo}>
        <span>{name}</span>
        <span>{number}</span>
      </div>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
