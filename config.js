/**
   * Create By Anjarman20.
   * Contact Me on wa.me/6281328497520
   * Follow https://github.com/Anjarman200
*/

//━━━━━━━━━━━━━━━[ BATAS ]━━━━━━━━━━━━━━━━━//
const fs = require('fs')
const chalk = require('chalk')

//━━━━━━━━━━━━━━━[ APIKEY TERPISAH ]━━━━━━━━━━━━━━━━━//
lolkey = 'Apikey1'
//━━━━━━━━━━━━━━━[ SETTINGS ]━━━━━━━━━━━━━━━━━//
global.owner = ['6281328497520','6281328497520','6282146354240','6281394055714','6281227459135']
global.premium = ['6281328497520']
global.packname = 'Man-Bot-MD'
global.author = 'Anjarman200'
global.sessionName = 'hisoka'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Ｓｕｃｃｅｓ．．．',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '📩 𝑫𝒂𝒕𝒂 𝑰𝒏 𝑷𝒓𝒐𝒄𝒆𝒔𝒔, 𝑷𝒍𝒆𝒂𝒔𝒆 𝑾𝒂𝒊𝒕 𝑨 𝑴𝒊𝒏𝒖𝒕𝒆',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/kitzuna.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
