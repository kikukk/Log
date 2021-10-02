const roomRepository = require('../repository/roomRepository.js');

const save = data => {
	return roomRepository.save(data);
}

const getAll = () => {
	return roomRepository.getAll();
}

const revertDisplay = data => {
	return roomRepository.revertDisplay(data);
}

module.exports = {
	save,
	getAll,
	revertDisplay,
}

// addData()
// 		const room = {name:'testRoomName1',type:'type1',number:1};
// 		roomService.save(room);
// async getData()
// 		console.log(await roomService.getAll());
// revertDisplay()
// 		const room = {id:1};
// 		roomService.revertDisplay(room);
