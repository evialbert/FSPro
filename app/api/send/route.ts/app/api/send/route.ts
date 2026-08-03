import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nume, email, telefon, companie, serviciu, mesaj } = body;

    // Verificare rapidă pentru datele esențiale
    if (!email || !nume || !mesaj) {
      return NextResponse.json(
        { error: 'Câmpurile nume, email și mesaj sunt obligatorii.' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Fine Solutions Website <contact@finesolutionspro.ro>',
      to: ['finesolutionspro@gmail.com'],
      // Schimbat înapoi la replyTo (formato-ul acceptat de TypeScript în versiunea ta)
      replyTo: email, 
      subject: `Lead Nou: ${serviciu || 'Contact'} - ${nume}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px;">Mesaj nou de pe site</h2>
          <p><strong>Nume:</strong> ${nume}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefon:</strong> ${telefon || 'Nespecificat'}</p>
          <p><strong>Companie:</strong> ${companie || 'Nespecificată'}</p>
          <p><strong>Serviciu de interes:</strong> ${serviciu || 'Nespecificat'}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Mesaj:</strong></p>
          <blockquote style="background: #f8fafc; border-left: 4px solid #0284c7; margin: 0; padding: 10px 15px; font-style: italic;">
            ${mesaj.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Eroare Resend:", error);
    return NextResponse.json(
      { error: 'Eroare la trimiterea email-ului' }, 
      { status: 500 }
    );
  }
}