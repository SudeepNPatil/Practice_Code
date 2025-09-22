import { Router } from 'express';
import Student from '../modals/student.modal.js';

const studentRoute = Router();

studentRoute.get('/', async (req, res) => {
  const stuentinfo = await Student.find();

  res.status(200).send({ data: stuentinfo });
});

studentRoute.post('/', async (req, res) => {
  const { name, age, email, course } = req.body;

  const newstudent = new Student({
    name,
    age,
    email,
    course,
  });
  await newstudent.save();

  res.status(201).send({ message: 'student record Created' });
});

studentRoute.get('/:id', async (req, res) => {
  const { id } = req.params;

  const getstudent = await findById(id);

  res.status(200).send({ data: getstudent });
});

studentRoute.put('/:id', async () => {
  const { id, name, age, email, course } = req.params;

  const updatestudent = await Student.updateOne(
    { _id: id },
    { name: name, age: age, email: email, course: course }
  );

  res.status(200).send({ data: updatestudent });
});

studentRoute.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deletestudent = await Student.deleteOne({ _id: id });

  res.status(204).send({ message: 'student deleted successfully' });
});

export default studentRoute;
