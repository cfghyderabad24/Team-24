# myapp/utils/sendemail.py

import smtplib
from email.message import EmailMessage
import os


def sendemail(subject, to_address, message):
    email = os.getenv("EMAIL_HOST_USER")
    password = os.getenv("EMAIL_HOST_PASSWORD")

    smtp1 = smtplib.SMTP("smtp-mail.outlook.com", 587)
    smtp1.ehlo()
    smtp1.starttls()
    smtp1.login(email, password)

    msg = EmailMessage()
    msg.set_content(message)
    msg["Subject"] = subject
    msg["From"] = email
    msg["To"] = to_address

    smtp1.sendmail(email, to_address, msg.as_string())
    smtp1.quit()

    print(f"Email sent to {to_address}")
