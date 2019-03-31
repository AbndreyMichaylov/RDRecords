from django.shortcuts import render
from .forms import ObrZv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
# Create your views here.
def sendMsg(clientName, clientEmail):
    login = 'clientSender@yandex.ru'
    password = 'KARTON432'
    url = 'smtp.yandex.ru'
    addres = 'cjcbcrf322@gmail.com'

    message = MIMEMultipart()
    message['Subject'] = 'Новый клиент ждет звонка!'
    message['From'] = 'clientSender@yandex.ru'
    body = 'Клиент "' + str(clientName) + '" с данной почтой "' + str(clientEmail) + '" ждет звонка!'
    message.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP_SSL(url, 465)
    server.login(login, password)
    server.sendmail(login, addres, message.as_string())
    server.quit()


def Printsait(request):
    form = ObrZv()

    if request.method == 'POST':
        form = ObrZv(request.POST)

        if form.is_valid():

            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            print(name, email)
            sendMsg(name, email)


    print(request.path)
    request.path = "mainpage/mainpage"
    print(request.path)
    return render(request, 'MainPage/MainPage.html', {'form':form})
