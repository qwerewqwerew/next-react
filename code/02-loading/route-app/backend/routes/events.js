const express = require("express");

const { getAll, get, add, replace, remove } = require("../data/event");
const { isValidText, isValidDate, isValidImageUrl } = require("../util/validation");

const router = express.Router();

router.get("/", async (req, res, next) => {
	try {
		const events = await getAll();
		setTimeout(() => {
			console.log("backend");
			res.json({ events: events });
		}, 1500);
		//res.json({ events: events });
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const event = await get(req.params.id);
		res.json({ event: event });
	} catch (error) {
		next(error);
	}
});

router.post("/", async (req, res, next) => {
	const data = req.body;

	let errors = {};

	if (!isValidText(data.title)) {
		errors.title = "제목을 확인해 주세요.";
	}

	if (!isValidText(data.description)) {
		errors.description = "설명을 확인해 주세요.";
	}

	if (!isValidDate(data.date)) {
		errors.date = "날짜를 확인해 주세요.";
	}

	if (!isValidImageUrl(data.image)) {
		errors.image = "이미지를 확인해 주세요.";
	}

	if (Object.keys(errors).length > 0) {
		return res.status(422).json({
			message: "잘못된 형식이 있어 등록에 실패 했습니다.",
			errors,
		});
	}

	try {
		await add(data);
		res.status(201).json({ message: "등록에 성공 했습니다.", event: data });
	} catch (error) {
		next(error);
	}
});

router.patch("/:id", async (req, res, next) => {
	const data = req.body;

	let errors = {};

	if (!isValidText(data.title)) {
		errors.title = "제목을 확인 해주세요.";
	}

	if (!isValidText(data.description)) {
		errors.description = "설명을 확인 해주세요.";
	}

	if (!isValidDate(data.date)) {
		errors.date = "날짜를 확인 해주세요.";
	}

	if (!isValidImageUrl(data.image)) {
		errors.image = "이미지를 확인 해주세요.";
	}

	if (Object.keys(errors).length > 0) {
		return res.status(422).json({
			message: "잘못된 형식이 있어 수정에 실패 했습니다.",
			errors,
		});
	}

	try {
		await replace(req.params.id, data);
		res.json({ message: "수정에 성공 했습니다.", event: data });
	} catch (error) {
		next(error);
	}
});

router.delete("/:id", async (req, res, next) => {
	try {
		await remove(req.params.id);
		res.json({ message: "삭제 했습니다." });
	} catch (error) {
		next(error);
	}
});

module.exports = router;
