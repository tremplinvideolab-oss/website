
'use server';

export async function subscribeToNewsletter(email: string, token: string): Promise<{ success: boolean; message?: string; }> {
  // IMPORTANT: Verify the reCAPTCHA token to ensure the request is legitimate.
  // This requires your reCAPTCHA secret key, which should be stored as an environment variable.
  
  const secretKey = process.env.RECAPTCHA_SECRET_KEY || '6Lf6ukwsAAAAABqs5v2OvHsl_B2fiKOTIxSpcH3O';
  if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is not set.");
      return { success: false, message: "Le serveur n'est pas configuré correctement." };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });
    
    const data = await response.json();

    if (!data.success || data.score < 0.5) {
        console.warn("reCAPTCHA verification failed:", data);
        return { success: false, message: "La vérification a échoué. Vous pourriez être un robot." };
    }

    // At this point, the user is likely human.
    // You can now add their email to your mailing list.
    // For example, using an API for Mailchimp, ConvertKit, etc.
    
    console.log(`New newsletter subscription from a verified user: ${email}`);

    // Simulate adding to a list and return success.
    return { success: true };

  } catch (error) {
    console.error("Error during newsletter subscription:", error);
    return { success: false, message: "Une erreur est survenue lors de l'inscription." };
  }
}

