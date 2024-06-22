from django.utils import timezone

from django.db import models
from django.db import models

class Userrole(models.Model):
    role_id = models.AutoField(primary_key=True)
    role = models.CharField(max_length=50, unique=True, blank=False)

    def __str__(self):
        return self.role

    class Meta:
        db_table = "userrole_table"

class User(models.Model):
    User_id = models.PositiveIntegerField(primary_key=True, verbose_name="Id")
    User_name = models.CharField(max_length=100, blank=False, unique=True, verbose_name="name")
    password = models.CharField(max_length=50, blank=False)
    email = models.EmailField(max_length=50, blank=False, unique=True)
    contact = models.BigIntegerField(blank=False, unique=True)

    # Foreign key to Userrole
    role_id = models.ForeignKey(Userrole, on_delete=models.CASCADE, verbose_name="Role")

    def __str__(self):
        return self.User_name

    class Meta:
        db_table = "user_table"

class Projects(models.Model):
    User_id = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="UserId")
    Project_name = models.CharField(max_length=100, blank=False)
    deadline1 = models.DateTimeField(default=timezone.now)  # Add deadline field
    deadline2 = models.DateTimeField(default=timezone.now)  # Add deadline field
    deadline3 = models.DateTimeField(default=timezone.now)  # Add deadline field

    def __str__(self):
        return self.Project_name


    class Meta:
        db_table = "Projects_table"

class Purpose(models.Model):
    User_id = models.ForeignKey(User, on_delete=models.CASCADE, verbose_name="UserId")
    Purpose_name = models.CharField(max_length=1000, blank=False)
    document = models.FileField(upload_to='person_documents/', blank=True, null=True)
    Project_name = models.ForeignKey(Projects, on_delete=models.CASCADE, verbose_name="Projectname")
    status = models.BooleanField(default=False)

    def status_display(self):
        return "Yes" if self.status else "No"

    def __str__(self):
        return self.Purpose_name + " - " + self.status_display()

    class Meta:
        db_table = "Purpose_table"
