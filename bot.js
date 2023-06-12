const TelegramBot = require('node-telegram-bot-api');
const token = '6153171374:AAGjzjNWdfsEzMELVUDGDENzmnEXgHTB-uA';
const codes = ['code1', 'code2', 'code3', 'code4'];

const bot = new TelegramBot(token, { polling: true });

function sendCode(code) {
    const channel = '-1001729594756';
    const inlineKeyboard = {
        inline_keyboard: [[{
            text: 'Join 100 TRX giveaway',
            url: 'https://google.com'
        }]]
    };
    
    const message = `<b>100 TRX Giveaway Code:</b>\n\n${code}`;

    const options = {
        parse_mode: 'HTML',
        reply_markup: JSON.stringify(inlineKeyboard)
    };

    bot.sendMessage(channel, message, options);
}


console.log('Bot is starting...');

bot.once('ready', () => {
    console.log('Bot is ready');
    sendCode(codes[0]);
});

let index = 0; // Change the index to start with the second code
const interval = setInterval(() => {
    if (index >= codes.length) {
        clearInterval(interval);
        bot.sendMessage('-982567887', 'I am hungry');
        return;
    }
    
    sendCode(codes[index]);
    index++;
}, 5000);



bot.on('polling_error', (error) => {
    console.log('Polling error:', error);
});
