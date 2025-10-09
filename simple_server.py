#!/usr/bin/env python3
"""
Простой HTTP сервер для запуска сайта без установки Flask
"""
import http.server
import socketserver
import webbrowser
import os
import sys
from pathlib import Path

# Порт для сервера
PORT = 8000

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Добавляем CORS заголовки для корректной работы
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    # Проверяем, что мы в правильной директории
    if not os.path.exists('kaito-style.html'):
        print("❌ Файл kaito-style.html не найден!")
        print("Убедитесь, что вы запускаете скрипт из папки с сайтом")
        return
    
    # Создаем сервер
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print("🚀 Запуск сервера By Vadya Design...")
        print(f"📍 Сайт доступен по адресу: http://localhost:{PORT}")
        print(f"📄 Основная страница: http://localhost:{PORT}/kaito-style.html")
        print("⏹️  Для остановки нажмите Ctrl+C")
        print()
        
        # Автоматически открываем браузер
        try:
            webbrowser.open(f'http://localhost:{PORT}/kaito-style.html')
            print("🌐 Браузер открыт автоматически")
        except:
            print("⚠️  Не удалось открыть браузер автоматически")
            print("Откройте браузер и перейдите по адресу выше")
        
        print()
        
        # Запускаем сервер
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Сервер остановлен")
            httpd.shutdown()

if __name__ == "__main__":
    main()

