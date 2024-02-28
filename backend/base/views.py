from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

@api_view(['GET' , 'POST' , 'DELETE', 'PUT', 'OPTIONS'])
def getImages(request):
    res=[] #create an empty list
    for img in Task.objects.all(): #run on every row in the table...
        res.append({"title":img.title,
                "description":img.description,
                "completed":False,
                "image":str( img.image)
                }) #append row by to row to res list
    return Response(res) #return array as json response

@api_view(['DELETE','GET'])
def delImg(request,id):
    img=Task.objects.get(id=id)
    img.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['PUT', 'OPTIONS'])  
def updImg(request,id):
    try:
        img=Task.objects.get(id=id)
        img.title=request.data['title']
        img.description=request.data['description']
        img.save()
        return Response(status=status.HTTP_204_NO_CONTENT)  
    except:
        return Response(status=status.HTTP_400_BAD_REQUEST)

class APIViews(APIView):
    parser_class=(MultiPartParser,FormParser)
    def post(self,request,*args,**kwargs):
        api_serializer=TaskSerializer(data=request.data)

        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        

@api_view(['GET'])
def index(req):
    return Response({'test':'done'})