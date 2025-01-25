import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    const calculation = await prisma.mortgageCalculation.create({
      data: {
        input: data,
        result: {} // Add real calculations here
      }
    })
    
    return NextResponse.json(calculation)
  } catch (error) {
    return NextResponse.json(
      { error: 'Calculation failed' }, 
      { status: 500 }
    )
  }
}
