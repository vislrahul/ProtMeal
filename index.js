require('dotenv').config();

const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start command
bot.start((ctx) => {
  ctx.reply(
    `👋 Welcome to ProtMeal!

Fuel your potential with premium high-protein meals 💪

Choose your preference below:`,
    {
      reply_markup: {
        keyboard: [
          ['🥩 Non-Veg Meals'],
          ['🥗 Veg Meals']
        ],
        resize_keyboard: true
      }
    }
  );
});

// Non-veg button
bot.hears('🥩 Non-Veg Meals', (ctx) => {
  ctx.reply(
    `🔥 Non-Veg Protein Plans

✔ High protein chicken meals
✔ Eggs, curd & salad included
✔ Designed for muscle gain & fitness

Monthly Plan:
₹4999 / 26 Meals`
  );
});

// Veg button
bot.hears('🥗 Veg Meals', (ctx) => {
  ctx.reply(
    `🥗 Veg Protein Plans

✔ Paneer & sprouts based meals
✔ High protein vegetarian options
✔ Healthy & freshly prepared

Monthly Plan:
₹4499 / 26 Meals`
  );
});

// Launch bot
bot.launch();

console.log('ProtMeal Bot Running...');
