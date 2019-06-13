const client = require('discord-rich-presence')('587584602562887690');
 
client.updatePresence({
  state: 'เขียนโค้ด C#',
  details: 'ใช้สมาธิ',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'logo_512_porton007',
  smallImageKey: 'butterfly-icon-png-8',
  instance: true,
});