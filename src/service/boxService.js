const boxRepository = require('../repository/boxRepository.js');
const _ = require('lodash');

const save = data => {
	if(data.pills.length<=0)return;
	const pills = _.toString(data.pills);
	_.set(data, 'pills', pills);
	return boxRepository.save(data);
}

const getAll = () => {
	return boxRepository.getAll();
}

const del = data => {
	return boxRepository.del(data);
}

const revertDisplay = data => {
	return boxRepository.revertDisplay(data);
}

module.exports = {
	save,
	getAll,
	del,
	revertDisplay,
}

// addData()
// 		const box = {
// 			type: 'type',
// 			pills: [1,2,3],
// 		};
// 		boxService.save(box);
// async getData()
// 		console.log('get all data', await boxService.getAll());
// del()
// 		const box = {id:1};
// 		boxService.del(box);
// revertDisplay()
// 		const box = {id:1};
// 		boxService.revertDisplay(box);
