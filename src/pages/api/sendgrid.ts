import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    await sendgrid.send({
      to: "jcabrera.inbox@gmail.com",
      from: "julian.e.cabrera@hotmail.com",
      subject: `Portfolio Inbox from ${req.body.subject}`,
      html: `
      <div>
        <b>Message:</b> ${req.body.message}
        <br />
        <b>From:</b> ${req.body.name},
        <br />
        <b>Email:</b> ${req.body.email}
      </div>`,
    });
  } catch (error: any) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;

/*
Copyright:
 https://www.freecodecamp.org/news/how-to-build-a-working-contact-form-with-sendgrid-and-next-js/
*/
