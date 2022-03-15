# Choose an appropriate slim base image.
FROM python:alpine
#keeps python from generating .pyc files in the container 
ENV PYTHONDONTWRITEBYTECODE=1
# turns on buffering for eaiser container logging
ENV PYTHONBUFFERED=1

WORKDIR /app
COPY ./ ./

# requirements.txt are automatically placed in local computer but not in container. so that when you run pip install it doesnt crash
RUN python -m pip install --upgrade pip
RUN pip install -r requirements.txt

RUN pip install django

RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app

USER appuser

EXPOSE 8000

CMD ["python", "drf_jwt_backend/manage.py", "runserver", "0.0.0.0:8000"]