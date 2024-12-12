import cors from 'cors';

const corsOptions = {
  origin: ['http://127.0.0.1:3000', 'https://hongjinhao.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export default cors(corsOptions);