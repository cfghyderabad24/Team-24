# myapp/management/commands/send_daily_email.py

from django.core.management.base import BaseCommand
from myapp.utils.sendemail import sendemail


class Command(BaseCommand):
    help = "Send daily email"

    def handle(self, *args, **kwargs):
        subject = "Daily Email"
        to_address = "akashpingali18@gmail.com"
        message = "This is a daily email."

        sendemail(subject, to_address, message)
        self.stdout.write(self.style.SUCCESS("Email sent successfully"))
