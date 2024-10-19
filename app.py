import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

API_TOKEN = '8131913659:AAEm7oK9b81ZpJAgNAf0rjTpsvLQo-dSrVg'
bot = telebot.TeleBot(API_TOKEN)

# Главное меню
@bot.message_handler(commands=['start'])
def send_welcome(message):
    markup = InlineKeyboardMarkup()
    button1 = InlineKeyboardButton("📘 Курсы", callback_data='courses')
    button2 = InlineKeyboardButton("📊 Прогресс", callback_data='progress')
    button3 = InlineKeyboardButton("⚙️ Настройки", callback_data='settings')
    markup.add(button1, button2, button3)
    bot.send_message(message.chat.id, "Добро пожаловать в LMS! Выберите действие:", reply_markup=markup)

# Обработка нажатий на кнопки
@bot.callback_query_handler(func=lambda call: True)
def callback_inline(call):
    if call.data == 'courses':
        show_courses(call.message)
    elif call.data == 'progress':
        show_progress(call.message)
    elif call.data == 'settings':
        show_settings(call.message)

# Курсы
def show_courses(message):
    markup = InlineKeyboardMarkup()
    # Пример курсов
    course1 = InlineKeyboardButton("💻 Программирование", web_app=WebAppInfo(url="https://mxn6.github.io/program/"))
    course2 = InlineKeyboardButton("🤖 Искусственный интеллект", web_app=WebAppInfo(url="https://example.com/course/ai"))
    markup.add(course1, course2)
    bot.send_message(message.chat.id, "Выберите курс:", reply_markup=markup)

# Прогресс
def show_progress(message):
    # Пример текста с прогрессом пользователя
    bot.send_message(message.chat.id, "Ваш прогресс:\n\nПрограммирование: 80%\nИскусственный интеллект: 60%")

# Настройки
def show_settings(message):
    bot.send_message(message.chat.id, "Здесь вы можете управлять настройками аккаунта.")

if __name__ == '__main__':
    bot.infinity_polling()