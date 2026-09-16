import nodemailer from "nodemailer";

import Users from "@/models/userModel";
import bcrypt from "bcryptjs";


export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {
        const hashedToken = await bcrypt.hash(userId.toString(), 10)
        if (emailType === "VERIFY") {
            await Users.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true }
            )
        }
        if (emailType === "RESET") {
            await Users.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotTokenExpiry: Date.now() + 3600000
            }, { new: true, runValidators: true }
            )
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,

            }

        });
       const mailoptions = {
  from: "dhruvpandey@gmail.com",
  to: email,

  subject:
    emailType === "VERIFY"
      ? "Verify Your Email"
      : "Reset Your Password",

  html:
    emailType === "VERIFY"
      ? `
        <p>
          Click
          <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">
            here
          </a>
          to verify your email.
        </p>
      `
      : `
        <p>
          Click
          <a href="${process.env.DOMAIN}/resetpassword?token=${hashedToken}">
            here
          </a>
          to reset your password.
        </p>
      `,
};

        const mailresponse= await transport.sendMail(mailoptions)
        return mailresponse;

    } catch (error: any) {
        throw new Error(error.messages);
    }
}