import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const generateToken = async (id, req, res, next) => {
    const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24h" })
    return token
}
export const protectedRoutees = (req, res) => {
    const authHeader = req.headers.authorization
    if (!authHeader || !authHeader.startswith("Bearer ")) {
        res.status(401).json({ message: "Invalid token" })
    }
    const token = authHeader.split(' ')[1]
}