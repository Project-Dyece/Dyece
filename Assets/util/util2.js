const status = {
	online: '<:online:752237028510531594> - Disponível/Online',
	idle: '<:idle:752237028220862618> - Ausente',
	dnd: '<:dnd:752237028409868359> - Não perturbe/Indisponível',
	offline: '<:offline:752238988173246468> - Offline/Invisível'
};

const activities = {
	PLAYING: 'Jogando',
	WATCHING: 'Assistindo',
	LISTENING: 'Ouvindo',
	STREAMING: 'Transmitindo',
	CUSTOM_STATUS: 'Status customizado'
};

const mesesN = {
	1: 'Janeiro',
	2: 'Fevereiro',
	3: 'Março',
	4: 'Abril',
	5: 'Maio',
	6: 'Junho',
	7: 'Julho',
	8: 'Agosto',
	9: 'Setembro',
	10: 'Outubro',
	11: 'Novembro',
	12: 'Dezembro'
};

const sim = ['sim', 'yes', 'y', 's', 'ye', 'yeah', 'yup', 'yea', 'ya', 'hai', 'si', 'sí', 'oui', 'はい', 'correto', 'continuar', 'siis', 'simsim', 'sim sim'];

const nao = ['não', 'nao', 'no', 'n', 'nah', 'nope', 'nop', 'iie', 'いいえ', 'non', 'nom', 'se foder'];

module.exports.status = status;
module.exports.activities = activities;
module.exports.mesesN = mesesN;
module.exports.sim = sim;
module.exports.nao = nao
