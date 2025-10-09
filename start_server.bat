@echo off
echo 🚀 Запуск сервера By Vadya Design...
echo.

REM Проверяем Python
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python не найден. Попробуем py...
    py --version >nul 2>&1
    if errorlevel 1 (
        echo ❌ Python не найден. Установите Python и попробуйте снова.
        pause
        exit /b 1
    ) else (
        echo ✅ Python найден через py
        echo 🌐 Запуск сервера на порту 8000...
        echo 📍 Сайт будет доступен по адресу: http://localhost:8000
        echo 📄 Основная страница: http://localhost:8000/kaito-style.html
        echo ⏹️  Для остановки нажмите Ctrl+C
        echo.
        py -m http.server 8000
    )
) else (
    echo ✅ Python найден
    echo 🌐 Запуск сервера на порту 8000...
    echo 📍 Сайт будет доступен по адресу: http://localhost:8000
    echo 📄 Основная страница: http://localhost:8000/kaito-style.html
    echo ⏹️  Для остановки нажмите Ctrl+C
    echo.
    python -m http.server 8000
)

pause

