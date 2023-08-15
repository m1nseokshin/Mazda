// pages/api/login.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // 실제 로그인 처리 로직을 구현
    if (email === 'user@example.com' && password === 'password') {
      // 로그인 성공 시 토큰 발급
      const user = { id: 123, email: 'user@example.com' };
      const secretKey = 'your_secret_key_here';
      const token = jwt.sign(user, secretKey, { expiresIn: '1h' });

      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: '로그인 실패' });
    }
  } else {
    res.status(405).end();
  }
}
