
const { Command } = require('../../CommandoV12/src/index.js');
const { configsOffDB } = require('../../index.js');

module.exports = class config extends Command {
  constructor(client) {
    super(client, {
      name: 'config',
      aliases: ['configurar', 'setar'],
      group: 'adm',
      memberName: 'config',
      userPermissions: ['MANAGE_GUILD'],
      guildOnly: true,
      description: 'Configure o canal de bem vindo e de suporte.',
      args: [
        {
          key: 'config',
          prompt: 'Você gostaria de adicionar ou remover a configuraçãos?(add/remover)',
          type: 'string',
          oneOf: ['add', 'remover', 'remove', 'rem'],
        },
        {
          key: 'nome',
          prompt: 'valor para a configuração',
          type: 'boolean',
          default: '',
				}
			],
    });
  }

  async run(message, { config, nome }) { //alterações no firebase
    switch (config) {
        case 'autoreact':
          configsOffDB.get(message.guild.id).update('autoreact', nome);
        case 'economia-global':
          configsOffDB.get(message.guild.id).update('economia-global', nome);
          
      }
  }
};

