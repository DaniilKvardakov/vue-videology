import { Router } from 'express';

const router = Router();


router.get('/', (_, res) => {
	res.sendFile('src/modules/views/index.html', {
		root: "."
	});
});

export default router;