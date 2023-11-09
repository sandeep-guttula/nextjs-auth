import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async({email,emailType, userId}:any){
  
}

var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "24936276fde79f",
      pass: "7ad701244e2cc2"
    }
});