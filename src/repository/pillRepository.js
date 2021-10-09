const baseRepository = require('./baseRepository.js')

const save = data => {
	const sql = 'insert into t_pill(name,type,important) values("'+data.name+'","'+data.type+'",'+data.important+')';
	return baseRepository.excuteSql(sql);
}

const getAll = async() => {
	const sql = 'select * from t_pill';
	return baseRepository.selectSql(sql);
}

const del = data => {
	const sql = 'update t_pill set deleted=1 where id='+data.id;
	return baseRepository.excuteSql(sql);
}

const revertImportant = async data => {
	const sql1 = 'select important from t_pill where id='+data.id;
	const newImportant = (await baseRepository.selectSql(sql1))[0].important===1?0:1;
	const sql2 = 'update t_pill set important='+newImportant+' where id='+data.id;
	return baseRepository.excuteSql(sql2);
}

module.exports = {
	save,
	getAll,
	del,
	revertImportant,
}
