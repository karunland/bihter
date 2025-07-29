import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Gmail SMTP konfigürasyonu
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Gmail adresiniz
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Konu mapping
    const subjectMapping = {
      'akademik': 'Akademik İşbirliği',
      'soylesi': 'Söyleşi Talebi',
      'editörlük': 'Editörlük Çalışması',
      'performans': 'Performans İşbirliği',
      'genel': 'Genel Soru'
    };

    // Email içeriği
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Kendi Gmail adresinize gönderilecek
      subject: `[İletişim Formu] ${subjectMapping[subject] || subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #eee; padding-bottom: 10px;">
            Yeni İletişim Formu Mesajı
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Ad Soyad:</strong> ${name}</p>
            <p><strong>E-posta:</strong> ${email}</p>
            <p><strong>Konu:</strong> ${subjectMapping[subject] || subject}</p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-left: 4px solid #007bff;">
            <h3 style="color: #333; margin-top: 0;">Mesaj:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #888; font-size: 12px;">
            <p>Bu mesaj bihtersabanoglu.com iletişim formundan gönderilmiştir.</p>
            <p>Gönderim Zamanı: ${new Date().toLocaleString('tr-TR')}</p>
          </div>
        </div>
      `,
    };

    // Email gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email başarıyla gönderildi!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email gönderme hatası:', error);
    return NextResponse.json(
      { success: false, message: 'Email gönderilirken bir hata oluştu.' },
      { status: 500 }
    );
  }
} 