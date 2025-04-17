

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      origin,
      destination,
      commodity,
      serviceType,
      package: pkg,
      dimensions,
      options,
      name,
      email,
      phone,
    } = body;

    if (!origin || !destination || !commodity || !serviceType || !pkg || !dimensions) {
      return NextResponse.json({ error: 'Missing shipment details' }, { status: 400 });
    }
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing personal information' }, { status: 400 });
    }

  
    console.log('Received GetInTouch submission:', {
      origin,
      destination,
      commodity,
      serviceType,
      package: pkg,
      dimensions,
      options,
      name,
      email,
      phone,
    });

    return NextResponse.json({ message: 'Information submitted successfully' });
  } catch (error) {
    console.error('Error in GetInTouch API:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
