const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

const { Resend } = require('resend');

async function main() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: process.env.ADMIN_EMAIL,
    subject: 'Resend test from heart-backend',
    text: 'If you received this, Resend mail is working (no SMTP credentials).',
  });

  if (error) {
    console.error('❌ test mail failed:', error);
    process.exit(1);
  }

  console.log('✅ test mail sent:', data);
}

main().catch((e) => {
  console.error('❌ test mail failed:', e.code, e.response || e.message);
  process.exit(1);
});


