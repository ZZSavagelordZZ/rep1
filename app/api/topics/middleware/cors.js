import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});

export default function handler(req, res, next) {
  return cors(req, res, next);
}
