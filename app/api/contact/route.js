import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { prisma } from '@/lib/prisma';
import { validateContactForm, sanitizeString } from '@/lib/validations';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Service labels mapping
const SERVICE_LABELS = {
  ml: 'Machine Learning Solutions',
  viz: 'Data Visualization & BI Dashboards',
  mlops: 'MLOps Solutions',
  db: 'Database Design & SQL Development'
};

/**
 * POST handler for contact form submissions
 * Validates, stores in database, and sends notification emails
 */
export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    
    // Sanitize all input fields
    const sanitizedData = {
      firstName: sanitizeString(body.firstName, 50),
      lastName: sanitizeString(body.lastName, 50),
      email: sanitizeString(body.email, 254),
      phone: sanitizeString(body.phone, 20),
      service: sanitizeString(body.service, 20),
      message: sanitizeString(body.message, 5000)
    };
    
    // Validate form data
    const validation = validateContactForm(sanitizedData);
    
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: validation.errors 
        },
        { status: 400 }
      );
    }
    
    // Store message in database
    const contactMessage = await prisma.contactMessage.create({
      data: {
        firstName: sanitizedData.firstName,
        lastName: sanitizedData.lastName,
        email: sanitizedData.email,
        phone: sanitizedData.phone || null,
        service: sanitizedData.service,
        message: sanitizedData.message
      }
    });
    
    // Get service label for emails
    const serviceLabel = SERVICE_LABELS[sanitizedData.service] || sanitizedData.service;
    
    // Send notification email to site owner
    const notificationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a1a; color: #00ff99; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 3px solid #00ff99; }
            .message-box { white-space: pre-wrap; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📧 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">From:</div>
                <div class="value">${sanitizedData.firstName} ${sanitizedData.lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
              </div>
              
              ${sanitizedData.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Service Interested In:</div>
                <div class="value">${serviceLabel}</div>
              </div>
              
              <div class="field">
                <div class="label">Message:</div>
                <div class="value message-box">${sanitizedData.message}</div>
              </div>
              
              <div class="footer">
                Submitted on ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata', dateStyle: 'full', timeStyle: 'long' })}
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    // Send confirmation email to user
    const confirmationEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #1a1a1a; color: #00ff99; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .message { margin: 20px 0; }
            .highlight { color: #00ff99; font-weight: bold; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #777; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✅ Message Received!</h2>
            </div>
            <div class="content">
              <p>Hi ${sanitizedData.firstName},</p>
              
              <div class="message">
                <p>Thank you for reaching out! I've received your message regarding <span class="highlight">${serviceLabel}</span>.</p>
                
                <p>I'll review your inquiry and get back to you as soon as possible, typically within 1-2 business days.</p>
                
                <p>In the meantime, feel free to check out my portfolio for examples of similar projects I've worked on.</p>
              </div>
              
              <p>Best regards,<br>
              <strong>Muhammed Sinan</strong><br>
              Data Scientist & ML Engineer</p>
              
              <div class="footer">
                <p>This is an automated confirmation email. Please do not reply directly to this message.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
    
    try {
      // Send notification email to site owner
      await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: process.env.CONTACT_EMAIL || 'realmuhammedsinan@gmail.com',
        subject: `New Contact Form: ${serviceLabel} - ${sanitizedData.firstName} ${sanitizedData.lastName}`,
        html: notificationEmailHtml
      });
      
      // Send confirmation email to user
      await resend.emails.send({
        from: process.env.FROM_EMAIL,
        to: sanitizedData.email,
        subject: 'Thank you for contacting me!',
        html: confirmationEmailHtml
      });
    } catch (emailError) {
      // Log email error but don't fail the request since message is already saved
      console.error('Failed to send emails:', emailError);
      // Still return success since the message was saved to database
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your message has been sent successfully! I\'ll get back to you soon.',
        id: contactMessage.id
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.',
        error: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}
