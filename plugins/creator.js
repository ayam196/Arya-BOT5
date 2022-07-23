let handler = function (m) {
  this.sendContact(m.chat, '6281288779173', 'LichOfc', m)
  this.sendContact(m.chat, '6281296955567', 'Admin', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
