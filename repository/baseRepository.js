const DBName = 'LogsDB';

function openSqlite() {
	return new Promise((resolve, reject) => {
		plus.sqlite.openDatabase({
			name: DBName, //数据库名称
			path: '_doc/logs.db', //数据库地址，uniapp推荐以下划线为开头，这到底存在哪里去了，我也不清楚，哈哈
			success(e) {
				// console.log("open LogsDB");
				resolve(e); //成功回调
			},
			fail(e) {
				reject(e);
			}
		})
	})
}

const initPillTable = () => {
	const initPillTableSql =
		'create table if not exists t_pill("id" INTEGER PRIMARY KEY AUTOINCREMENT,"name" varchar(100),"type" varchar(100),"deleted" tinyint default 0,"important" tinyint)';
	// console.log("init t_pill");
	excuteSql(initPillTableSql);
}

const initRoomTable = () => {
	const initRoomTableSql =
		'create table if not exists t_room("id" INTEGER PRIMARY KEY AUTOINCREMENT,"name" varchar(100),"type" varchar(100),"number" INTEGER,"display" tinyint default 1)';
	// console.log("init t_room");
	excuteSql(initRoomTableSql);
}

const initBoxTable = () => {
	const initBoxTableSql =
		'create table if not exists t_box("id" INTEGER PRIMARY KEY AUTOINCREMENT,"type" varchar(100),"pills" varchar(100),"display" tinyint default 1,"deleted" tinyint default 0)';
	// console.log("init t_room");
	excuteSql(initBoxTableSql);
}

const showTables = () => {
	const showTablesSql = 'select * from sqlite_master';
	return selectSql(showTablesSql);
}

const delDB = name => {
	const delDBSql = 'drop table ' + name;
	excuteSql(delDBSql);
}

const excuteSql = async sql => {
	try {
		await _excuteSql(sql);
	} catch (e) {
		return e;
	}
	return {
		code: 200
	}
}

const selectSql = async sql => {
	try {
		return await {
			code: 200,
			data: await _selectSql(sql)
		};
	} catch (e) {
		// console.log(e);
		return e;
	}
}

const _excuteSql = sql => {
	return new Promise((resolve, reject) => {
		//创建表格在executeSql方法里写
		plus.sqlite.executeSql({
			name: DBName,
			sql,
			success(e) {
				resolve(e);
			},
			fail(e) {
				console.log(e);
				reject(e);
			}
		})
	})
}

const _selectSql = sql => {
	return new Promise((resolve, reject) => {
		//创建表格在executeSql方法里写
		plus.sqlite.selectSql({
			name: DBName,
			sql,
			success(e) {
				resolve(e);
			},
			fail(e) {
				console.log(e);
				reject(e);
			}
		})
	})
}

module.exports = {
	openSqlite,
	initPillTable,
	initRoomTable,
	initBoxTable,
	showTables,
	delDB,
	excuteSql,
	selectSql,
}
