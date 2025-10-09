#!/usr/bin/env python3
"""
Скрипт для проверки статуса сервера
"""
import socket
import requests
import sys

def check_port(port=8000):
    """Проверяет, открыт ли порт"""
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex(('localhost', port))
        sock.close()
        return result == 0
    except:
        return False

def check_http_response(port=8000):
    """Проверяет HTTP ответ сервера"""
    try:
        response = requests.get(f'http://localhost:{port}', timeout=2)
        return response.status_code == 200
    except:
        return False

def main():
    print("🔍 Проверка статуса сервера...")
    print()
    
    # Проверяем порт 8000
    port_open = check_port(8000)
    
    if port_open:
        print("✅ Порт 8000 открыт")
        
        # Проверяем HTTP ответ
        try:
            http_ok = check_http_response(8000)
            if http_ok:
                print("✅ HTTP сервер отвечает")
                print("🌐 Сайт доступен по адресу: http://localhost:8000")
                print("📄 Основная страница: http://localhost:8000/kaito-style.html")
            else:
                print("⚠️  Порт открыт, но HTTP сервер не отвечает")
        except Exception as e:
            print(f"⚠️  Ошибка при проверке HTTP: {e}")
    else:
        print("❌ Порт 8000 закрыт")
        print("💡 Сервер не запущен")
    
    print()
    
    # Проверяем другие порты
    for port in [3000, 5173, 8080]:
        if check_port(port):
            print(f"✅ Порт {port} открыт")
    
    print()
    print("📋 Инструкция:")
    print("1. Если сервер не запущен, выполните: python -m http.server 8000")
    print("2. Откройте браузер и перейдите по адресу: http://localhost:8000/kaito-style.html")

if __name__ == "__main__":
    main()

