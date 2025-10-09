@echo off
echo 🚀 Запуск By Vadya Design...
echo.

REM Проверка Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python не найден. Установите Python 3.7+ и попробуйте снова.
    pause
    exit /b 1
)

echo ✅ Python найден
python --version

REM Установка зависимостей
echo 📦 Установка зависимостей...
pip install -r requirements.txt

REM Запуск сервера
echo 🌐 Запуск сервера...
echo 📍 Сайт будет доступен по адресу: http://localhost:8000
echo ⏹️  Для остановки нажмите Ctrl+C
echo.

python app.py
pause
