from django import forms

class ObrZv(forms.Form):
    name = forms.CharField(label="Ваше имя")
    email = forms.EmailField(label="Ваш E-mail")
    textarea = forms.CharField(label="Ваше сообщение", widget=forms.Textarea)
