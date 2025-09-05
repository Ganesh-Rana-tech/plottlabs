import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, agency, email, phone, message } = body;

    // Validate required fields
    if (!name || !agency || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    console.log('Demo request received:', {
      name,
      agency,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // For now, just return success
    return NextResponse.json(
      { 
        message: 'Demo request submitted successfully',
        id: `demo_${Date.now()}` 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing demo request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}