import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  country?: string;
  areaOfInterest?: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    // 1. Input Validation
    const { fullName, company, email, message, areaOfInterest, country, phone } = body;

    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Valid full name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Valid organization/company name is required." },
        { status: 400 }
      );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "A valid corporate or institutional email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Inquiry message must contain at least 10 characters detailing requirements." },
        { status: 400 }
      );
    }

    // 2. Generate Unique Sovereign Tracking ID
    const timestamp = Date.now().toString(36).toUpperCase();
    const randomHex = Math.floor(Math.random() * 0xffff).toString(16).toUpperCase();
    const referenceId = `ANV-${timestamp}-${randomHex}`;

    // 3. Log In Secure Audit Trail (Simulating secure liaison dispatch)
    const auditRecord = {
      referenceId,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      company: company.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || "N/A",
      country: country?.trim() || "India",
      areaOfInterest: areaOfInterest || "Strategic Partnership",
      messageLength: message.trim().length,
      status: "QUEUED_FOR_VERIFICATION"
    };

    // In production, this can route to Resend/SendGrid/SMTP or database
    console.log(`[SKY WARDENS INQUIRY DISPATCH] Reference: ${referenceId}`, auditRecord);

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Institutional transmission received and queued for strategic liaison review.",
        receiptTimestamp: auditRecord.timestamp
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("[SKY WARDENS CONTACT ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server processing error. Transmission could not be completed."
      },
      { status: 500 }
    );
  }
}
