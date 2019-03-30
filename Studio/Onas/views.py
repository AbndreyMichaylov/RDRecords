from django.shortcuts import render

# Create your views here.
def PrintsaitO(request):
    print(request.path)
    request.path = "mainpage/mainpage"
    print(request.path)
    return render(request, 'Onas/Onas.html')
