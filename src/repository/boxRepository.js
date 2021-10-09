const baseRepository = require('./baseRepository.js')

const save = data => {
	const sql = 'insert into t_box(type,pills) values("'+data.type+'","'+data.pills+'")';
	return baseRepository.excuteSql(sql);
}

const getAll = async() => {
	const sql = 'select * from t_box';
	return baseRepository.selectSql(sql);
}

const del = data => {
	const sql = 'update t_box set deleted=1 where id='+data.id;
	return baseRepository.excuteSql(sql);
}

const revertDisplay = async data => {
	const sql1 = 'select display from t_box where id='+data.id;
	const newDisplay = (await baseRepository.selectSql(sql1))[0].display===1?0:1;
	const sql2 = 'update t_box set display='+newDisplay+' where id='+data.id;
	return baseRepository.excuteSql(sql2);
}

module.exports = {
	save,
	getAll,
	del,
	revertDisplay,
}
