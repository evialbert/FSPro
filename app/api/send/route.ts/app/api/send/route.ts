import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nume, email, telefon, companie, serviciu, mesaj } = body;

    const data = await resend.emails.send({
      from: 'Fine Solutions Website <onboarding@resend.dev>',
      to: ['evialbert@gmail.com'],
      subject: `Lead Nou: ${serviciu} - ${nume}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5;">
          <h1>Mesaj nou de pe site</h1>
          <p><strong>Nume:</strong> ${nume}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${telefon}</p>
          <p><strong>Companie:</strong> ${companie || 'Nespecificată'}</p>
          <p><strong>Serviciu de interes:</strong> ${serviciu}</p>
          <hr />
          <p><strong>Mesaj:</strong></p>
          <p>${mesaj}</p>
        </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Eroare Resend:", error);
    return NextResponse.json({ error: 'Eroare la trimiterea email-ului' }, { status: 500 });
  }
}
