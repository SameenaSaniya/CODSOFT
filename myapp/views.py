from django.shortcuts import render, redirect
from .models import TodoItem
from django.utils import timezone


def todo_list(request):
    items = TodoItem.objects.all()
    today_date = timezone.now().date()
    return render(request, "index.html", {"items": items, "today_date": today_date})


def add_todo(request):
    if request.method == "POST":
        title = request.POST.get("title")
        description = request.POST.get("description")
        TodoItem.objects.create(title=title, description=description)
    return redirect("todo_list")


def complete_todo(request, todo_id):
    todo = TodoItem.objects.get(pk=todo_id)
    todo.status = True
    todo.save()
    return redirect("todo_list")


def delete_todo(request, todo_id):
    todo = TodoItem.objects.get(pk=todo_id)
    todo.delete()
    return redirect("todo_list")
