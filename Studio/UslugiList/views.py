from django.shortcuts import render

# Create your views here.
def PrintsaitUl(request):
    print(request.path)
    request.path = "mainpage/mainpage"
    print(request.path)
    return render(request, 'UslugiList/Uslugi.html')
