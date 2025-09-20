import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send({ message: 'hiii' });
});

router.post('/', (req, res) => {
  const { value } = res.body;
  res.status(200).send({ message: 'post request reached' });
});

router.put('/', (req, res) => {
  const { value } = res.body;

  res.status(300).send({ message: 'Updated Successfully' });
});

router.delete('/', (res, req) => {
  const { value } = req.body;

  res.status(200).send({ message: 'deleted Successfully' });
});

export default router;
