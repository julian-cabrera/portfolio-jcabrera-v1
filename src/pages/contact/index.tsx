import Head from "next/head";
import { useState } from "react";
import Envelope from "../../../public/icons/Envelope";
import Github from "../../../public/icons/Github";
import Linkedin from "../../../public/icons/Linkedin";
import Location from "../../../public/icons/Location";
import Phone from "../../../public/icons/Phone";
import CopyToClipboard from "../../components/CopyToClipboard";
import useInput from "../../hooks/use-input";
import Navbar from "../../layout/Navbar/Navbar";
import ExternalLinks from "../../utilities/ExternalLinks";
import classes from "./index.module.css";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredSubject,
    isValid: enteredSubjectIsValid,
    hasError: subjectInputHasError,
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: resetSubjectInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    reset: resetMessageInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredSubjectIsValid &&
    enteredMessageIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
    resetSubjectInput();
    resetMessageInput();

    setButtonText("Sending...");
    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        name: enteredName,
        email: enteredEmail,
        subject: enteredSubject,
        message: enteredMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setErrorMessage(error);
      setShowSuccessMessage(false);
      setShowFailureMessage(true);
      setButtonText("Send");
      return;
    }

    setShowSuccessMessage(true);
    setShowFailureMessage(false);
    setButtonText("Send");
  };

  const nameInputClasses = nameInputHasError
    ? `${classes["name-input"]} ${classes["invalid-input"]}`
    : `${classes["name-input"]}`;
  const emailInputClasses = emailInputHasError
    ? `${classes["email-input"]} ${classes["invalid-input"]}`
    : `${classes["email-input"]}`;
  const subjectInputClasses = subjectInputHasError
    ? `${classes["subject-input"]} ${classes["invalid-input"]}`
    : `${classes["subject-input"]}`;
  const messageInputClasses = messageInputHasError
    ? `${classes["message-input"]} ${classes["invalid-input"]}`
    : `${classes["message-input"]}`;

  const nameInputPlaceholder = nameInputHasError
    ? "Name must not be empty."
    : "[ Name ]";
  const emailInputPlaceholder = emailInputHasError
    ? "Email must be valid."
    : "[ Email ]";
  const subjectInputPlaceholder = subjectInputHasError
    ? "Subject must not be empty."
    : "[ Subject ]";
  const messageInputPlaceholder = messageInputHasError
    ? "Message must not be empty."
    : "[ Message ]";

  return (
    <>
      <Head>
        <title>Julian Cabrera - Contact</title>
        <meta
          name="description"
          content="Julian Cabrera's portfolio - Contact section"
        />
      </Head>
      <Navbar />
      <main className={classes.main}>
        <section>
          <h1 className={classes.title}>Contact me</h1>
          <form onSubmit={submitHandler} className={classes.form}>
            <input
              className={nameInputClasses}
              type="text"
              id="name"
              placeholder={nameInputPlaceholder}
              value={enteredName}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            <input
              className={emailInputClasses}
              type="email"
              id="email"
              placeholder={emailInputPlaceholder}
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            <input
              className={subjectInputClasses}
              type="text"
              id="subject"
              placeholder={subjectInputPlaceholder}
              value={enteredSubject}
              onChange={subjectChangeHandler}
              onBlur={subjectBlurHandler}
            />
            <textarea
              className={messageInputClasses}
              id="message"
              placeholder={messageInputPlaceholder}
              value={enteredMessage}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            <button type="submit" disabled={!formIsValid}>
              {buttonText}
            </button>
          </form>
          <div className={classes["mail-validation"]}>
            {showSuccessMessage && (
              <p className={classes["mail-success"]}>
                {`Your message has been delivered. Thank you!`}
              </p>
            )}
            {showFailureMessage && (
              <p className={classes["mail-failure"]}>
                {"Oops! Something went wrong."}
                <br />
                {"Message could not be delivered."}
                <br />
                {`Reason: ${errorMessage}`}
              </p>
            )}
          </div>
        </section>
        <section className={classes.info}>
          <ul>
            <li className={classes.icon1}>
              <Phone />
            </li>
            <li className={classes.icon2}>
              <Envelope />
            </li>
            <li className={classes.icon3}>
              <Linkedin />
            </li>
            <li className={classes.icon4}>
              <Github />
            </li>
            <li className={classes.icon5}>
              <Location />
            </li>
            <li className={classes.item6}>
              <a href={ExternalLinks.WHATSAPP} target="_blank" rel="noreferrer">
                +54 343 4620007
              </a>
            </li>
            <li className={classes.item7}>
              <CopyToClipboard text="julian.e.cabrera@hotmail.com" />
            </li>
            <li className={classes.item8}>
              <a href={ExternalLinks.LINKEDIN} target="_blank" rel="noreferrer">
                linkedin.com/in/cabrerajulian
              </a>
            </li>
            <li className={classes.item9}>
              <a href={ExternalLinks.GITHUB} target="_blank" rel="noreferrer">
                github.com/julian-cabrera
              </a>
            </li>
            <li className={classes.item10}>
              <a href={ExternalLinks.LOCATION} target="_blank" rel="noreferrer">
                Paraná, Entre Ríos, Argentina
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
};
export default Contact;
