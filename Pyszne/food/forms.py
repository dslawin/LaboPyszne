from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import User

class NewUserForm(UserCreationForm):
    email = forms.EmailField(max_length=100, required=True, help_text='Podaj właściwy adres e-mail')
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2']
