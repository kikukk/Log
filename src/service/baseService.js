const baseRepository = require('../repository/baseRepository.js');

const initDB = async() =>{
	console.log("initDB");
	await _openSqlite();
	await _initPillTable();
	await _initRoomTable();
	await _initBoxTable();
	// await _delDB('t_pill');
	// await _delDB('t_room');
	// console.log(await _showTables());
}

const _openSqlite = () =>{
	// console.log("_openSqlite:");
	baseRepository.openSqlite();
}

const _initPillTable = () => {
	// console.log("_initPillTable:");
	baseRepository.initPillTable();
}

const _initRoomTable = () => {
	// console.log("_initRoomTable:");
	baseRepository.initRoomTable();
}

const _initBoxTable = () => {
	// console.log("_initBoxTable:");
	baseRepository.initBoxTable();
}

const _showTables = () => {
	console.log("show tables:");
	return baseRepository.showTables();
}

const _delDB = (name) => {
	console.log("_delDB:"+name);
	baseRepository.delDB(name);
}

module.exports = {
	initDB,
}