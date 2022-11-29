import { JwtPayload } from 'jsonwebtoken';

interface JwtUserPayload extends JwtPayload {
  id: number;
  role: string;
}

export default JwtUserPayload;
