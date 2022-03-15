from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view,permission_classes
from .models import Comment, Reply
from .serializers import CommentSerializer, ReplySerializer
from django.contrib.auth.models import User
from django.http import Http404


# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, video_id):
    comments = Comment.objects.filter(video_id=video_id)
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['POST', 'GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_comments(request, pk):

    print('User', f"{request.user.id}{request.user.email}{request.user.username}")
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        comments = Comment.objects.filter(user_id=request.user.id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        comment = Comment.objects.get(pk=pk)
        serializer = CommentSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_replies(request, pk):
    replies = Reply.objects.filter(comment__id=pk)
    serializer = ReplySerializer(replies, many=True)
    return Response(serializer.data)


@api_view(['POST', 'GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_reply(request, pk):
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        replies = Reply.objects.filter(user_id=request.user.id)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        reply = Reply.objects.get(pk=pk)
        serializer = ReplySerializer(reply, data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data)

