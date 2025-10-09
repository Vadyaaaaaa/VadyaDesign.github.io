#!/bin/bash

echo "🚀 Запуск By Vadya Design..."
echo ""

# Проверка Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 не найден. Установите Python 3.7+ и попробуйте снова."
    exit 1
fi

# Проверка pip
if ! command -v pip3 &> /dev/null; then
    echo "❌ pip3 не найден. Установите pip и попробуйте снова."
    exit 1
fi

echo "✅ Python найден: $(python3 --version)"

# Установка зависимостей
echo "📦 Установка зависимостей..."
pip3 install -r requirements.txt

# Запуск сервера
echo "🌐 Запуск сервера..."
echo "📍 Сайт будет доступен по адресу: http://localhost:8000"
echo "⏹️  Для остановки нажмите Ctrl+C"
echo ""


python3 app.py
