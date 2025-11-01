import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Check if API key is set
        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ 
                error: 'Email service is not configured. Please contact the administrator.' 
            }, { status: 500 });
        }

        // Check if contact email is set
        const contactEmail = process.env.CONTACT_EMAIL || 'info@booskills.com';
        const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';

        // Parse form data
        const body = await request.json();
        const { name, email, message, hcaptchaToken } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json({ 
                error: 'All fields are required' 
            }, { status: 400 });
        }

        // Verify hCaptcha token (only if hCaptcha is configured)
        const hcaptchaSecret = process.env.HCAPTCHA_SECRET_KEY;
        if (hcaptchaSecret) {
            if (!hcaptchaToken) {
                return NextResponse.json({ 
                    error: 'Please complete the verification challenge' 
                }, { status: 400 });
            }
            const verifyResponse = await fetch('https://hcaptcha.com/siteverify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    secret: hcaptchaSecret,
                    response: hcaptchaToken,
                }),
            });

            const verifyData = await verifyResponse.json();

            if (!verifyData.success) {
                console.error('hCaptcha verification failed:', verifyData);
                return NextResponse.json({ 
                    error: 'Verification failed. Please try again.' 
                }, { status: 400 });
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json({ 
                error: 'Invalid email address' 
            }, { status: 400 });
        }

        // Escape HTML to prevent XSS attacks
        const escapeHtml = (text: string) => {
            const map: { [key: string]: string } = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, (m) => map[m]);
        };

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

        // Send email to contact inbox
        const { data, error } = await resend.emails.send({
            from: fromEmail,
            to: contactEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${safeName}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${safeName}</p>
                <p><strong>Email:</strong> ${safeEmail}</p>
                <p><strong>Message:</strong></p>
                <p>${safeMessage}</p>
                <hr>
                <p><small>This email was sent from the BooSkills contact form.</small></p>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the BooSkills contact form.
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ 
                error: 'Failed to send email. Please try again later.' 
            }, { status: 500 });
        }

        // Optionally send auto-reply to user
        try {
            await resend.emails.send({
                from: fromEmail,
                to: email,
                subject: 'Thank you for contacting BooSkills',
                html: `
                    <h2>Thank you for contacting BooSkills!</h2>
                    <p>Hi ${safeName},</p>
                    <p>We have received your message and will get back to you within 24 hours.</p>
                    <p>Your message:</p>
                    <blockquote>${safeMessage}</blockquote>
                    <hr>
                    <p>Best regards,<br><strong>BooSkills Team</strong></p>
                `,
            });
        } catch (autoReplyError) {
            // Log but don't fail the request if auto-reply fails
            console.error('Auto-reply failed:', autoReplyError);
        }

        return NextResponse.json({ 
            success: true, 
            message: 'Your message has been sent successfully! We will get back to you soon.' 
        });
    } catch (error: any) {
        console.error('Contact form error:', error);
        return NextResponse.json({ 
            error: 'An error occurred. Please try again later.' 
        }, { status: 500 });
    }
}

