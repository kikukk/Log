const pillRepository = require('../repository/pillRepository.js');

const save = data => {
	return pillRepository.save(data);
}

const getAll = () => {
	return pillRepository.getAll();
}

const del = data => {
	return pillRepository.del(data);
}

const revertImportant = data => {
	return pillRepository.revertImportant(data);
}

module.exports = {
	save,
	getAll,
	del,
	revertImportant,
}

// addData() 
// 		const pill = {
// 			name:'test',
// 			type: 'type1',
// 			isDeleted: '0',
// 			isImportant: '0'
// 		};
// 		pillService.save(pill);
// async getData() 
// 		console.log("getData",await pillService.getAll());
// delData() 
// 		const pill = {
// 			id: '3',
// 		};
// 		pillService.del(pill);
// revertImportant()
// 		const pill = {
// 			id: '3',
// 		};
// 		pillService.revertImportant(pill);