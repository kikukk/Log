const baseRepository = require('./baseRepository.js')

const save = data => {
	const sql = 'insert into t_room(name,type,number) values("'+data.name+'","'+data.type+'",'+data.number +')';
	return baseRepository.excuteSql(sql);
}

const getAll = async() => {
	const sql = 'select * from t_room';
	return baseRepository.selectSql(sql);
}

const revertDisplay = async data => {
	const sql1 = 'select display from t_room where id='+data.id;
	const newDisplay = (await baseRepository.selectSql(sql1))[0].display===1?0:1;
	const sql2 = 'update t_room set display='+newDisplay+' where id='+data.id;
	return baseRepository.excuteSql(sql2);
}


module.exports = {
	save,
	getAll,
	revertDisplay,
}
