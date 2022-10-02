from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json, logging, os
from pymongo import MongoClient
from bson import json_util
from bson.objectid import ObjectId


mongo_uri = 'mongodb://' + os.environ["MONGO_HOST"] + ':' + os.environ["MONGO_PORT"]
db = MongoClient(mongo_uri)['test_db']["todos"]

class TodoListView(APIView):

    def get(self,_):
        # Implement this method - return all todo items from db instance above.
        return Response(json.loads(json_util.dumps([*db.find({})])), status=status.HTTP_200_OK)
        
    def post(self, request):  
        # Implement this method - accept a todo item in a mongo collection, persist it using db instance above.
        db.insert_one({"title":json.loads(request.body)['title']})
        return Response(self.get({}).data, status=status.HTTP_200_OK)

    def delete(self,request):
        db.delete_one({'_id': ObjectId(json.loads(request.body)["id"])})
        return Response(self.get({}).data, status=status.HTTP_200_OK)

