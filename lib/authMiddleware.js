import { verifyToken } from './auth';

export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Token en el formato "Bearer token"

  if (!token) {
    return res.status(401).json({ message: 'No se proporciona el token de autenticación' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Token inválido o expirado' });
  }

  req.user = decoded; // Guardamos los datos del usuario en el request
  next();
};
