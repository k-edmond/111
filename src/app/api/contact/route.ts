'use server';

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    // Default: 163 email SMTP
    const smtpHost = process.env.SMTP_HOST || 'smtp.163.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465');
    const smtpUser = process.env.SMTP_USER || 'yuhailan316@163.com';
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'elegenn@naver.com';
    const useSSL = process.env.SMTP_SSL === 'true' || true;

    // If no password configured, return a message
    if (!smtpPass) {
      console.log('Contact form submission (SMTP not configured):', data);
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (email service not configured)',
        data: {
          name: data.name,
          company: data.company,
          email: data.email,
          message: data.message,
        },
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
    });

    // Email content
    const mailOptions = {
      from: `"ELEGENN Website" <${smtpUser}>`,
      to: toEmail,
      replyTo: data.email,
      subject: `[ELEGENN Website Contact] New inquiry from ${data.name}${data.company ? ` (${data.company})` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ABAB5; border-bottom: 2px solid #0ABAB5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">
                Name:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${data.name}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Company:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                ${data.company || '-'}
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">
                Email:
              </td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="mailto:${data.email}">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; font-weight: bold; vertical-align: top;">
                Message:
              </td>
              <td style="padding: 10px; vertical-align: top; white-space: pre-wrap;">
                ${data.message}
              </td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0; font-size: 12px; color: #666;">
              This message was sent from the ELEGENN GLOBAL website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${data.name}
        Company: ${data.company || '-'}
        Email: ${data.email}
        Message: ${data.message}
        
        ---
        This message was sent from the ELEGENN GLOBAL website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
