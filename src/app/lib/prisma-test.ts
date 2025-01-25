// src/app/lib/prisma-test.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Test database connection
    await prisma.$connect()
    console.log('✅ Successfully connected to the database')

    // Create test record
    const testCalculation = await prisma.mortgageCalculation.create({
      data: {
        input: {
          loanAmount: 300000,
          interestRate: 4.5,
          loanTerm: 30
        },
        result: {
          monthlyPayment: 1520.06,
          totalInterest: 247221.60
        }
      }
    })

    console.log('📝 Created test record:', testCalculation)
  } catch (error) {
    console.error('❌ Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

// Run the test
main()
