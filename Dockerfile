FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1

WORKDIR /usr/src/app

COPY pyproject.toml poetry.lock /usr/src/app/

RUN pip install --upgrade pip \
    && pip install poetry \
    && poetry config virtualenvs.create false \
    && poetry install --no-dev --no-interaction --no-ansi

COPY /app /usr/src/app/

RUN mkdir -p /usr/src/app/assets/files

# NEED TO UPDATE PORT
# EXPOSE 8050
# CMD ["gunicorn", "--bind", "0.0.0.0:8050", "--timeout", "360", "app:server"]
