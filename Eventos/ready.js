module.exports = async (client) => {


  console.log(`Logado como ${client.user.tag}! (${client.user.id})`);
	client.guilds.cache.find((a) => a.id === '747643336185348268').channels.cache.find((a) => a.id === '747922393623691356').send(`Online!`);
	setInterval(async () => {
	let users = client.users.cache.size - 1;

    await client.user.setActivity(`${users} usuário${users !== 1 ? 's' : ''}`, {type: 'WATCHING'})
    .catch(err => console.error());
  }, 15000);


}
