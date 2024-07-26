import s from "./Contact.module.css";
import { SiAlienware } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, handleDelete, id }) => {
  return (
    <div className={s.contactWrap}>
      <div className={s.contactsInfo}>
        <span>
          <SiAlienware className={s.icon} />
          {name}
        </span>
        <span>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </span>
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
