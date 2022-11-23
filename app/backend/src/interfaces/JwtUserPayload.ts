import { JwtPayload } from 'jsonwebtoken';

export default interface JwtUserPayload extends JwtPayload {
  id: number;
  role: string;
}
