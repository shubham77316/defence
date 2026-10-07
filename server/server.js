/**
 * ANUVYOM Sovereign Strategic Systems - Standalone Backend Server
 * Node.js / Express REST API Service
 */

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Health Check API
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    brand: "ANUVYOM",
    version: "2.4.0-standalone-node",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    services: {
      inquiryGateway: "operational",
      telemetryEngine: "operational",
      encryption: "AES-256-GCM"
    }
  });
});

// Contact / Inquiry API
app.post("/api/contact", (req, res) => {
  try {
    const { fullName, company, email, phone, country, areaOfInterest, message } = req.body;

    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({ success: false, message: "Valid full name is required." });
    }
    if (!company || company.trim().length < 2) {
      return res.status(400).json({ success: false, message: "Organization name is required." });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Valid email address is required." });
    }
    if (!message || message.trim().length < 10) {
      return res.status(400).json({ success: false, message: "Message must be at least 10 characters." });
    }

    const referenceId = `ANV-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 0xffff).toString(16).toUpperCase()}`;

    console.log(`[ANUVYOM INQUIRY DISPATCH - NODE BACKEND] Reference: ${referenceId}`, {
      referenceId,
      fullName,
      company,
      email,
      phone,
      country,
      areaOfInterest,
      timestamp: new Date().toISOString()
    });

    return res.status(201).json({
      success: true,
      referenceId,
      message: "Transmission received and queued for strategic liaison review."
    });
  } catch (error) {
    console.error("[ANUVYOM SERVER ERROR]", error);
    return res.status(500).json({ success: false, message: "Internal server processing error." });
  }
});

// Alias for inquiry
app.post("/api/inquiry", (req, res) => {
  req.url = "/api/contact";
  return app._router.handle(req, res);
});

// Start Server if run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`ANUVYOM Strategic Backend Service listening on port ${PORT}`);
  });
}

module.exports = app;
