import jwt from 'jsonwebtoken';
import userModel from '@/models/userModel';
import { NextResponse } from 'next/server'; 

const JWT_SECRET = process.env.JWT_SECRET;

export async function authenticateRequest(req) {
  try {
    const authHeader = req.headers.get('authorization');
    console.log(authHeader,"authheder")
    if (!authHeader) {
      return {
        userId: null,
        error: new NextResponse(
          JSON.stringify({ message: 'Unauthorized: No token provided' }),
          { status: 401 }
        ),
      };
    }

    const decoded = jwt.verify(authHeader, JWT_SECRET);

    console.log(decoded,"decodedede")
    const user = await userModel.findOne({ _id: decoded.userId });
    if (!user) {
      return {
        userId: null,
        error: new NextResponse(
          JSON.stringify({ message: 'Unauthorized: User not found' }),
          { status: 401 }
        ),
      };
    }

    return { userId: decoded.userId, error: null };

  } catch (error) {
    console.error('Authentication error:', error);
    return {
      userId: null,
      error: new NextResponse(
        JSON.stringify({ message: 'Unauthorized: Invalid token' }),
        { status: 401 }
      ),
    };
  }
}
